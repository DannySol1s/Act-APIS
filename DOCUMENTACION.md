# Documentación del Proyecto: Explorador de APIs

## 1. Objetivo de la Actividad
El propósito de este proyecto es construir una aplicación web Front-End interactiva orientada a la **consunción de múltiples APIs públicas**. Se busca entender cómo solicitar datos externos a través de la red (peticiones HTTP mediante `fetch`), manejar estados asíncronos (tiempos de carga, errores, respuestas exitosas) y proyectar dicha información visualmente al usuario a través de una Interfaz Gráfica (UI) atractiva y moderna.

Para enriquecer el aprendizaje y expandir el abanico de herramientas, se decidió prescindir de las tecnologías habituales (como React o Next.js) y explorar ecosistemas modernos y más eficientes.

---

## 2. Tecnologías y Herramientas Elegidas

### ¿Por qué **Svelte**?
A diferencia de frameworks tradicionales fundados en un "Virtual DOM" (como React), Svelte es en realidad un **compilador**. 
- **Rendimiento superior:** Al momento de construir la aplicación, Svelte transforma los componentes en código JavaScript imperativo altamente optimizado que actualiza el DOM directamente.
- **Curva de aprendizaje limpia:** Su sintaxis está mucho más apegada al tridente clásico del desarrollo web (HTML, CSS, JS puro).
- **Manejo de asincronía excelente:** Svelte ofrece los bloques `{#await ...} {:then ...} {:catch ...}`. Esto es perfecto para consumir APIs, ya que permite renderizar automáticamente un loader mientras esperamos los datos, y luego mostrar el resultado (o un error) sin requerir complicados manejos de estados (adiós a tener 3 estados de React por cada petición: `isLoading`, `data`, `error`).

### ¿Por qué **Vite**?
Vite es un empaquetador (bundler) de próxima generación.
- **Velocidad de desarrollo:** Aprovecha los módulos ES nativos del navegador para arrancar el servidor en fracciones de segundo y actualizar los cambios en el código de forma instantánea sin recargar la página (*Hot Module Replacement* ultrarrápido).
- Sirve como la base moderna perfecta para montar Svelte (o prácticamente cualquier otro framework actual).

### ¿Por qué **Vanilla CSS** con diseño *Glassmorphism*?
Se optó deliberadamente por no usar librerías utilitarias (como TailwindCSS) ni de componentes (como Bootstrap o Material UI) para mantener un control absoluto del diseño.
- **Glassmorphism:** Al aplicar la propiedad CSS `backdrop-filter: blur()`, junto con transparencias en los fondos y bordes definidos, logramos componentes que figuran ser paneles de cristal. Esto da un aspecto vanguardista, "premium" y ayuda a que las aplicaciones web destaquen fuertemente frente a diseños planos más tradicionales.
- **Experiencia de usuario (UX):** Transiciones suaves y efectos al pasar el ratón (hover) ayudan al usuario a entender instintivamente qué elementos de la página son interactivos.

---

## 3. Arquitectura del Proyecto
Pusimos gran énfasis en el **orden y la mantenibilidad** separando las responsabilidades de cada archivo en la carpeta `/src/`:

- **/services (Capa lógica):** Aquí vive `api.js`. Concentraremos todas las llamadas `fetch` hacia el exterior. Si cambia la URL de una API, solo debemos tocar este archivo; los componentes visuales nunca se enterarán.
- **/components (Capa UI reutilizable):** Contiene componentes genéricos como `GlassCard.svelte` que solo se encargan del diseño visual y pueden ser usados a lo largo de toda la aplicación.
- **/views (Capa de vistas):** Páginas enteras que juntan la lógica de los *services* y los componentes visuales. Aquí residen `Home`, `DogView`, `UserView` y `PokeView`.
- **`App.svelte` (Orquestador):** El punto central. En su código no hay estilos ni consultas complejas, únicamente dirige el tráfico ("si la vista activa es 'x', muestra el componente 'X'").
- **`app.css` (Estética global):** Variables estructurales de color y animaciones de fondo que son compartidas en toda la aplicación.

---

## 4. Las APIs Consumidas
Se eligieron APIs con diferentes estructuras de respuesta para practicar versatilidad:

1. **Dog API (`https://dog.ceo/dog-api/`)**
   - *Por qué:* Es muy simple, la respuesta principal trae una URL directa de una imagen (string). Es perfecta para demostrar conceptos simples de renderizado de media.
2. **RandomUser (`https://randomuser.me/`)**
   - *Por qué:* Simula una base de datos de personas. Su respuesta es un array de objetos JSON complejos, excelente para practicar iteraciones (`{#each}`) y renderizar múltiples tarjetas de contacto en forma de cuadricula.
3. **PokeAPI (`https://pokeapi.co/`)**
   - *Por qué:* Representa una API sumamente anidada y popular en el entorno del desarrollo. Requiere enviar parámetros dinámicos basados en la interacción del usuario (una barra de búsqueda) y saber cómo navegar en decenas de propiedades para construir interfaces como estadísticas (`stats`), imágenes especiales (`sprites`), y etiquetas (`types`).
