class Tarea {

    constructor(titulo, prioridad, fecha, descripcion, checklist){
        this.titulo = titulo;
        this.prioridad = prioridad;
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

export { Lista, Tarea, CheckItem }