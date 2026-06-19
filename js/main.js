const datosEstadios = {
    'azteca': {
        nombre: 'Estadio Azteca',
        descripcion: 'El legendario coloso de Santa Úrsula en la Ciudad de México es el primer estadio en la historia en albergar tres Copas del Mundo (1970, 1986 y 2026). Será la prestigiosa sede del crucial partido inaugural del torneo el 11 de junio.',
        partidos: 5,
        mapa: 'https://maps.google.com/maps?q=Estadio%20Azteca,%20CDMX,%20Mexico&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'bbva': {
        nombre: 'Estadio Monterrey (BBVA)',
        descripcion: 'Conocido como el "Gigante de Acero", está ubicado en Guadalupe, Nuevo León. Es uno de los recintos más modernos de Latinoamérica, famoso por su imponente diseño arquitectónico que se integra de manera espectacular con la vista hacia el Cerro de la Silla.',
        partidos: 4,
        mapa: 'https://maps.google.com/maps?q=Estadio%20BBVA,%20Guadalupe,%20Nuevo%20Leon,%20Mexico&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'akron': {
        nombre: 'Estadio Guadalajara (Akron)',
        descripcion: 'Situado en Zapopan, Jalisco, destaca por su asombroso diseño exterior que emula un volcán cubierto de vegetación. Ofrece una visibilidad y acústica perfectas desde cualquier localidad para disfrutar del fútbol.',
        partidos: 4,
        mapa: 'https://maps.google.com/maps?q=Estadio%20Akron,%20Zapopan,%20Jalisco,%20Mexico&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },

    
    'bmo-field': {
        nombre: 'BMO Field',
        descripcion: 'Ubicado en el Exhibition Place de Toronto, es la casa de la selección nacional de Canadá. Para el torneo de 2026, el estadio pasará por una ampliación estructural temporal para recibir a miles de fanáticos del mundo entero.',
        partidos: 6,
        mapa: 'https://maps.google.com/maps?q=BMO%20Field,%20Toronto,%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'bc-place': {
        nombre: 'BC Place',
        descripcion: 'Situado en la hermosa ciudad costera de Vancouver, es un espectacular recinto multiusos que cuenta con un avanzado sistema de techo retráctil soportado por cables de alta tensión. Fue la sede principal en el Mundial Femenino de 2015.',
        partidos: 7,
        mapa: 'https://maps.google.com/maps?q=BC%20Place,%20Vancouver,%20Canada&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },

    
    'sofi-stadium': {
        nombre: 'SoFi Stadium',
        descripcion: 'Este colosal recinto en Inglewood, Los Ángeles, es considerado el complejo de entretenimiento más costoso y tecnológico del planeta. Posee una icónica cubierta translúcida y una monumental pantalla de doble vista circular de 360 grados llamada Infinity Screen.',
        partidos: 8,
        mapa: 'https://maps.google.com/maps?q=SoFi%20Stadium,%20Inglewood,%20California,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'metlife': {
        nombre: 'MetLife Stadium',
        descripcion: 'Situado en East Rutherford, Nueva Jersey (área metropolitana de Nueva York). Es un estadio masivo de estructura metálica externa que cambia de color dinámicamente. Ha sido galardonado oficialmente con el partido definitivo: la Gran Final de la Copa del Mundo del 26 de julio.',
        partidos: 8,
        mapa: 'https://maps.google.com/maps?q=MetLife%20Stadium,%20East%20Rutherford,%20New%20Jersey,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'att-stadium': {
        nombre: 'AT&T Stadium',
        descripcion: 'Ubicado en Arlington, Dallas. Esta obra cumbre de la ingeniería cuenta con dos arcos monumentales que sostienen el techo retráctil más grande del mundo y puertas de cristal de 36 metros de altura. Será la sede con más partidos de todo el torneo (9 juegos en total).',
        partidos: 9,
        mapa: 'https://maps.google.com/maps?q=AT%26T%20Stadium,%20Arlington,%20Texas,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'mercedes-benz': {
        nombre: 'Mercedes-Benz Stadium',
        descripcion: 'Ubicado en Atlanta, Georgia. Destaca arquitectónicamente por su vanguardista techo retráctil compuesto de ocho paneles que se abren como un molinillo o el diafragma de una cámara fotográfica, coronado por una impresionante pantalla de video circular tipo halo.',
        partidos: 8,
        mapa: 'https://maps.google.com/maps?q=Mercedes-Benz%20Stadium,%20Atlanta,%20Georgia,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'hard-rock': {
        nombre: 'Hard Rock Stadium',
        descripcion: 'Ubicado en Miami Gardens, Florida. Es un recinto multiespacio de nivel global que cuenta con una enorme visera textil instalada para resguardar a los espectadores del clima tropical, ofreciendo un gran ambiente festivo.',
        partidos: 7,
        mapa: 'https://maps.google.com/maps?q=Hard%20Rock%20Stadium,%20Miami%20Gardens,%20Florida,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'gillette-stadium': {
        nombre: 'Gillette Stadium',
        descripcion: 'Situado en Foxborough, en el área de Boston. Cuenta con un icónico paisaje en su acceso norte integrado por un faro costero característico y un puente peatonal elevado que se han convertido en los símbolos representativos del recinto.',
        partidos: 7,
        mapa: 'https://maps.google.com/maps?q=Gillette%20Stadium,%20Foxborough,%20Massachusetts,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'lincoln-financial': {
        nombre: 'Lincoln Financial Field',
        descripcion: 'Ubicado en Filadelfia, Pensilvania. Es mundialmente reconocido como un estadio "verde" autosustentable gracias al aprovechamiento total de fuentes renovables como turbinas eólicas fijas y miles de paneles solares que cubren su exterior.',
        partidos: 6,
        mapa: 'https://maps.google.com/maps?q=Lincoln%20Financial%20Field,%20Philadelphia,%20Pennsylvania,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'lumen-field': {
        nombre: 'Lumen Field',
        descripcion: 'Ubicado en la ciudad norteña de Seattle, Washington. Presenta una configuración en forma de herradura invertida diseñada para amplificar las ondas de sonido del público en el interior, ostentando récords históricos de decibelios en eventos deportivos.',
        partidos: 6,
        mapa: 'https://maps.google.com/maps?q=Lumen%20Field,%20Seattle,%20Washington,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'levi-stadium': {
        nombre: 'Levi\'s Stadium',
        descripcion: 'Situado en pleno corazón de Silicon Valley, en Santa Clara, San Francisco. Es un estandarte de la sostenibilidad ecológica al ser el primer recinto profesional de su tipo en recibir la prestigiosa certificación LEED Gold, contando con un enorme techo verde transpirable.',
        partidos: 6,
        mapa: 'https://maps.google.com/maps?q=Levi\'s%20Stadium,%20Santa%20Clara,%20California,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'nrg-stadium': {
        nombre: 'NRG Stadium',
        descripcion: 'Situado en Houston, Texas. Pasó a la historia de la ingeniería moderna al ser el primer estadio con techo retráctil motorizado construido para el deporte estadounidense, ofreciendo climatización inteligente de primer nivel.',
        partidos: 7,
        mapa: 'https://maps.google.com/maps?q=NRG%20Stadium,%20Houston,%20Texas,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    'arrowhead': {
        nombre: 'Arrowhead Stadium',
        descripcion: 'Situado en Kansas City, Misuri. Es un estadio con un misticismo único y una de las canchas con mayor tradición. Posee el récord mundial Guinness de la afición más ruidosa y ferviente del planeta en espacios abiertos.',
        partidos: 6,
        mapa: 'https://maps.google.com/maps?q=Arrowhead%20Stadium,%20Kansas%20City,%20Missouri,%20USA&t=&z=15&ie=UTF8&iwloc=&output=embed'
    }
};
document.addEventListener('DOMContentLoaded', () => {
    const botonesFiltro = document.querySelectorAll('.btn-filtro');
    const seccionesPais = document.querySelectorAll('.subseccion-pais');
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            
            
            botonesFiltro.forEach(btn => btn.classList.remove('active'));
            boton.classList.add('active');

            
            const paisSeleccionado = boton.getAttribute('data-pais');

            
            seccionesPais.forEach(seccion => {
                const paisDeLaSeccion = seccion.getAttribute('data-pais');
                
                if (paisSeleccionado === 'todos' || paisSeleccionado === paisDeLaSeccion) {
                    seccion.style.display = 'block'; 
                } else {
                    seccion.style.display = 'none';  
                }
            });
        });
    });
});


