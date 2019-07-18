const userID = "dspizzirri@grupoesfera.com.ar"

function toAAAAMMDD(date: Date): string {

    let dia: string = date.getDay().toString();
    let mes: string = date.getMonth().toString();
    let anio: string = date.getFullYear().toString();

    dia = parseInt(dia) < 10 ? '0' + dia : dia;
    mes = parseInt(mes) < 9 ? '0' + (parseInt(mes) + 1) : (parseInt(mes) + 1).toString();

    return `${anio}${mes}${anio}`;
}

function template(template: string): Function {
    return function (target: any, key: string) {

        let propertyValue: string = target[key];
        const getter = () => {
            console.log(`Get: ${propertyValue}`);
            return propertyValue;
        }

        const setter = (newValue: string) => {
            console.log(`Set: ${newValue}`);
            propertyValue = template.replace("&", newValue);
        }

        const objectProperty: PropertyDescriptor = {
            get: getter,
            set: setter
        }

        Object.defineProperty(target, key, objectProperty);
    }
}

function repetir(iteraciones?: number): Function {

    return function (target: any, key: string, descriptor: PropertyDescriptor) {

        if (iteraciones && descriptor.writable) {
            for (let i = 0; i < iteraciones; i++) {
                descriptor.value();
            }
        }
    }
}

function loggerConParametro(prefix?: string): Function {

    return function (target: Function) {
        const fecha: string = toAAAAMMDD(new Date());
        const _prefix: string = prefix ? prefix + " - " : "";

        console.log(`${_prefix}${fecha} Objecto creado clase: ${target.name}`);
    }
}

function logger(target: Object, key: string, index: number) {

    const fecha: string = toAAAAMMDD(new Date());
    console.log(`${fecha} Parametro ${index} de ${key} de clase ${target.constructor.name}`);
}

@loggerConParametro(userID)
class Mensajes {

    private destinatario: string;

    @template("A quien corresponda, &. Besos")
    private texto: string;

    constructor(destinatario: string, texto: string) {
        this.destinatario = destinatario;
        this.texto = texto;
    }

    @repetir(1)
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

const mensaje = new Mensajes("+541134456", "Chau, nos vemos");
mensaje.enviar(3);