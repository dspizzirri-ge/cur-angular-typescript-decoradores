function toAAAAMMDD(date: Date): string {

    let dia: string = date.getDay().toString();
    let mes: string = date.getMonth().toString();
    let anio: string = date.getFullYear().toString();

    dia = parseInt(dia) < 10 ? '0' + dia : dia;
    mes = parseInt(mes) < 9 ? '0' + (parseInt(mes) + 1) : (parseInt(mes) + 1).toString();

    return `${anio}${mes}${anio}`;
}

function logger(target: Object, key: string, index: number) {

    const fecha: string = toAAAAMMDD(new Date());
    console.log(`${fecha} Parametro ${index} de ${key} de clase ${target.constructor.name}`);
}

class Mensajes {

    private destinatario: string;
    private texto: string;

    constructor(destinatario: string, texto: string) {
        this.destinatario = destinatario;
        this.texto = texto;
    }

    enviar(@logger segundosDemora: number): boolean {
        const milisegundos = segundosDemora * 1000;

        console.log(`El mensaje se enviara en ${segundosDemora} segundos`);
        setTimeout(() => {
            console.log(`Enviando "${this.texto}" a ${this.destinatario}`);
            const interval: number = setInterval(() => console.log("..."), 500);
            setTimeout(() => { console.log("Mensajes enviado"); clearInterval(interval) }, 2000);
        }, milisegundos)

        return true;
    }
}


const mensaje = new Mensajes("+541168150978", "Chau, nos vemos");
mensaje.enviar(3);