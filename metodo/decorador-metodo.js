"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function repetir(iteraciones) {
    return function (target, key, descriptor) {
        if (iteraciones && descriptor.writable) {
            for (let i = 0; i < iteraciones; i++)
                descriptor.value();
        }
    };
}
class Mensajes {
    constructor(destinatario, texto) {
        this.destinatario = destinatario;
        this.texto = texto;
    }
    enviar() {
        console.log(`Enviando "${this.texto}" a ${this.destinatario}`);
        const interval = setInterval(() => console.log("..."), 500);
        setTimeout(() => { console.log("Mensajes enviado"); clearInterval(interval); }, 2000);
        return true;
    }
}
__decorate([
    repetir(1).bind(this)
], Mensajes.prototype, "enviar", null);
const mensaje = new Mensajes("+541134456", "Chau, nos vemos");
mensaje.enviar();
