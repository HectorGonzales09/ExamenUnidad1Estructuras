// Sistema de inventario

// a enums
enum CategoriProducto {
    Herramienta,
    Material, 
    Electrico,
    Plomeria
};

// tipos
let codigoProducto: number;
let nombreProducto: string;
let enStock: boolean;
let precioUnitario: number;
let categoria: CategoriProducto;

let RegistroProductos = [
    codigoProducto = 1011001, 
    nombreProducto = 'Disco de pulidola para hierro', 
    CategoriProducto,
    precioUnitario = 150.00,
    enStock = true,
]

// b tuplas

let producto1 = RegistroProductos

let [ , nombre, , precio, ,] = producto1;
console.log({nombre, precio});
