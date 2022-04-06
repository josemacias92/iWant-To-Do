'use strict'

import { Lista, Tarea, CheckItem } from './modelos.js';
import { format } from 'date-fns'

class ViewModel {

    appName = "iWant To-Do";
    saludo = "Hola de nuevo, "

    constructor() {
        if (storageAvailable('localStorage')) {
            //localStorage.clear()
            if (!localStorage.getItem('usuario')) {
                this.listas = getSamples()
                localStorage.listas = JSON.stringify(this.listas)
            } else {
                this.listas = JSON.parse(localStorage.getItem("listas"))
                this.usuario = localStorage.getItem("usuario")
            }
        }
        else {
            this.listas = getSamples()
            localStorage.listas = JSON.stringify(this.listas)
            console.log(JSON.stringify(this.listas))
        }
    }

    reset() {
        this.listas = []
        this.usuario = undefined
        localStorage.clear()
    }

    setUsuario(usuario) {
        localStorage.usuario = this.usuario = usuario
    }

    addLista() {
        this.listas.push(new Lista("", []))
        console.log(`add lista${this.listas.length - 1}`)
        localStorage.listas = JSON.stringify(this.listas)
        return this.listas.length - 1
    }

    editListaName(idLista, newName) {
        this.listas[idLista].nombre = newName
        localStorage.listas = JSON.stringify(this.listas)
    }

    deleteLista(indexLista) {
        console.log(`delete lista${indexLista}`)
        this.listas.splice(indexLista, 1)
        localStorage.listas = JSON.stringify(this.listas)
    }

    addTarea(indexLista, tarea) {
        this.listas[indexLista].tareas.push(tarea)
        console.log(`add tarea${indexLista}${this.listas[indexLista].tareas.length - 1}`)
        localStorage.listas = JSON.stringify(this.listas)
    }


    deleteTarea(indexLista, indexTarea) {
        console.log(`delete tarea${indexLista}${indexTarea}`)
        var tareas = this.listas[indexLista].tareas
        tareas.splice(indexTarea, 1)
        localStorage.listas = JSON.stringify(this.listas)
    }

    editTarea(indexLista, indexTarea, newTarea) {
        console.log(`edit tarea${indexLista}${indexTarea}`)
        var tareas = this.listas[indexLista].tareas
        tareas.splice(indexTarea, 1, newTarea)
        localStorage.listas = JSON.stringify(this.listas)
    }

    changeCheckedStatus(idLista, idTarea, idCheck, checkStatus) {
        console.log(`change check${idLista}${idTarea}${idCheck} ${checkStatus}`)
        this.listas[idLista].tareas[idTarea].checklist[idCheck].hecho = checkStatus
        localStorage.listas = JSON.stringify(this.listas)
    }

    deleteCheck(idLista, idTarea, idCheck) {
        console.log(`deletecheck${idLista}${idTarea}${idCheck}`)
        this.listas[idLista].tareas[idTarea].checklist.splice(idCheck, 1)
        localStorage.listas = JSON.stringify(this.listas)
    }
}

function getSamples() {

    const listas = []

    //lista 1
    const tareas1 = []
    const checklist11 = []

    var check111 = new CheckItem(true, "Estudiar tema")
    var check112 = new CheckItem(true, "Desarrollar interfaz")
    var check113 = new CheckItem(true, "Implementar funcionalidades")
    var check114 = new CheckItem(true, "Añadir widget del tiempo")
    var check115 = new CheckItem(true, "Desplegar en GitHub Pages")
    checklist11.push(check111)
    checklist11.push(check112)
    checklist11.push(check113)
    checklist11.push(check114)
    checklist11.push(check115)

    var tarea11 = new Tarea("Hacer app de lista de tareas", "alta", format(new Date(2022, 3, 31), 'dd/MM/yyyy'), "Desarrollar una app web de gestión de listas de tareas", checklist11)
    tareas1.push(tarea11)
    //

    const checklist12 = []
    var check121 = new CheckItem(false, "Desarrollar interfaz")
    var check122 = new CheckItem(false, "Implementar funcionalidades")
    var check123 = new CheckItem(false, "Realizar tests")
    var check124 = new CheckItem(false, "Desplegar app")
    checklist12.push(check121)
    checklist12.push(check122)
    checklist12.push(check123)
    checklist12.push(check124)

    var tarea12 = new Tarea("Juego de Hundir la flota", "media", format(new Date(2022, 4, 6), 'dd/MM/yyyy'), "Crear juego online de hundir la flota.", checklist12)
    tareas1.push(tarea12)
    //

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

    var tarea21 = new Tarea("Limpiar la habitacion", "baja", format(new Date(2022, 4, 1), 'dd/MM/yyyy'), "Guardar todo donde no se vea.", checklist21)
    tareas2.push(tarea21)
    //

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

    var tarea22 = new Tarea("Hacer la compra", "media", format(new Date(2022, 4, 3), 'dd/MM/yyyy'), "Comprar lo necesario para la semana.", checklist22)
    tareas2.push(tarea22)
    //

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

    var tarea23 = new Tarea("Cocinar algo delicioso", "alta", format(new Date(2022, 4, 2), 'dd/MM/yyyy'), "Hacer espaguetis a la boloñesa.", checklist23)
    tareas2.push(tarea23)
    //

    const lista2 = new Lista("Casa", tareas2)

    listas.push(lista2);

    return listas;
}

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

export { ViewModel, getSamples }