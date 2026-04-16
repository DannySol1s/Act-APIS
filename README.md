# Act-APIS: Explorador de APIs 🚀

Bienvenido al proyecto **Act-APIS**, una aplicación web Front-End interactiva construida para demostrar la integración y consumo de múltiples APIs públicas utilizando tecnologías modernas y eficientes.

## 🌟 Características Principales

- **Consumo de Múltiples APIs:** Integración con *Dog API*, *RandomUser API* y *PokeAPI*.
- **Tecnología Moderna:** Construido con **Svelte** y **Vite**, ofreciendo un rendimiento excepcional y tiempos de carga instantáneos sin utilizar Virtual DOM tradicional.
- **Diseño Glassmorphism:** Creado con **Vanilla CSS**, presenta una interfaz de usuario "premium" y vanguardista utilizando efectos de desenfoque y transparencias que simulan paneles de cristal.
- **Manejo de Asincronía:** Uso de bloques nativos de Svelte (`{#await}`) para gestionar los estados de carga y error de manera eficiente y nativa.

## 📚 Documentación Completa

Para una explicación detallada sobre los objetivos de la actividad, la justificación de las tecnologías elegidas y la explicación de la arquitectura (separación de responsabilidades), por favor revisa el archivo de documentación principal:

👉 **[Leer DOCUMENTACION.md](./DOCUMENTACION.md)**

## 🛠️ Instalación y Configuración Local

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina:

1. **Clonar el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd Act-APIS
   ```

2. **Instalar las dependencias:**
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado y ejecuta:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir la aplicación:**
   Abre tu navegador web y entra a la dirección `http://localhost:5173/` (o la que se proporcione en la terminal).

## 🗂 Estructura del Proyecto

El código fuente principal se encuentra de forma ordenada en la carpeta `/src/`:
- `/services` - Lógica y llamadas a las APIs externas (`api.js`).
- `/components` - Componentes visuales genéricos y reutilizables (`GlassCard.svelte`...).
- `/views` - Vistas que conectan los servicios y los componentes de visualización.
- `App.svelte` - Componente principal y orquestador del estado activo.
- `app.css` - Estilos globales, animaciones y paleta de colores.
