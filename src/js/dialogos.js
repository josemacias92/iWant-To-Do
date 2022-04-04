import { Tarea, CheckItem } from './modelos.js';
import { parse, format } from 'date-fns'

export default class Dialogos {

    constructor(screen, interfaz, viewmodel) {
        this.screen = screen
        this.interfaz = interfaz
        this.viewmodel = viewmodel
    }

    mostrarBienvenida(contenedor) {

        const idDialogo = "dialogo-bienvenida"
        const form = this.screen.colocarDialogo(contenedor, idDialogo)
        this.screen.appendChild(form, "span", "", "titulo", `¡Bienvenido a ${this.viewmodel.appName}!`)

        var editorUsuario = this.screen.appendChild(form, "div", "editor-usuario", "", "")
        const aliasLabel = this.screen.appendChild(editorUsuario, "label", "", "", "Escoge tu alias")
        aliasLabel.setAttribute("for", "alias")
        const aliasBox = this.screen.appendChild(editorUsuario, "input", "titulo", "", "")
        aliasBox.setAttribute("maxlength", "25")
        aliasBox.setAttribute("value", this.viewmodel.usuario ?? " ")
        aliasBox.setAttribute("name", "alias")
        this.screen.moveCursorToEnd(aliasBox)

        const botonera = this.screen.appendChild(form, "div", "", "botonera-dialogo", "")

        const body = document.getElementsByTagName("body")[0]
        var app = document.getElementById("app")

        if (this.viewmodel.usuario) {
            const borrar = this.screen.appendChild(botonera, "button", "borrar-datos", "borrar", "Borrar datos")
            borrar.addEventListener('click', (event) => {

                event.preventDefault()
                const that = this
    
                this.mostrarDialogoConfirmacion(contenedor, "¿Deseas eliminar todos tus datos de forma permanente?", function () {
                    that.viewmodel.reset()
                    body.removeChild(app)
                    app = that.interfaz.generarInterfaz()
                    that.mostrarDialogoInformacion(app, "Sus datos han sido eliminados con éxito")
                })
            })
        }

        const aceptar = this.screen.appendChild(botonera, "button", "add-tarea", "aceptar", "Aceptar")
        aceptar.addEventListener('click', (event) => {

            event.preventDefault()
            this.viewmodel.setUsuario(aliasBox.value)
            document.getElementById("saludo").textContent = this.viewmodel.saludo + " " + this.viewmodel.usuario
            this.screen.removeDialogo(contenedor, form, idDialogo)
        })
    }

    mostrarDialogoConfirmacion(contenedor, pregunta, accion) {

        const idDialogo = "dialogo-confirmacion"
        const form = this.screen.colocarDialogo(contenedor, idDialogo)
        this.screen.appendChild(form, "span", "", "titulo", pregunta)

        const botonera = this.screen.appendChild(form, "div", "", "botonera-dialogo", "")

        const cancelar = this.screen.appendChild(botonera, "button", "cancelar-tarea", "cancelar", "Cancelar")
        cancelar.addEventListener('click', (event) => {
            this.screen.removeDialogo(contenedor, form, idDialogo)
        })

        const aceptar = this.screen.appendChild(botonera, "button", "add-tarea", "aceptar", "Aceptar")
        aceptar.addEventListener('click', (event) => {
            event.preventDefault()
            accion()
            this.screen.removeDialogo(contenedor, form, idDialogo)
        })
    }

    mostrarDialogoInformacion(contenedor, info) {

        const idDialogo = "dialogo-informacion"
        const form = this.screen.colocarDialogo(contenedor, idDialogo)
        this.screen.appendChild(form, "span", "", "titulo", info)

        const botonera = this.screen.appendChild(form, "div", "", "botonera-dialogo", "")

        const aceptar = this.screen.appendChild(botonera, "button", "add-tarea", "aceptar", "Aceptar")
        aceptar.addEventListener('click', (event) => {

            event.preventDefault()
            this.screen.removeDialogo(contenedor, form, idDialogo)
        })
    }

