# Una carta para vos ♡

Una página sencilla e interactiva para dedicarle una carta a alguien especial. Incluye un sobre que se abre al tocarlo y pequeñas burbujas y corazones flotantes.

## Archivos

Mantené estos archivos juntos en la misma carpeta:

- `carta.html`: estructura de la página y texto de la carta.
- `carta.css`: colores, fondo, diseño y animaciones.
- `carta.js`: interacción para abrir/cerrar el sobre y crear las partículas.
- `favicon.svg`: icono de corazón que aparece en la pestaña del navegador.

## Cómo abrirla

Abrí `carta.html` con tu navegador. No hace falta instalar nada ni conectarse a internet.

## Cómo personalizarla

### Cambiar la carta y la firma

Abrí `carta.html` con un editor de texto y buscá el comentario `Cambiá este texto por tu propia carta`. Editá el párrafo que aparece después. La firma está en el elemento con la clase `firma`.

También podés cambiar el título, la instrucción para abrir el sobre y el texto del pie de página en ese mismo archivo.

### Cambiar los colores

Al inicio de `carta.css`, editá los valores de estas variables:

```css
:root {
  --fondo: #fbf3ee;
  --papel: #fffdf9;
  --tinta: #55444a;
  --texto-suave: #987b82;
  --rosa: #cb7e91;
  --sobre: #e8b6bd;
  --sobre-oscuro: #d99ba8;
}
```

Cada valor hexadecimal (`#...`) representa un color. Podés reemplazarlo por otro código de color.

### Poner una imagen de fondo

En `carta.css`, reemplazá `--imagen-fondo: none;` por la ruta a tu imagen. Por ejemplo, si la imagen se llama `mi-foto.jpg` y está en la misma carpeta:

```css
--imagen-fondo: url("mi-foto.jpg");
```

### Cambiar el movimiento de corazones y burbujas

En `carta.js`, buscá `var cantidad = 13;` y cambiá el número para mostrar más o menos partículas. En `carta.css`, podés ajustar su velocidad y apariencia en las reglas `.particula`, `.burbuja`, `.corazon` y `@keyframes flotar`.

### Cambiar el icono de la pestaña

El HTML ya enlaza `favicon.svg`. Podés editar ese archivo para cambiar el icono y sus colores. Mantenelo en la misma carpeta que `carta.html`.

## Nota

Para que los estilos, la interacción y el icono carguen correctamente, no muevas los archivos a carpetas distintas sin actualizar sus rutas en `carta.html`.
