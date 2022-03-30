export default function InsertarEnDOM(elementoPadre, etiqueta, id, clase, contenido) {
  let nodo = document.createElement(etiqueta);
  nodo.id = id;
  nodo.classList.add(clase);
  nodo.textContent = contenido;
  elementoPadre.appendChild(nodo);
  return nodo;
}