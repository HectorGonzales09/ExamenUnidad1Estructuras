// cola

// a
interface Icola<T> {
    encolar(elemento: T): void;
    desencolar(): T | undefined;
    frente(): T | undefined;
    tamaño(): number;
    estaVacia(): boolean;
}

class ColaArreglo<T> implements Icola<T> {

    private elementos: T[] = [];

    encolar(elemento: T): void {
        this.elementos.push(elemento);
    }

    desencolar(): T | undefined {
        return; 
    }

    frente(): T | undefined {
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

const caja = new ColaArreglo<string>;

caja.encolar("Juan, Maria, Pedro, Ana, Carlos");


console.log(caja.encolar);
console.log(caja.frente);
console.log(caja.desencolar);
console.log(caja.tamaño);



