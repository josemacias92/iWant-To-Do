import { Tarea } from './modelos.js';
import ScreenPrinter from "./printer"
import Dialogos from './dialogos.js';

export default class Interfaz {

    max_lenght_nombre_lista = 25
    max_lenght_nombre_tarea = 29
    max_lenght_nombre_check = 35
    screen = new ScreenPrinter()

    constructor(viewmodel) {
        this.viewmodel = viewmodel
        this.dialogos = new Dialogos(this.screen, this, viewmodel)
    }

    generarInterfaz() {

        const login = "Login"

        const body = document.getElementsByTagName("body")[0]
        const app = this.screen.appendChild(body, "div", "app", "", "")

        this.renderizarHeader(app, !this.viewmodel.usuario ? login : this.viewmodel.saludo + this.viewmodel.usuario)
        this.renderizarTableroListas()

        if (!this.viewmodel.usuario) {
            this.dialogos.mostrarBienvenida(app)
        }

        this.renderizarFooter(app)

        return app
    }

    renderizarHeader(contenedor, bienvenida) {

        const header = this.screen.appendChild(contenedor, "div", "header", "", "")
        const capa = this.screen.appendChild(header, "div", "", "header", "")
        this.screen.appendChild(capa, "span", "logo", "", this.viewmodel.appName)

        const login = this.screen.appendChild(capa, "a", "saludo", "", bienvenida)
        login.setAttribute("href", "#")
        login.addEventListener('click', (event) => {
            event.preventDefault()
            this.dialogos.mostrarBienvenida(contenedor)
        })

        const addListaButton = this.screen.appendChild(header, "button", "anadir-lista", "", "Añadir lista nueva")
        addListaButton.addEventListener('click', (event) => {

            var idLista = this.viewmodel.addLista()
            const main = document.getElementById("main")
            this.renderizarLista(true, idLista, main, this.viewmodel.listas[idLista])
        })

        return header;
    }

    renderizarTableroListas() {

        const listas = this.viewmodel.listas
        const header = document.getElementById("header")
        const main = this.screen.insertAfterElement(header, "div", "main", "", "")

        for (let i = 0; i < listas.length; i++) {
            const lista = listas[i];
            this.renderizarLista(false, i, main, lista)
        }
    }

    renderizarLista(modoEdicion, idLista, contenedor, lista) {

        const listaView = this.screen.appendChild(contenedor, "div", "", "card", "")
        listaView.id = `lista${idLista}`
        const cabecera = this.generarCabeceraLista(modoEdicion, idLista, listaView, lista.nombre)
        this.renderizarTareas(listaView, idLista, lista.tareas)

        return listaView;
    }

    generarCabeceraLista(modoEdicion, idLista, listaView, nombre) {

        const cabecera = this.screen.appendChild(listaView, "div", "", "cabecera", "")
        const nombreLista = this.screen.appendChild(cabecera, "input", "", "nombre", nombre)
        nombreLista.value = nombre
        nombreLista.placeholder = "Nombre de la lista"
        nombreLista.setAttribute("maxlength", this.max_lenght_nombre_lista)
        nombreLista.disabled = true

        const acciones = this.screen.appendChild(cabecera, "div", "", "acciones", "")

        const tooltipEditar = this.screen.appendChild(acciones, "div", "", "tooltip", "")
        const editar = this.screen.appendChild(tooltipEditar, "button", "", "editar", "")
        this.screen.appendChild(tooltipEditar, "span", "", "tooltiptext", "Editar el nombre de la lista")

        const tooltipEliminar = this.screen.appendChild(acciones, "div", "", "tooltip", "")
        const eliminar = this.screen.appendChild(tooltipEliminar, "button", "", "eliminar", "")
        this.screen.appendChild(tooltipEliminar, "span", "", "tooltiptext", "Eliminar esta lista")

        const tooltipAnadir = this.screen.appendChild(acciones, "div", "", "tooltip", "")
        const anadir = this.screen.appendChild(tooltipAnadir, "button", "", "anadir", "")
        this.screen.appendChild(tooltipAnadir, "span", "", "tooltiptext", "Añadir una nueva tarea")

        editar.dataset.indexLista = anadir.dataset.indexLista = eliminar.dataset.indexLista = idLista

        const that = this
        const app = document.getElementById("app")

        editar.addEventListener('click', (event) => {
            event.stopPropagation()
            this.mostrarEditorNombreLista(cabecera, idLista)
        })

        eliminar.addEventListener('click', (event) => {
            event.stopPropagation()
            const main = document.getElementById("main")
            this.dialogos.mostrarDialogoConfirmacion(app, "¿Desea eliminar esta lista?", function () {
                that.viewmodel.deleteLista(idLista)
                app.removeChild(main)
                that.renderizarTableroListas()
            })
        })

        anadir.addEventListener('click', (event) => {
            var tarea = new Tarea("", "", null, "", [])
            this.dialogos.mostrarFormularioTarea(app, idLista, -1, tarea)
        })

        if (modoEdicion) {
            this.mostrarEditorNombreLista(cabecera, idLista)
        }

        return cabecera;
    }

