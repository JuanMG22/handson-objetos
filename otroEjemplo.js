// Declaro una clase Producto
class Producto {
  //Funcion constructora
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 0;
  }

  //Metodos de la clase
  getNombre() {
    console.log("El nombre del producto es: " + this.nombre);
  }

  getPrecio() {
    console.log("El precio del producto es: " + this.precio);
  }

  getStock() {
    console.log("El stock del producto es: " + this.cantidad);
  }

  /* Metodo para aumentar el stock de un producto
  Modifica la cantidad de ese producto, sumandole un numero que se le pase por parametro */
  aumentarStock(numeroAumento) {
    this.cantidad = this.cantidad + numeroAumento;
  }
}

//Tomo datos del usuario con Prompt
let nombre = prompt("Ingrese el nombre del producto");
let precio = parseInt(prompt("Ingrese el precio del producto"));
let stock = parseInt(prompt("Ingrese el stock del producto"));

//Creo una función para cargar un producto
const cargarProducto = (nombre, precio) => {
  const nuevoProducto = new Producto(nombre, precio);


  //llamo a metodo del objeto, el numero que le pase es el que se le sumará al stock
  nuevoProducto.aumentarStock(stock);

  nuevoProducto.getNombre();
  nuevoProducto.getPrecio();
  nuevoProducto.getStock();
};

cargarProducto(nombre, precio);
