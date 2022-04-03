'use strict'

import { ViewModel, getSamples } from './viewmodel.js';
import Interfaz from './interfaz.js';
import './estilos.css';

const datos = new ViewModel();
const programa = new Interfaz(datos);
programa.generarInterfaz()