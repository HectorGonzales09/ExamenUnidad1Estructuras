// lista enlazada simple

// a
class Nodo<T> 

export interface Ilista<T> {
    insertarAlFinal(valor: T): void;
    eliminarPrimero(): T | null;
    buscar(valor: T): boolean;
    tamaño(): number;
    imprimir(): void;
}

// b

class ListaEnlazada<T> implements Ilista<T>{

    
}