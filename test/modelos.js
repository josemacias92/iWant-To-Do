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

export { Lista, Tarea, CheckItem }