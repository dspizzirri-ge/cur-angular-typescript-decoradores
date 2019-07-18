const userID = "dspizzirri@grupoesfera.com.ar"

function toAAAAMMDD(date: Date): string {

    let dia: string = date.getDay().toString();
    let mes: string = date.getMonth().toString();
    let anio: string = date.getFullYear().toString();

    dia = parseInt(dia) < 10 ? '0' + dia : dia;
    mes = parseInt(mes) < 9 ? '0' + (parseInt(mes) + 1) : (parseInt(mes) + 1).toString();

    return `${anio}${mes}${anio}`;
}

function loggerConParametro(prefix?: string): Function {

    return function (target: Function) {
        const fecha: string = toAAAAMMDD(new Date());
        const _prefix: string = prefix ? prefix + " - " : "";

        console.log(`${_prefix}${fecha} Objecto creado clase: ${target.name}`);
    }
}

function logger(target: Function) {

    const fecha: string = toAAAAMMDD(new Date());
    console.log(`${fecha} Objecto creado clase: ${target.name}`);
}

@loggerConParametro(userID)
//@logger
class Mensajes {

    private destinatario: string;
    private texto: string;

    constructor(destinatario: string, texto: string) {
        this.destinatario = destinatario;
        this.texto = texto;
    }

    enviar(): boolean {
        console.log(`Enviando "${this.texto}" a ${this.destinatario}`);
        const interval: number = setInterval(() => console.log("..."), 500);
        setTimeout(() => { console.log("Mensajes enviado"); clearInterval(interval) }, 2000);
        return true;
    }
}


const mensaje = new Mensajes("+541134456", "Chau, nos vemos");
mensaje.enviar();