function abrirModal(idEstadio) {
    const modal = document.getElementById('modal-detalle');
    const estadio = datosEstadios[idEstadio]; 

    
    if (estadio) {
        document.getElementById('modal-titulo').innerText = estadio.nombre;
        document.getElementById('modal-descripcion').innerText = estadio.descripcion;
        document.getElementById('modal-partidos').innerText = estadio.partidos;
        document.querySelector('#modal-mapa iframe').src = estadio.mapa;

        
        modal.style.display = 'flex'; 
    } else {
        console.warn('Los datos de este estadio aún no han sido agregados.');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-detalle');
    const botonCerrar = document.querySelector('.cerrar-modal');

    
    botonCerrar.addEventListener('click', () => {
        modal.style.display = 'none';
        document.querySelector('#modal-mapa iframe').src = ''; 
    });


    window.addEventListener('click', (evento) => {
        if (evento.target === modal) {
            modal.style.display = 'none';
            document.querySelector('#modal-mapa iframe').src = '';
        }
    });
});

 // Datos extendidos para el comparador (capacidad, año, país, imagen)
        const datosComparador = {
            'azteca':           { capacidad: 83264,  anio: 1966, pais: 'México',         ciudad: 'Ciudad de México', imagen: 'img/Estadios/Azteca.webp',      techo: 'Abierto' },
            'bbva':             { capacidad: 53500,  anio: 2015, pais: 'México',         ciudad: 'Guadalupe, N.L.',  imagen: 'img/Estadios/BBVA.jpg',         techo: 'Abierto' },
            'akron':            { capacidad: 48000,  anio: 2010, pais: 'México',         ciudad: 'Zapopan, Jalisco', imagen: 'img/Estadios/Akron.jfif',       techo: 'Abierto' },
            'bmo-field':        { capacidad: 30000,  anio: 2007, pais: 'Canadá',         ciudad: 'Toronto',          imagen: 'img/Estadios/toronto.jfif',     techo: 'Abierto' },
            'bc-place':         { capacidad: 54500,  anio: 1983, pais: 'Canadá',         ciudad: 'Vancouver',        imagen: 'img/Estadios/Vancouver.jpg',    techo: 'Retráctil' },
            'sofi-stadium':     { capacidad: 70240,  anio: 2020, pais: 'EE.UU.',         ciudad: 'Los Ángeles, CA',  imagen: 'img/Estadios/SoFI.jpg',         techo: 'Fijo translúcido' },
            'metlife':          { capacidad: 82500,  anio: 2010, pais: 'EE.UU.',         ciudad: 'Nueva York / NJ',  imagen: 'img/Estadios/Metlife.jpg',      techo: 'Abierto' },
            'att-stadium':      { capacidad: 80000,  anio: 2009, pais: 'EE.UU.',         ciudad: 'Dallas, TX',       imagen: 'img/Estadios/ATT.jpg',          techo: 'Retráctil' },
            'mercedes-benz':    { capacidad: 71000,  anio: 2017, pais: 'EE.UU.',         ciudad: 'Atlanta, GA',      imagen: 'img/Estadios/Atlanta.webp',     techo: 'Retráctil' },
            'hard-rock':        { capacidad: 65300,  anio: 1987, pais: 'EE.UU.',         ciudad: 'Miami, FL',        imagen: 'img/Estadios/Hard Rock.jpg',    techo: 'Visera textil' },
            'gillette-stadium': { capacidad: 65878,  anio: 2002, pais: 'EE.UU.',         ciudad: 'Boston, MA',       imagen: 'img/Estadios/Gillette.webp',    techo: 'Abierto' },
            'lincoln-financial':{ capacidad: 67594,  anio: 2003, pais: 'EE.UU.',         ciudad: 'Filadelfia, PA',   imagen: 'img/Estadios/Lincoln.jfif',     techo: 'Abierto' },
            'lumen-field':      { capacidad: 69000,  anio: 2002, pais: 'EE.UU.',         ciudad: 'Seattle, WA',      imagen: 'img/Estadios/Lumen Field.jfif', techo: 'Parcial' },
            'levi-stadium':     { capacidad: 68500,  anio: 2014, pais: 'EE.UU.',         ciudad: 'San Francisco, CA',imagen: 'img/Estadios/Levi\'s.jpg',      techo: 'Abierto' },
            'nrg-stadium':      { capacidad: 72220,  anio: 2002, pais: 'EE.UU.',         ciudad: 'Houston, TX',      imagen: 'img/Estadios/NRG.jpg',          techo: 'Retráctil' },
            'arrowhead':        { capacidad: 76416,  anio: 1972, pais: 'EE.UU.',         ciudad: 'Kansas City, MO',  imagen: 'img/Estadios/kansas.jpg',       techo: 'Abierto' },
        };

        // Llenar los <select> con todos los estadios del main.js
        function poblarSelects() {
            const opciones = Object.keys(datosEstadios).map(id => {
                return `<option value="${id}">${datosEstadios[id].nombre}</option>`;
            }).join('');

            document.getElementById('estadio1').innerHTML =
                '<option value="">-- Selecciona un estadio --</option>' + opciones;
            document.getElementById('estadio2').innerHTML =
                '<option value="">-- Selecciona un estadio --</option>' + opciones;
        }

        function compararEstadios() {
            const id1 = document.getElementById('estadio1').value;
            const id2 = document.getElementById('estadio2').value;

            if (!id1 || !id2) {
                alert('Por favor selecciona dos estadios para comparar.');
                return;
            }
            if (id1 === id2) {
                alert('Selecciona dos estadios diferentes para comparar.');
                return;
            }

            const e1 = { ...datosEstadios[id1], ...datosComparador[id1] };
            const e2 = { ...datosEstadios[id2], ...datosComparador[id2] };

            // Encabezados con foto y nombre
            document.getElementById('foto1').src = e1.imagen || '';
            document.getElementById('foto1').alt = e1.nombre;
            document.getElementById('nombreHeader1').textContent = e1.nombre;

            document.getElementById('foto2').src = e2.imagen || '';
            document.getElementById('foto2').alt = e2.nombre;
            document.getElementById('nombreHeader2').textContent = e2.nombre;

            // Construir filas de comparación
            const filas = [
                {
                    etiqueta: '🌍 País',
                    val1: e1.pais || '—',
                    val2: e2.pais || '—',
                    comparar: false
                },
                {
                    etiqueta: '🏙️ Ciudad',
                    val1: e1.ciudad || '—',
                    val2: e2.ciudad || '—',
                    comparar: false
                },
                {
                    etiqueta: '👥 Capacidad',
                    val1: e1.capacidad ? e1.capacidad.toLocaleString('es-MX') + ' espect.' : '—',
                    val2: e2.capacidad ? e2.capacidad.toLocaleString('es-MX') + ' espect.' : '—',
                    numVal1: e1.capacidad || 0,
                    numVal2: e2.capacidad || 0,
                    comparar: true,
                    mayorEsMejor: true
                },
                {
                    etiqueta: '🗓️ Año de construcción',
                    val1: e1.anio || '—',
                    val2: e2.anio || '—',
                    numVal1: e1.anio || 9999,
                    numVal2: e2.anio || 9999,
                    comparar: true,
                    mayorEsMejor: false   // más nuevo = mejor (menor año)
                },
                {
                    etiqueta: '⚽ Partidos asignados',
                    val1: e1.partidos ? e1.partidos + ' partidos' : '—',
                    val2: e2.partidos ? e2.partidos + ' partidos' : '—',
                    numVal1: e1.partidos || 0,
                    numVal2: e2.partidos || 0,
                    comparar: true,
                    mayorEsMejor: true
                },
                {
                    etiqueta: '🏟️ Tipo de techo',
                    val1: e1.techo || '—',
                    val2: e2.techo || '—',
                    comparar: false
                },
                {
                    etiqueta: '📋 Descripción',
                    val1: e1.descripcion || '—',
                    val2: e2.descripcion || '—',
                    comparar: false,
                    esDescripcion: true
                }
            ];

            let html = '';
            filas.forEach(fila => {
                let clase1 = 'col-dato';
                let clase2 = 'col-dato';

                if (fila.comparar && fila.numVal1 !== undefined && fila.numVal2 !== undefined) {
                    if (fila.mayorEsMejor) {
                        if (fila.numVal1 > fila.numVal2) clase1 += ' ganador';
                        else if (fila.numVal2 > fila.numVal1) clase2 += ' ganador';
                    } else {
                        // menor año = más nuevo = destacado
                        if (fila.numVal1 < fila.numVal2) clase1 += ' ganador';
                        else if (fila.numVal2 < fila.numVal1) clase2 += ' ganador';
                    }
                }

                const filaClass = fila.esDescripcion ? ' class="fila-descripcion"' : '';
                html += `<tr${filaClass}>
                    <td class="${clase1}">${fila.val1}</td>
                    <td class="col-etiqueta">${fila.etiqueta}</td>
                    <td class="${clase2}">${fila.val2}</td>
                </tr>`;
            });

            document.getElementById('cuerpoTabla').innerHTML = html;

            // Mostrar tabla, ocultar mensaje
            document.getElementById('mensajeInicial').style.display = 'none';
            const wrapper = document.getElementById('tablaWrapper');
            wrapper.style.display = 'block';
            wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // Inicializar selects al cargar la página
        document.addEventListener('DOMContentLoaded', poblarSelects);