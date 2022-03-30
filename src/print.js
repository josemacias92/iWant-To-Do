export default function InsertarEnDOM(elementoPadre, etiqueta, id, clase, contenido) {
  
  let nodo = document.createElement(etiqueta);

  if (!id === "") {
    nodo.id = id;
  }

  if (!clase === "") {
    nodo.className = clase;
  }

  nodo.textContent = contenido;
  elementoPadre.appendChild(nodo);

  return nodo;
}