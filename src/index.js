'use strict'

import _ from 'lodash';
import InsertarEnDOM from './print.js';

main()

function main() {

    const app = document.createElement('div');
    app.id = "app"

    renderizarHeader(app, "iWant To-Do", "Jose M.");

    const main = InsertarEnDOM(app, "div", "main", "", "")

    document.appendChild(app);
    
}

function renderizarHeader(contenedor, nombreApp, usuario) {

    const header = InsertarEnDOM(contenedor, "div", "header", "", "")
    InsertarEnDOM(header, "div", "logo", "", nombreApp)
    InsertarEnDOM(header, "div", "saludo", "", usuario)

    return header;
}

function renderizarLista(contenedor, lista) {

    const lista = InsertarEnDOM(contenedor, "div", "", "lista", "")
    const cabecera = InsertarEnDOM(lista, "div", "", "lista", "")

    return app;
}

class Tarea {

    constructor(id, titulo, priporidad, fecha, descripcion, checklist){
        this.id = id;
        this.titulo = titulo;
        this.priporidad = priporidad;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.checklist = checklist;
    }
}

class Lista {

    constructor(id, nombre, tareas){
        this.id = id;
        this.nombre = nombre;
        this.tareas = tareas;
    }
}

class CheckItem {

    constructor(id, hecho, nombre){
        this.id = id;
        this.nombre = nombre;
        this.hecho = hecho;
    }
}

document.body.appendChild(component());