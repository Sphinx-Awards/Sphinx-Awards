
// Lista de fondos (puedes añadir más)
const fondos = [
  'homura.jpg',
  'lelouch.jpg',
  'jiraiya.jpg',
  'anya.jpg',
  'gojo.jpg',
  'hanako.jpg',
  'esdeath.jpg',
  'rem.jpg',
  'dofla.jpg',
  'rei.jpg',
  'yamamoto.jpg',
  'senku.jpg',
  'killua.jpg',
  'avatar.jpg',
  'yumeko.jpg',
  'nana.jpg',
  'nico.jpg',
];

let indiceFondo = 0;
const fondoCiclico = document.getElementById('fondo-ciclico');

function cambiarFondo() {
  fondoCiclico.style.backgroundImage = `url('${fondos[indiceFondo]}')`;
  indiceFondo = (indiceFondo + 1) % fondos.length;
}

// Cambiar cada 8 segundos
cambiarFondo();
setInterval(cambiarFondo, 8000);

