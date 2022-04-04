'use strict'

import { ViewModel, getSamples } from './viewmodel.js';
import Interfaz from './interfaz.js';
import '../css/estilos.css';

const datos = new ViewModel();
const programa = new Interfaz(datos);
programa.generarInterfaz()