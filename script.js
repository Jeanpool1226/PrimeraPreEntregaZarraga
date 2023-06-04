//Inico de mi carrito de mi Pagina Wed
let total = 0;
let mensaje = "Opciones:\n1-Sobres $ 250\n2-Caja $ 500\n3-Paquete $ 700\n4-Total de su envío\n5-Status de  Envíos\n0-Salir";
let opcion;

do {
  opcion = Number(prompt(mensaje));
  if (opcion === 1) {
    alert("Sobre Agregado");
    total += 250;
  } else if (opcion === 2) {
    alert("Caja Agregada");
    total += 500;
  } else if (opcion === 3) {
    alert("Paquetes Agregados");
    total += 700;
  } else if (opcion === 4) {
    alert("Su Total Es: " + total);
  } else if (opcion === 5) {
    alert("Envíos Realizados");
    total = 0;
  } else if (opcion === 0) {
    alert("Gracias Por Preferirnos");
  } else {
    validarEnvio(opcion);
  }
} while (opcion !== 0);

function validarEnvio(opcion) {
  if (opcion > 5) {
    return("Debe elegir una opción válida");
  }
}


