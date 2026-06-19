/* =========================================================
   script.js – Ciudades Sede Copa Mundial 2026
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  iniciarFiltros();
  cargarImagenes();
});

/* ---------- FILTROS ---------- */
function iniciarFiltros() {
  var buttons = document.querySelectorAll('.gate-btn');
  var groups  = document.querySelectorAll('.country-group');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filtro = btn.dataset.filter;
      groups.forEach(function (g) {
        g.style.display = (filtro === 'all' || g.dataset.country === filtro) ? '' : 'none';
      });
    });
  });
}

/* ---------- IMÁGENES ---------- */
/*
  Bug anterior: encodeURIComponent(titulos.join('|')) codificaba el "|" como "%7C"
  y Wikipedia lo trataba como un único título enorme.
  Solución: codificar CADA título por separado y unir con "|" literal.
*/
function cargarImagenes() {
  var slots = Array.from(document.querySelectorAll('.photo-slot[data-wiki]'));

  // Lotes de 8 para no saturar la API
  for (var i = 0; i < slots.length; i += 8) {
    (function (lote) {
      setTimeout(function () { fetchLote(lote); }, (i / 8) * 400);
    })(slots.slice(i, i + 8));
  }
}

function fetchLote(slots) {
  // *** CLAVE: encodeURIComponent por título individual, | sin codificar ***
  var param = slots.map(function (s) {
    return encodeURIComponent(s.dataset.wiki);
  }).join('|');

  var url = 'https://en.wikipedia.org/w/api.php'
    + '?action=query&prop=pageimages&format=json&origin=*'
    + '&pithumbsize=800&piprop=thumbnail&redirects=1'
    + '&titles=' + param;

  fetch(url)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var mapa = {};
      var pages = (data.query || {}).pages || {};

      Object.values(pages).forEach(function (p) {
        if (p.thumbnail && p.thumbnail.source) {
          mapa[p.title.toLowerCase()] = p.thumbnail.source;
        }
      });

      // Seguir normalizaciones (tildes, mayúsculas, etc.)
      ((data.query || {}).normalized || []).forEach(function (n) {
        var img = mapa[n.to.toLowerCase()];
        if (img) mapa[n.from.toLowerCase()] = img;
      });

      // Seguir redirects (CN Tower → Canada's National Tower, etc.)
      ((data.query || {}).redirects || []).forEach(function (r) {
        var img = mapa[r.to.toLowerCase()];
        if (img) mapa[r.from.toLowerCase()] = img;
      });

      slots.forEach(function (slot) {
        var img = mapa[slot.dataset.wiki.toLowerCase()];
        if (img) {
          ponerImagen(slot, img);
        } else {
          // Segunda oportunidad: búsqueda individual
          buscarIndividual(slot);
        }
      });
    })
    .catch(function () {});
}

/* Títulos alternativos para los que Wikipedia redirige de forma especial */
var ALTERNATIVAS = {
  'cn tower':                                 'Toronto',
  'centennial olympic park':                  'Atlanta',
  'south beach, miami beach':                 'Miami Beach',
  'parque fundidora':                         'Monterrey',
  'national world war i museum and memorial': 'Kansas City, Missouri'
};

function buscarIndividual(slot) {
  var titulo = ALTERNATIVAS[slot.dataset.wiki.toLowerCase()] || slot.dataset.wiki;
  var url = 'https://en.wikipedia.org/w/api.php'
    + '?action=query&prop=pageimages&format=json&origin=*'
    + '&pithumbsize=800&piprop=thumbnail&redirects=1'
    + '&titles=' + encodeURIComponent(titulo);

  fetch(url)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      var pages = (data.query || {}).pages || {};
      Object.values(pages).forEach(function (p) {
        if (p.thumbnail && p.thumbnail.source) {
          ponerImagen(slot, p.thumbnail.source);
        }
      });
    })
    .catch(function () {});
}

/* ---------- INSERTAR IMAGEN ---------- */
function ponerImagen(slot, src) {
  var caption = slot.querySelector('figcaption');
  var nombre  = caption ? caption.querySelector('strong').textContent : '';

  // Limpiar slot
  slot.innerHTML = '';
  slot.style.position   = 'relative';
  slot.style.padding    = '0';
  slot.style.border     = 'none';
  slot.style.background = '#111';
  slot.style.minHeight  = '128px';
  slot.style.overflow   = 'hidden';

  // Imagen
  var img = document.createElement('img');
  img.src = src;
  img.alt = nombre;
  img.style.width      = '100%';
  img.style.height     = '100%';
  img.style.objectFit  = 'cover';
  img.style.position   = 'absolute';
  img.style.top        = '0';
  img.style.left       = '0';
  img.style.borderRadius = '6px';
  slot.appendChild(img);

  // Overlay con nombre
  var over = document.createElement('div');
  over.style.position     = 'absolute';
  over.style.bottom       = '0';
  over.style.left         = '0';
  over.style.right        = '0';
  over.style.padding      = '20px 10px 8px';
  over.style.background   = 'linear-gradient(transparent, rgba(0,0,0,0.75))';
  over.style.borderRadius = '0 0 6px 6px';

  var strong = document.createElement('strong');
  strong.textContent  = nombre;
  strong.style.color  = '#fff';
  strong.style.display = 'block';
  strong.style.fontSize = '0.84rem';

  var credit = document.createElement('span');
  credit.textContent  = '© Wikipedia / CC';
  credit.style.color  = 'rgba(255,255,255,0.65)';
  credit.style.fontSize = '0.65rem';
  credit.style.fontFamily = 'monospace';
  credit.style.display = 'block';
  credit.style.marginTop = '2px';

  over.appendChild(strong);
  over.appendChild(credit);
  slot.appendChild(over);
}