export default class ScreenPrinter {

//   colocarDialogo(contenedor, idDialogo) {
//     const vitrina = this.appendChild(contenedor, "div", `oscurecedor${idDialogo}`, "vitrina", "")
//     const capa = this.appendChild(vitrina, "div", "", "capa", "")
//     const form = this.appendChild(capa, "form", idDialogo, "card", "")
//     return form
// }

colocarDialogo(app, dialogo) {
  const vitrina = this.appendChild(app, "div", `oscurecedor${dialogo.id}`, "vitrina", "")
  const capa = this.appendChild(vitrina, "div", "", "capa", "")
  capa.appendChild(dialogo)
}

removeDialogo(app, form, idDialogo) {
    form.reset()
    const vitrina = document.getElementById(`oscurecedor${idDialogo}`)
    app.removeChild(vitrina)
}

  moveCursorToEnd(input) {
    input.focus()
    if (typeof input.selectionStart == "number") {
      input.selectionStart = input.selectionEnd = input.value.length;
    } else if (typeof input.createTextRange != "undefined") {
      var range = input.createTextRange();
      range.collapse(false);
      range.select();
    }
  }

  appendChild(elementoPadre, etiqueta, id, clase, contenido) {

    let nodo = this.createElement(etiqueta, id, clase, contenido)
    elementoPadre.appendChild(nodo);
    return nodo;
  }

  insertAfterElement(prevElement, etiqueta, id, clase, contenido) {

    let nodo = this.createElement(etiqueta, id, clase, contenido)
    prevElement.after(nodo);
    return nodo;
  }

  insertBeforeElement(prevElement, etiqueta, id, clase, contenido) {

    let nodo = this.createElement(etiqueta, id, clase, contenido)
    prevElement.before(nodo);
    return nodo;
  }

  createElement(etiqueta, id, clase, contenido) {

    let nodo = document.createElement(etiqueta);

    if (!id == "") {
      nodo.id = id;
    }

    if (!clase == "") {
      nodo.classList.add(clase);
    }

    nodo.textContent = contenido;

    return nodo
  }
}
