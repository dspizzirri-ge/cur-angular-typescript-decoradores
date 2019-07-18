
function repetir(iteraciones?: number): Function {

    return function (target: Object, key: string, descriptor: PropertyDescriptor) {

        const original: Function = descriptor.value;

        if (iteraciones && descriptor.writable) {
            descriptor.value = function () {

                let context: PropertyDescriptor = this;
                let args: IArguments = arguments;

                for (let i = 0; i < iteraciones; i++)
                    original.apply(context, args);
            }
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

    @repetir(2)
    enviar(): boolean {
        console.log(this.destinatario);
        const interval: number = setInterval(() => console.log("..."), 500);
        setTimeout(() => { console.log("Mensajes enviado"); clearInterval(interval) }, 2000);
        return true;
    }
}


const mensaje = new Mensajes("+541134456", "Chau, nos vemos");
mensaje.enviar();