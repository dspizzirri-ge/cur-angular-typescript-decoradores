"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const userID = "dspizzirri@grupoesfera.com.ar";
function toAAAAMMDD(date) {
    let dia = date.getDay().toString();
    let mes = date.getMonth().toString();
    let anio = date.getFullYear().toString();
    dia = parseInt(dia) < 10 ? '0' + dia : dia;
    mes = parseInt(mes) < 9 ? '0' + (parseInt(mes) + 1) : (parseInt(mes) + 1).toString();
    return `${anio}${mes}${anio}`;
}
function loggerConParametro(prefix) {
    return function (target) {
        const fecha = toAAAAMMDD(new Date());
        const _prefix = prefix ? prefix + " - " : "";
        console.log(`${_prefix}${fecha} Objecto creado clase: ${target.name}`);
    };
}
function logger(target) {
    const fecha = toAAAAMMDD(new Date());
    console.log(`${fecha} Objecto creado clase: ${target.name}`);
}
let Mensajes = 
//@logger
class Mensajes {
    constructor(destinatario, texto) {
        this.destinatario = destinatario;
        this.texto = texto;
    }
    enviar() {
        setTimeout(() => console.log("Mensajes enviado"), 2000);
        return true;
    }
};
Mensajes = __decorate([
    loggerConParametro()
    //@logger
], Mensajes);
const mensaje = new Mensajes("+541134456", "Chau, nos vemos");
mensaje.enviar();
