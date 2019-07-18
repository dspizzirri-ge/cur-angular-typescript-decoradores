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

class Mensajes {

    private destinatario: string;

    @template("A quien corresponda, &. Besos")
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


const mensaje = new Mensajes("+541168150978", "Chau, nos vemos");
mensaje.enviar();