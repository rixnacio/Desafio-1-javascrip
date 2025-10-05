let precio = 400000;

const precioSpan   = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan    = document.querySelector(".valor-total");

precioSpan.innerHTML = precio.toLocaleString("es-CL");
let cantidad = 0;

function actualizarTotal() {
  const total = precio * cantidad;
  totalSpan.innerHTML = total.toLocaleString("es-CL");
}

function sumar() {
  cantidad++;
  cantidadSpan.innerHTML = cantidad;
  actualizarTotal();
}

function restar() {
  if (cantidad > 0) {
    cantidad--;
    cantidadSpan.innerHTML = cantidad;
    actualizarTotal();
  }
}

