// pila - historial de navegacion

//a
interface IPila<T> {
    apilar(elemento: T): void;
    desapilar(): T | undefined;
    tope(): T | undefined;
    tamaño(): number;
    estaVacia(): boolean;
}

class PilaArreglo<T> implements IPila<T> {

    private elementos: T[] = [];

    // b

    apilar(elemento: T): void {
        this.elementos.push(elemento);
    }

    desapilar(): T | undefined {
        return;
    }

    tope(): T | undefined {
        return;
    }

    tamaño(): number {
        return this.elementos.length;
    }

    estaVacia(): boolean {
        return this.elementos.length === 0;
    }
}

// b

const navegacion = new PilaArreglo<string>;

navegacion.apilar("google.com, unah.edu.hn, campus.unah.edu.hn correo.unah.edu.hn, edu.hn")


console.log(navegacion);
console.log();
console.log(navegacion.tamaño);

