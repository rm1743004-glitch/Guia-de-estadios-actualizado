// =============================================
//  REFERENCIAS AL DOM
// =============================================
const form        = document.getElementById('registroForm');
const successMsg  = document.getElementById('successMsg');
const successDetail = document.getElementById('successDetail');
const btnReset    = document.getElementById('btnReset');

const campoNombre = document.getElementById('nombre');
const campoCorreo = document.getElementById('correo');
const campoCiudad = document.getElementById('ciudad');

// =============================================
//  UTILIDADES
// =============================================

/**
 * Muestra un error en el campo indicado.
 * @param {string} id   - ID del span de error (ej. 'error-nombre')
 * @param {string} msg  - Mensaje a mostrar (vacío para limpiar)
 */
function mostrarError(id, msg) {
  document.getElementById(id).textContent = msg;
}

/**
 * Marca o desmarca un campo como inválido.
 * @param {HTMLElement} el      - El input/select
 * @param {boolean}     invalido
 */
function marcarInvalido(el, invalido) {
  if (invalido) {
    el.classList.add('invalid');
  } else {
    el.classList.remove('invalid');
  }
}

/**
 * Valida formato de correo básico.
 * @param {string} correo
 * @returns {boolean}
 */
function esCorreoValido(correo) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
}

// =============================================
//  VALIDACIONES INDIVIDUALES
// =============================================

function validarNombre() {
  const valor = campoNombre.value.trim();
  if (!valor) {
    mostrarError('error-nombre', 'El nombre es obligatorio.');
    marcarInvalido(campoNombre, true);
    return false;
  }
  if (valor.length < 3) {
    mostrarError('error-nombre', 'Debe tener al menos 3 caracteres.');
    marcarInvalido(campoNombre, true);
    return false;
  }
  mostrarError('error-nombre', '');
  marcarInvalido(campoNombre, false);
  return true;
}

function validarCorreo() {
  const valor = campoCorreo.value.trim();
  if (!valor) {
    mostrarError('error-correo', 'El correo es obligatorio.');
    marcarInvalido(campoCorreo, true);
    return false;
  }
  if (!esCorreoValido(valor)) {
    mostrarError('error-correo', 'Ingresa un correo válido (ej. nombre@dominio.com).');
    marcarInvalido(campoCorreo, true);
    return false;
  }
  mostrarError('error-correo', '');
  marcarInvalido(campoCorreo, false);
  return true;
}

function validarCiudad() {
  if (!campoCiudad.value) {
    mostrarError('error-ciudad', 'Selecciona una ciudad sede.');
    marcarInvalido(campoCiudad, true);
    return false;
  }
  mostrarError('error-ciudad', '');
  marcarInvalido(campoCiudad, false);
  return true;
}

function validarViaje() {
  const seleccionado = form.querySelector('input[name="viaje"]:checked');
  const grupo = form.querySelector('.radio-group');

  if (!seleccionado) {
    mostrarError('error-viaje', 'Indica si viajarías al torneo.');
    grupo.classList.add('invalid');
    return false;
  }
  mostrarError('error-viaje', '');
  grupo.classList.remove('invalid');
  return true;
}

// =============================================
//  VALIDACIÓN EN TIEMPO REAL (blur)
// =============================================
campoNombre.addEventListener('blur', validarNombre);
campoCorreo.addEventListener('blur', validarCorreo);
campoCiudad.addEventListener('change', validarCiudad);

// Limpiar error de radio al hacer clic en cualquiera
form.querySelectorAll('input[name="viaje"]').forEach(function(radio) {
  radio.addEventListener('change', validarViaje);
});

// =============================================
//  ENVÍO DEL FORMULARIO
// =============================================
form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Ejecutar todas las validaciones
  const nombreOk = validarNombre();
  const correoOk = validarCorreo();
  const ciudadOk = validarCiudad();
  const viajeOk  = validarViaje();

  if (!nombreOk || !correoOk || !ciudadOk || !viajeOk) {
    // Hacer scroll al primer error visible
    const primerError = form.querySelector('.invalid');
    if (primerError) {
      primerError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  // Recopilar datos para el mensaje de éxito
  const nombre  = campoNombre.value.trim();
  const correo  = campoCorreo.value.trim();
  const ciudad  = campoCiudad.options[campoCiudad.selectedIndex].text;
  const viaje   = form.querySelector('input[name="viaje"]:checked').value;

  const textoViaje = {
    si:     'Viajarás al torneo 🎉',
    no:     'Asistirás de forma local.',
    quizas: 'Aún lo estás pensando.'
  }[viaje];

  // Mostrar mensaje de éxito
  form.hidden = true;
  successMsg.hidden = false;
  successDetail.innerHTML =
    '<strong>' + nombre + '</strong>, tu registro fue recibido.<br>' +
    'Te contactaremos a <strong>' + correo + '</strong>.<br>' +
    'Ciudad de interés: <strong>' + ciudad + '</strong>.<br>' +
    textoViaje;
});

// =============================================
//  BOTÓN PARA REGISTRAR OTRA PERSONA
// =============================================
btnReset.addEventListener('click', function() {
  // Limpiar el formulario
  form.reset();

  // Limpiar estilos de error
  form.querySelectorAll('.invalid').forEach(function(el) {
    el.classList.remove('invalid');
  });

  // Limpiar mensajes de error
  form.querySelectorAll('.error').forEach(function(span) {
    span.textContent = '';
  });

  // Ocultar grupo de radios con error si quedó
  const grupo = form.querySelector('.radio-group');
  if (grupo) grupo.classList.remove('invalid');

  // Volver al formulario
  successMsg.hidden = true;
  form.hidden = false;
});