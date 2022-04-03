'use strict'

class Tarea {

    constructor(titulo, priporidad, fecha, descripcion, checklist){
        this.titulo = titulo;
        this.priporidad = priporidad;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.checklist = checklist;
    }
}

class Lista {

    constructor(nombre, tareas){
        this.nombre = nombre;
        this.tareas = tareas;
    }
}

class CheckItem {

    constructor(hecho, etiqueta){
        this.etiqueta = etiqueta;
        this.hecho = hecho;
    }
}

const appName = "iWant To-Do";
const usuario = "Jose M.";

var listas = getSamples();
generarInterfaz(appName, usuario, listas)

main()

function main() {

}

function getSamples() {

    const listas = []

    //lista 1
    const tareas1 = []
    const checklist11 = []

    var check111 = new CheckItem(true, "Estudiar tema")
    var check112 = new CheckItem(true, "Desarrollar interfaz")
    var check113 = new CheckItem(false, "Implementar funcionalidades")
    checklist11.push(check111)
    checklist11.push(check112)
    checklist11.push(check113)

    var tarea11 = new Tarea("Hacer app de lista de tareas", "alta", new Date(2022, 3, 31), "Desarrollar una app web de gestión de listas de tareas", checklist11)
    tareas1.push(tarea11)

    const checklist12 = []
    var check121 = new CheckItem(false, "Desarrollar interfaz")
    var check122 = new CheckItem(false, "Implementar funcionalidades")
    var check123 = new CheckItem(false, "Realizar tests")
    var check124 = new CheckItem(false, "Desplegar app")
    checklist12.push(check121)
    checklist12.push(check122)
    checklist12.push(check123)
    checklist12.push(check124)

    var tarea12 = new Tarea("Desarrollar juego de Hundir la flota", "media", new Date(2022, 4, 6), "Crear juego online de hundir la flota.", checklist12)
    tareas1.push(tarea12)

    const lista1 = new Lista("Teralco", tareas1)
    listas.push(lista1)

    // lista 2
    const tareas2 = []
    const checklist21 = []

    var check211 = new CheckItem(true, "Hacer la cama")
    var check212 = new CheckItem(true, "Limpiar el polvo")
    var check213 = new CheckItem(false, "Barrer y fregar")
    checklist21.push(check211)
    checklist21.push(check212)
    checklist21.push(check213)

    var tarea21 = new Tarea("Limpiar la habitacion", "baja", new Date(2022, 4, 1), "Guardar todo debajo de la alfombra para que el ligue que viene de visita esta noche no se espante.", checklist21)
    tareas2.push(tarea21)

    const checklist22 = []
    var check221 = new CheckItem(true, "Espaguetis")
    var check222 = new CheckItem(false, "Pimientos")
    var check223 = new CheckItem(true, "Cebollas")
    var check224 = new CheckItem(false, "Tomate frito")
    var check225 = new CheckItem(false, "Carne picada")
    var check226 = new CheckItem(true, "Chocolate")
    var check227 = new CheckItem(false, "Pan")
    checklist22.push(check221)
    checklist22.push(check222)
    checklist22.push(check223)
    checklist22.push(check224)
    checklist22.push(check225)
    checklist22.push(check226)
    checklist22.push(check227)

    var tarea22 = new Tarea("Hacer la compra", "media", new Date(2022, 4, 3), "Comprar lo necesario para la semana.", checklist22)
    tareas2.push(tarea22)

    const checklist23 = []
    var check231 = new CheckItem(true, "Hacer la compra de la comida")
    var check232 = new CheckItem(false, "Cortar y lavar la verdura")
    var check233 = new CheckItem(true, "Hervir la pasta")
    var check234 = new CheckItem(false, "Hacer el sofrito")
    var check235 = new CheckItem(false, "Mezclar todo en la sartén")
    var check236 = new CheckItem(false, "Servir y saborear")
    checklist23.push(check231)
    checklist23.push(check232)
    checklist23.push(check233)
    checklist23.push(check234)
    checklist23.push(check235)
    checklist23.push(check236)

    var tarea23 = new Tarea("Cocinar algo delicioso", "alta", new Date(2022, 4, 2), "Hacer espaguetis a la boloñesa.", checklist22)
    tareas2.push(tarea23)

    const lista2 = new Lista("Casa", tareas2)

    listas.push(lista2);

    return listas;
}