    mostrarEditorNombreLista(cabecera, idLista) {

        const botonera = cabecera.getElementsByClassName("acciones")[0]
        const botonEditar = botonera.getElementsByClassName("editar")[0]
        const botonEliminar = botonera.getElementsByClassName("eliminar")[0]
        const nombreLista = cabecera.getElementsByClassName("nombre")[0]
        botonera.removeChild(botonEditar)
        nombreLista.disabled = false
        this.screen.moveCursorToEnd(nombreLista)

        const botonAceptar = this.screen.insertBeforeElement(botonEliminar, "button", "", "ok", "")
        botonAceptar.addEventListener('click', (event) => {

            event.preventDefault()
            this.viewmodel.editListaName(idLista, nombreLista.value)
            botonera.removeChild(botonAceptar)
            botonEliminar.before(botonEditar)
            nombreLista.disabled = true
        })
    }

    eliminarVistaLista(contenedor, idLista) {
        const listaView = document.getElementById(`lista${idLista}`)
        contenedor.removeChild(listaView)
    }

    renderizarTareas(listaView, idLista, tareas) {

        for (let i = 0; i < tareas.length; i++) {
            const tarea = tareas[i];
            this.visualizarTarea(listaView, idLista, i, tarea)
        }
    }

    visualizarTarea(listaView, idLista, idTarea, tarea) {
        const prevTareaView = document.getElementById(`tarea${idLista}${+idTarea - 1}`)
        var tareaView;

        if (prevTareaView == null) {
            const nextTareaView = document.getElementById(`tarea${idLista}${+idTarea + 1}`)

            if (nextTareaView == null) {
                tareaView = this.screen.appendChild(listaView, "div", `tarea${idLista}${idTarea}`, "item", "")

            } else {
                tareaView = this.screen.insertBeforeElement(nextTareaView, "div", `tarea${idLista}${idTarea}`, "item", "")
            }
        } else {
            tareaView = this.screen.insertAfterElement(prevTareaView, "div", `tarea${idLista}${idTarea}`, "item", "")
        }

        this.generarCabeceraTarea(tareaView, idLista, idTarea, tarea.prioridad, tarea.titulo, tarea.fecha)
        this.generarContenidoTarea(tareaView, idLista, idTarea, tarea.descripcion, tarea.checklist)

        return tareaView
    }

