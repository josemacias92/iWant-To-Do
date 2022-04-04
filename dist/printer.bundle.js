/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/js/printer.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ScreenPrinter)
/* harmony export */ });
class ScreenPrinter {

  colocarDialogo(contenedor, idDialogo) {
    const vitrina = this.appendChild(contenedor, "div", `oscurecedor${idDialogo}`, "vitrina", "")
    const capa = this.appendChild(vitrina, "div", "", "capa", "")
    const form = this.appendChild(capa, "form", idDialogo, "card", "")
    return form
}

removeDialogo(contenedor, form, idDialogo) {
    form.reset()
    const vitrina = document.getElementById(`oscurecedor${idDialogo}`)
    contenedor.removeChild(vitrina)
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnRlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQSxzRUFBc0UsVUFBVTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxVQUFVO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvcHJpbnRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlblByaW50ZXIge1xyXG5cclxuICBjb2xvY2FyRGlhbG9nbyhjb250ZW5lZG9yLCBpZERpYWxvZ28pIHtcclxuICAgIGNvbnN0IHZpdHJpbmEgPSB0aGlzLmFwcGVuZENoaWxkKGNvbnRlbmVkb3IsIFwiZGl2XCIsIGBvc2N1cmVjZWRvciR7aWREaWFsb2dvfWAsIFwidml0cmluYVwiLCBcIlwiKVxyXG4gICAgY29uc3QgY2FwYSA9IHRoaXMuYXBwZW5kQ2hpbGQodml0cmluYSwgXCJkaXZcIiwgXCJcIiwgXCJjYXBhXCIsIFwiXCIpXHJcbiAgICBjb25zdCBmb3JtID0gdGhpcy5hcHBlbmRDaGlsZChjYXBhLCBcImZvcm1cIiwgaWREaWFsb2dvLCBcImNhcmRcIiwgXCJcIilcclxuICAgIHJldHVybiBmb3JtXHJcbn1cclxuXHJcbnJlbW92ZURpYWxvZ28oY29udGVuZWRvciwgZm9ybSwgaWREaWFsb2dvKSB7XHJcbiAgICBmb3JtLnJlc2V0KClcclxuICAgIGNvbnN0IHZpdHJpbmEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3NjdXJlY2Vkb3Ike2lkRGlhbG9nb31gKVxyXG4gICAgY29udGVuZWRvci5yZW1vdmVDaGlsZCh2aXRyaW5hKVxyXG59XHJcblxyXG4gIG1vdmVDdXJzb3JUb0VuZChpbnB1dCkge1xyXG4gICAgaW5wdXQuZm9jdXMoKVxyXG4gICAgaWYgKHR5cGVvZiBpbnB1dC5zZWxlY3Rpb25TdGFydCA9PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIGlucHV0LnNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uRW5kID0gaW5wdXQudmFsdWUubGVuZ3RoO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW5wdXQuY3JlYXRlVGV4dFJhbmdlICE9IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgdmFyIHJhbmdlID0gaW5wdXQuY3JlYXRlVGV4dFJhbmdlKCk7XHJcbiAgICAgIHJhbmdlLmNvbGxhcHNlKGZhbHNlKTtcclxuICAgICAgcmFuZ2Uuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHBlbmRDaGlsZChlbGVtZW50b1BhZHJlLCBldGlxdWV0YSwgaWQsIGNsYXNlLCBjb250ZW5pZG8pIHtcclxuXHJcbiAgICBsZXQgbm9kbyA9IHRoaXMuY3JlYXRlRWxlbWVudChldGlxdWV0YSwgaWQsIGNsYXNlLCBjb250ZW5pZG8pXHJcbiAgICBlbGVtZW50b1BhZHJlLmFwcGVuZENoaWxkKG5vZG8pO1xyXG4gICAgcmV0dXJuIG5vZG87XHJcbiAgfVxyXG5cclxuICBpbnNlcnRBZnRlckVsZW1lbnQocHJldkVsZW1lbnQsIGV0aXF1ZXRhLCBpZCwgY2xhc2UsIGNvbnRlbmlkbykge1xyXG5cclxuICAgIGxldCBub2RvID0gdGhpcy5jcmVhdGVFbGVtZW50KGV0aXF1ZXRhLCBpZCwgY2xhc2UsIGNvbnRlbmlkbylcclxuICAgIHByZXZFbGVtZW50LmFmdGVyKG5vZG8pO1xyXG4gICAgcmV0dXJuIG5vZG87XHJcbiAgfVxyXG5cclxuICBpbnNlcnRCZWZvcmVFbGVtZW50KHByZXZFbGVtZW50LCBldGlxdWV0YSwgaWQsIGNsYXNlLCBjb250ZW5pZG8pIHtcclxuXHJcbiAgICBsZXQgbm9kbyA9IHRoaXMuY3JlYXRlRWxlbWVudChldGlxdWV0YSwgaWQsIGNsYXNlLCBjb250ZW5pZG8pXHJcbiAgICBwcmV2RWxlbWVudC5iZWZvcmUobm9kbyk7XHJcbiAgICByZXR1cm4gbm9kbztcclxuICB9XHJcblxyXG4gIGNyZWF0ZUVsZW1lbnQoZXRpcXVldGEsIGlkLCBjbGFzZSwgY29udGVuaWRvKSB7XHJcblxyXG4gICAgbGV0IG5vZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGV0aXF1ZXRhKTtcclxuXHJcbiAgICBpZiAoIWlkID09IFwiXCIpIHtcclxuICAgICAgbm9kby5pZCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghY2xhc2UgPT0gXCJcIikge1xyXG4gICAgICBub2RvLmNsYXNzTGlzdC5hZGQoY2xhc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vZG8udGV4dENvbnRlbnQgPSBjb250ZW5pZG87XHJcblxyXG4gICAgcmV0dXJuIG5vZG9cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9