function generarInterfaz(appName, usuario, listas) {

    const app = document.createElement('div')
    app.id = "app"
    const body = document.getElementsByTagName("body")[0]
  
    renderizarHeader(app, appName, usuario)
    const main = InsertarEnDOM(app, "div", "main", "", "")
  
    for (let i = 0; i < listas.length; i++) {
      const lista = listas[i];
      renderizarLista(i, app, lista)
    }
  
    body.appendChild(app);
  }
  
  function renderizarHeader(contenedor, nombreApp, usuario) {
  
    const header = InsertarEnDOM(contenedor, "div", "header", "", "")
    InsertarEnDOM(header, "div", "logo", "", nombreApp)
    InsertarEnDOM(header, "div", "saludo", "", usuario)
  
    return header;
  }
  
  function renderizarLista(idLista, contenedor, lista) {
  
    const listaView = InsertarEnDOM(contenedor, "div", "", "lista", "")
    const cabecera = generarCabeceraLista(idLista, listaView, lista.nombre)
    renderizarTareas(listaView, idLista, lista.tareas)
  
    return listaView;
  }
  
  function generarCabeceraLista(idLista, lista, nombre) {
  
    const cabecera = InsertarEnDOM(lista, "div", "", "cabecera", "")
    InsertarEnDOM(lista, "span", "", "nombre", nombre)
    const acciones = InsertarEnDOM(lista, "div", "", "acciones", "")
    const anadir = InsertarEnDOM(acciones, "button", "", "anadir", "")
    const eliminar = InsertarEnDOM(acciones, "button", "", "eliminar", "")
    anadir.dataset.indexLista = eliminar.dataset.indexLista = idLista
  
    return cabecera;
  }
  
  function renderizarTareas (listaView, idLista, tareas) {
   
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        const tareaView = InsertarEnDOM(listaView, "div", "", "item", "")
        generarCabeceraTarea(tareaView, idLista, i, tarea.prioridad, tarea.titulo, tarea.fecha)
        generarContenidoTarea(tareaView, idLista, i, tarea.descripcion, tarea.checklist)
    } 
  
  }
  
  function generarCabeceraTarea(tareaView, idLista, idTarea, prioridad, titulo, fecha) {
  
    const cabecera = InsertarEnDOM(tareaView, "div", "", "cabecera", "")
    const opener = InsertarEnDOM(cabecera, "button", "", "opener", "")
    InsertarEnDOM(cabecera, "span", "", "prioridad", "").classList.add(`${prioridad}`)
    InsertarEnDOM(cabecera, "span", "", "titulo", titulo)
    InsertarEnDOM(cabecera, "span", "", "fecha", fecha)
    const eliminar = InsertarEnDOM(cabecera, "button", "", "eliminar", "")
    eliminar.dataset.indexLista = opener.dataset.indexLista = cabecera.dataset.indexLista = idLista
    eliminar.dataset.indexTarea = opener.dataset.indexTarea = cabecera.dataset.indexTarea = idTarea
  
    return cabecera
  }
  
  function generarContenidoTarea(tareaView, idLista, idTarea, descripcion, checklist) {
  
    const contenido = InsertarEnDOM(tareaView, "div", "", "contenido", "")
    InsertarEnDOM(contenido, "span", "", "descripcion", descripcion)
    generarChecklist(contenido, idLista, idTarea, checklist)
    const editar = InsertarEnDOM(contenido, "button", "", "editar", "")
    editar.dataset.indexLista = idLista
    editar.dataset.indexTarea = idTarea
  
    return contenido
  }
  
  function generarChecklist(contenedor, idLista, idTarea, checklist) {
  
    const lista = InsertarEnDOM(contenedor, "div", "", "checklist", "")
  
    for (let i = 0; i < checklist.length; i++) {
  
        const item = checklist[i];
        const task = InsertarEnDOM(lista, "div", "", "task", "")
  
        const check = InsertarEnDOM(task, "input", `done${idLista + idTarea + i}`, "", "")
        check.setAttribute("name", check.id)
        check.setAttribute("type", "checkbox")
        check.checked = item.hecho       
        check.dataset.indexLista = idLista
        check.dataset.indexTarea = idTarea
        check.dataset.indexCheck = i
  
        const label = InsertarEnDOM(task, "label", "", "", item.etiqueta)
        label.setAttribute("for", check.id)
    }
  
    return lista
  }
  
  function InsertarEnDOM(elementoPadre, etiqueta, id, clase, contenido) {
  
    let nodo = document.createElement(etiqueta);
  
    if (!id == "") {
      nodo.id = id;
    }
  
    if (!clase == "") {
      nodo.className = clase;
    }
  
    nodo.textContent = contenido;
    elementoPadre.appendChild(nodo);
  
    return nodo;
  }