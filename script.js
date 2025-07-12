const CLAVE = "mallaEstados";

function cargarEstados() {
  const json = localStorage.getItem(CLAVE);
  if (!json) return;
  const estados = JSON.parse(json);
  document.querySelectorAll(".asignatura").forEach((el, i) => {
    if (estados[i]) el.classList.add("cursada");
  });
}

function guardarEstados() {
  const estados = Array.from(document.querySelectorAll(".asignatura"))
    .map(el => el.classList.contains("cursada"));
  localStorage.setItem(CLAVE, JSON.stringify(estados));
}

function toggleEstado(el) {
  el.classList.toggle("cursada");
  guardarEstados();
}

window.onload = cargarEstados;
