"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function toAAAAMMDD(date) {
    let dia = date.getDay().toString();
    let mes = date.getMonth().toString();
    let anio = date.getFullYear().toString();
    dia = parseInt(dia) < 10 ? '0' + dia : dia;
    mes = parseInt(mes) < 9 ? '0' + (parseInt(mes) + 1) : (parseInt(mes) + 1).toString();
    return `${anio}${mes}${anio}`;
}
function logger(target, key, index) {
    const fecha = toAAAAMMDD(new Date());
    console.log(`${fecha} Parametro ${index} de ${key} de clase ${target.constructor.name}`);
}
class Mensajes {
    constructor(destinatario, texto) {
        this.destinatario = destinatario;
        this.texto = texto;
    }
    enviar(segundosDemora) {
        const milisegundos = segundosDemora * 1000;
        console.log(`El mensaje se enviara en ${segundosDemora} segundos`);
        setTimeout(() => {
            console.log(`Enviando "${this.texto}" a ${this.destinatario}`);
            const interval = setInterval(() => console.log("..."), 500);
            setTimeout(() => { console.log("Mensajes enviado"); clearInterval(interval); }, 2000);
        }, milisegundos);
        return true;
    }
}
__decorate([
    __param(0, logger)
], Mensajes.prototype, "enviar", null);
const mensaje = new Mensajes("+541168150978", "Chau, nos vemos");
mensaje.enviar(3);
