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

    constructor(id, hecho, etiqueta){
        this.id = id;
        this.etiqueta = etiqueta;
        this.hecho = hecho;
    }
}

export { Lista, Tarea, CheckItem }