    //FORMULARIO TAREA
    mostrarFormularioTarea(contenedor, idLista, idTarea, oldTarea) {

        const idDialogo = "dilogo-tareas"
        const form = this.screen.colocarDialogo(contenedor, idDialogo)
        this.screen.appendChild(form, "span", "", "titulo", `${idTarea == -1 ? "Nueva" : "Editar"} tarea`)

        var editor1 = this.screen.appendChild(form, "div", "editor1", "", "")
        const tituloLabel = this.screen.appendChild(editor1, "label", "", "", "Título")
        tituloLabel.setAttribute("for", "titulo")
        const tituloBox = this.screen.appendChild(editor1, "input", "titulo", "", "")
        tituloBox.setAttribute("maxlength", this.max_lenght_nombre_tarea)
        tituloBox.setAttribute("name", "titulo")
        tituloBox.setAttribute("value", oldTarea.titulo)
        this.screen.moveCursorToEnd(tituloBox)

        const descripcionLabel = this.screen.appendChild(editor1, "label", "", "", "Descripción")
        descripcionLabel.setAttribute("for", "descripcion")
        const descripcionArea = this.screen.appendChild(editor1, "textarea", "descripcion", "", oldTarea.descripcion)
        descripcionArea.setAttribute("maxlength", "300")
        descripcionArea.setAttribute("name", "descripcion")

        var editor2 = this.screen.appendChild(form, "div", "editor2", "", "")
        this.screen.appendChild(editor2, "label", "", "", "Prioridad")
        const prioridadControl = this.screen.appendChild(editor2, "div", "prioridad", "", "")
        const altaLabel = this.screen.appendChild(prioridadControl, "label", "", "", "Alta")
        altaLabel.setAttribute("for", "alta")
        const altaRadio = this.screen.appendChild(prioridadControl, "input", "alta", "", "")
        altaRadio.setAttribute("value", "alta")
        altaRadio.setAttribute("type", "radio")
        altaRadio.setAttribute("name", "prioridad")
        altaRadio.checked = oldTarea.prioridad == "alta" || oldTarea.prioridad == ""

        const mediaLabel = this.screen.appendChild(prioridadControl, "label", "", "", "Media")
        mediaLabel.setAttribute("for", "media")
        const mediaRadio = this.screen.appendChild(prioridadControl, "input", "media", "", "")
        mediaRadio.setAttribute("value", "media")
        mediaRadio.setAttribute("type", "radio")
        mediaRadio.setAttribute("name", "prioridad")
        mediaRadio.checked = oldTarea.prioridad == "media"

        const bajaLabel = this.screen.appendChild(prioridadControl, "label", "", "", "Baja")
        bajaLabel.setAttribute("for", "baja")
        const bajaRadio = this.screen.appendChild(prioridadControl, "input", "baja", "", "")
        bajaRadio.setAttribute("value", "baja")
        bajaRadio.setAttribute("type", "radio")
        bajaRadio.setAttribute("name", "prioridad")
        bajaRadio.checked = oldTarea.prioridad == "baja"

        const fechaLabel = this.screen.appendChild(editor2, "label", "", "etiqueta", "Fecha")
        fechaLabel.setAttribute("for", "titulo")
        const fechaBox = this.screen.appendChild(editor2, "input", "fecha", "", "")
        fechaBox.setAttribute("type", "date")
        fechaBox.setAttribute("name", "fecha")
        fechaBox.valueAsDate = oldTarea.fecha ? parse(oldTarea.fecha, 'dd/MM/yyyy', new Date()) : new Date();

        const lista = oldTarea.checklist
        var editor3 = this.screen.appendChild(form, "div", "editor3", "", "")

        this.screen.appendChild(editor3, "label", "", "", "Check-list")
        const checkList = this.interfaz.generarChecklist(false, editor3, idLista, idTarea, oldTarea, lista)
        const checkEditor = this.screen.appendChild(editor3, "div", "checklist", "", "")

        const taskBox = this.screen.appendChild(checkEditor, "input", "task", "", "")
        taskBox.setAttribute("maxlength", this.max_lenght_nombre_check)
        taskBox.setAttribute("name", "task")
        taskBox.placeholder = "Nuevo check"

        const addButton = this.screen.appendChild(checkEditor, "button", "addtask", "anadir", "")
        addButton.classList.add("button")
        addButton.addEventListener('click', (event) => {

            event.preventDefault()
            const item = new CheckItem(false, taskBox.value)
            lista.push(item)
            this.interfaz.insertarCheck(false, idLista, idTarea, lista.length - 1, checkList, oldTarea, item)
            taskBox.value = ""
            taskBox.focus()
            checkList.scrollTop = checkList.scrollHeight
        })

        const botonera = this.screen.appendChild(form, "div", "botonera-dialogo-tarea", "", "")

        const cancelar = this.screen.appendChild(botonera, "button", "cancelarTarea", "cancelar", "Cancelar")
        cancelar.addEventListener('click', (event) => {
            this.screen.removeDialogo(contenedor, form, idDialogo)
        })

        const aceptar = this.screen.appendChild(botonera, "button", "add-tarea", "aceptar", "Aceptar")
        aceptar.addEventListener('click', (event) => {

            event.preventDefault()
            var prioridad = altaRadio.checked ? "alta" : (mediaRadio.checked ? "media" : "baja")
            var newTarea = new Tarea(tituloBox.value, prioridad, format(new Date(fechaBox.value), 'dd/MM/yyyy'), descripcionArea.value, lista)
            this.screen.removeDialogo(contenedor, form, idDialogo)

            const listaView = document.getElementById(`lista${idLista}`)

            if (idTarea == -1) {
                idTarea = this.viewmodel.listas[idLista].tareas.length
                this.viewmodel.addTarea(idLista, newTarea)
            } else {
                this.viewmodel.editTarea(idLista, idTarea, newTarea)
                this.interfaz.eliminarVistaTarea(idLista, idTarea)
            }

            var tareaView = this.interfaz.visualizarTarea(listaView, idLista, idTarea, newTarea)
            tareaView.classList.add("show")
        })
    }
}