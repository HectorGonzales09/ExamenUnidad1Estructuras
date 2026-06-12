interface Venta {
    id: number;
    producto: string;
    monto: number;
    categoria: string;
    pagado: boolean;
}

const ventas: Venta[] = [
    { id:1, producto: "Martillo", monto: 120.00, categoria: "Herramienta", pagado:true},
    { id:2, producto: "Cable 10m", monto: 85.50, categoria: "Electrico", pagado:true},
    { id:3, producto: "Llave inglesa", monto: 95.50, categoria: "Herramienta", pagado:false},
    { id:4, producto: "Tubo PVC 1/2", monto: 32.00, categoria: "Plomeria", pagado:true},
    { id:5, producto: "Taladro", monto: 450.00, categoria: "Electrico", pagado:false},
    { id:6, producto: "Cemento 50kg", monto: 210.00, categoria: "Material", pagado:true},
    { id:7, producto: "Sierra circular", monto: 380.00, categoria: "Herramienta", pagado:true},
    { id:8, producto: "Cinta métrica", monto: 55.00, categoria: "Herramienta", pagado:false},
];

// a 

// const arr: ventasPagadas