    generarCabeceraTarea(tareaView, idLista, idTarea, prioridad, titulo, fecha) {

        const cabecera = this.screen.appendChild(tareaView, "div", "", "cabecera", "")
        const opener = this.screen.appendChild(cabecera, "span", "", "opener", "")
        const prioridadView = this.screen.appendChild(cabecera, "span", "", "prioridad", "")
        prioridadView.classList.add(prioridad, "tooltip")
        this.screen.appendChild(prioridadView, "span", "", "tooltiptext", `Prioridad ${prioridad}`)
        const tituloView = this.screen.appendChild(cabecera, "span", "", "titulo", titulo)
        const fechaView = this.screen.appendChild(cabecera, "span", "", "fecha", fecha)

        const tooltipEliminar = this.screen.appendChild(cabecera, "div", "", "tooltip", "")
        const eliminar = this.screen.appendChild(tooltipEliminar, "button", "", "eliminar", "")
        this.screen.appendChild(tooltipEliminar, "span", "", "tooltiptext", "Eliminar esta tarea")

        fechaView.dataset.indexLista = tituloView.dataset.indexLista = prioridadView.dataset.indexLista = opener.dataset.indexLista = eliminar.dataset.indexLista = opener.dataset.indexLista = cabecera.dataset.indexLista = idLista
        fechaView.dataset.indexTarea = tituloView.dataset.indexTarea = prioridadView.dataset.indexTarea = opener.dataset.indexTarea = eliminar.dataset.indexTarea = opener.dataset.indexTarea = cabecera.dataset.indexTarea = idTarea

        cabecera.addEventListener('click', (event) => {
            const idLista = event.target.dataset.indexLista
            const idTarea = event.target.dataset.indexTarea
            event.target.classList.toggle("show");
            document.getElementById(`tarea${idLista}${idTarea}`).classList.toggle("show")
            console.log(event.target)
        })

        const that = this

        eliminar.addEventListener('click', (event) => {
            event.stopPropagation()
            const main = document.getElementById("main")
            const app = document.getElementById("app")
            this.dialogos.mostrarDialogoConfirmacion(app, "¿Desea eliminar esta tarea?", function () {
                that.viewmodel.deleteTarea(idLista, idTarea)
                app.removeChild(main)
                that.renderizarTableroListas()
            })
        })

        return cabecera
    }

    eliminarVistaTarea(idLista, idTarea) {
        const listaView = document.getElementById(`lista${idLista}`)
        const tareaView = document.getElementById(`tarea${idLista}${idTarea}`)
        listaView.removeChild(tareaView)
    }

    generarContenidoTarea(tareaView, idLista, idTarea, descripcion, checklist) {

        const contenido = this.screen.appendChild(tareaView, "div", "", "contenido", "")
        this.screen.appendChild(contenido, "span", "", "descripcion", descripcion)
        this.generarChecklist(true, contenido, idLista, idTarea, checklist)
        const editar = this.screen.appendChild(contenido, "button", "", "editar", "")
        editar.dataset.indexLista = idLista
        editar.dataset.indexTarea = idTarea

        editar.addEventListener('click', (event) => {
            var tarea = this.viewmodel.listas[idLista].tareas[idTarea]
            this.dialogos.mostrarFormularioTarea(document.getElementById("app"), idLista, idTarea, tarea)
        })

        return contenido
    }

    generarChecklist(enabled, contenedor, idLista, idTarea, checklist) {

        const lista = this.screen.appendChild(contenedor, "div", "", "checklist", "")

        for (let i = 0; i < checklist.length; i++) {

            const item = checklist[i];
            this.insertarCheck(enabled, idLista, idTarea, i, lista, item)
        }

        return lista
    }

    insertarCheck(enabled, idLista, idTarea, idCheck, listaView, item) {

        const task = this.screen.appendChild(listaView, "div", "", "task", "")

        const check = this.screen.appendChild(task, "input", `done${idLista}${idTarea}${idCheck}`, "", "")
        check.setAttribute("name", check.id)
        check.setAttribute("type", "checkbox")
        check.disabled = !enabled
        check.checked = item.hecho
        check.dataset.indexLista = idLista
        check.dataset.indexTarea = idTarea
        check.dataset.indexCheck = idCheck

        const label = this.screen.appendChild(task, "label", "", "", item.etiqueta)
        label.setAttribute("for", check.id)

        const eliminar = this.screen.appendChild(task, "button", "", "eliminar", "")
        eliminar.addEventListener('click', (event) => {
            event.preventDefault()
            this.viewmodel.deleteCheck(idLista, idTarea, idCheck)
            listaView.removeChild(task)
        })

        check.addEventListener('change', (event) => {
            this.viewmodel.changeCheckedStatus(idLista, idTarea, idCheck, check.checked)
        });
    }

    renderizarFooter(contenedor) {
        const footer = this.screen.appendChild(contenedor, "div", "footer", "", "")
        const autor = this.screen.appendChild(footer, "a", "autor", "", "Created by Jose Macías Muñoz - 2022")
        autor.setAttribute("href", "https://github.com/josemacias92")
        return footer;
    }
}