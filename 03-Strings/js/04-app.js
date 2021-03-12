let producto = '         Monitor 20 pulgadas'

console.log(producto);
console.log(producto.length);

// Quitar espacios al inicio
console.log(producto.trimStart());

producto = 'Monitor 20 pulgadas         '
console.log(producto);
console.log(producto.length);
console.log(producto.trimEnd());
console.log(producto.trimEnd().length);

producto = '           Monitor 20 pulgadas         '
console.log(producto);
console.log(producto.length);
console.log(producto.trim());
console.log(producto.trim().length);

