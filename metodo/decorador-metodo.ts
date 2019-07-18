
function repetir(iteraciones?: number): Function {

    return function (target: Object, key: string, descriptor: PropertyDescriptor) {

        if (iteraciones && descriptor.writable) {
            for (let i = 0; i < iteraciones; i++)
                descriptor.value();
        }
    }
}


class Mensajes {

    private destinatario: string;
    private texto: string;

    constructor(destinatario: string, texto: string) {
        this.destinatario = destinatario;
        this.texto = texto;
    }

    @repetir(1)
    enviar(): boolean {
        const interval: number = setInterval(() => console.log("..."), 500);
        setTimeout(() => { console.log("Mensajes enviado"); clearInterval(interval) }, 2000);
        return true;
    }
}


const mensaje = new Mensajes("+541134456", "Chau, nos vemos");
mensaje.enviar();