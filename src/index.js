'use strict'

import _ from 'lodash';
import { Lista, Tarea, CheckItem } from './modelos.js';
import { compareAsc, format } from 'date-fns'
import InsertarEnDOM from './print.js';

const appName = "iWant To-Do";

main()

function main() {

    const app = document.createElement('div');
    app.id = "app";

    renderizarHeader(app, appName, "Jose M.");

    const main = InsertarEnDOM(app, "div", "main", "", "")

    document.appendChild(app);
    
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

    return app;
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
    InsertarEnDOM(cabecera, "span", "", "fecha", format(fecha, 'dd/MM/yyyy'))
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
        check.checked = item.hecho       
        check.dataset.indexLista = idLista
        check.dataset.indexTarea = idTarea
        check.dataset.indexCheck = i

        const label = InsertarEnDOM(task, "label", "", "", item.etiqueta)
        label.setAttribute("for", check.id)
    }

    return lista
}