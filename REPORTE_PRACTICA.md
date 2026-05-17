# Reporte de Práctica: Ecosistema Multi-API Políglota

## 1. Introducción
El presente reporte documenta el desarrollo de un ecosistema de microservicios diseñado para demostrar la interoperabilidad entre diferentes lenguajes de programación y frameworks modernos. El proyecto, denominado **Act-APIS**, utiliza una arquitectura de monorepo donde coexisten servicios desarrollados en **Go**, **Python** y **JavaScript/Node.js**, todos integrados en una interfaz de usuario fluida desarrollada con **Svelte 5**.

La motivación principal de esta práctica es explorar cómo cada lenguaje ofrece ventajas específicas para el manejo de peticiones asíncronas, consumo de APIs externas y configuración de seguridad (CORS).

## 2. Objetivos

### 2.1 Objetivo General
Desarrollar y orquestar un ecosistema de servicios web que consuman APIs públicas de terceros (Dog API, RandomUser API y PokeAPI) utilizando diversas tecnologías de backend, centralizando el acceso a través de un dashboard moderno.

### 2.2 Objetivos Específicos
*   Implementar un proxy de API en **Go (Golang)** utilizando la biblioteca estándar para el consumo de Dog API.
*   Desarrollar una API con **Python (FastAPI)** que actúe como puente para obtener datos de usuarios aleatorios.
*   Configurar un servicio en **SvelteKit** para la gestión y normalización de datos procedentes de PokeAPI.
*   Resolver las restricciones de **CORS (Cross-Origin Resource Sharing)** en cada plataforma para permitir la comunicación con el frontend.
*   Crear una interfaz reactiva en **Svelte 5** que consuma concurrentemente los tres servicios internos.

## 3. Marco Teórico

### 3.1 Svelte 5 & Vite
Se seleccionó Svelte 5 por su arquitectura basada en *Runes* ($state, $derived, $effect), lo que permite una reactividad más eficiente y un código más legible. Vite actúa como motor de compilación para garantizar tiempos de carga optimizados.

### 3.2 FastAPI (Python)
Framework de alto rendimiento para construir APIs con Python. Su uso de `httpx` permite realizar peticiones asíncronas de manera nativa, ideal para actuar como proxy de servicios externos.

### 3.3 Go (Standard Library)
Se utilizó el paquete `net/http` de Go para demostrar que es posible construir servicios robustos y ligeros sin dependencia de frameworks externos, aprovechando la velocidad y el manejo de tipos del lenguaje.

### 3.4 SvelteKit (Backend local)
Se emplearon las *server routes* (`+server.js`) de SvelteKit para demostrar que el framework puede funcionar como un backend de Node.js completo, manejando lógica de servidor y transformación de datos antes de enviarlos al cliente.

## 4. Desarrollo Técnico

### 4.1 Arquitectura del Sistema
El proyecto se organiza en una estructura de monorepo:
*   `/api-go`: Puerto 9000 -> Dog API.
*   `/api-python`: Puerto 8000 -> RandomUser API.
*   `/api-sveltekit`: Puerto 5000 -> PokeAPI.
*   `/frontend-svelte`: Puerto 5173 -> Dashboard Central.

### 4.2 Implementación de Backends (Proxies)
Cada backend realiza una tarea de "proxy" y "limpieza":
1.  **Llamada**: El backend recibe la petición del frontend.
2.  **Consumo**: Se comunica con la API externa (Dog, User o Pokemon).
3.  **Mapeo**: Transforma la respuesta extensa de la API externa en un objeto JSON simplificado.
4.  **Entrega**: Envía los datos con las cabeceras CORS (`Access-Control-Allow-Origin: *`) necesarias.

### 4.3 Configuración de CORS
Un reto técnico clave fue habilitar el intercambio de recursos entre diferentes orígenes.
*   **En Go**: Se inyectaron manualmente los headers en el `http.ResponseWriter`.
*   **En FastAPI**: Se utilizó el middleware oficial `CORSMiddleware`.
*   **En SvelteKit**: Se manejaron las cabeceras directamente en el objeto de respuesta de la función `GET`.

## 5. Resultados Obtenidos
Se logró la integración exitosa de los tres servicios en un único tablero de control. El frontend muestra de manera dinámica:
*   Imágenes aleatorias de perros procesadas por el servidor en Go.
*   Perfiles de usuario generados y servidos por la API de Python.
*   Estadísticas y arte oficial de Pokémon filtrados por el backend de SvelteKit.

El rendimiento es óptimo debido a que cada servicio se encarga exclusivamente de su dominio de datos, reduciendo la carga computacional en el cliente.

## 6. Conclusiones
La práctica demuestra que no es necesario limitarse a un solo lenguaje de programación para construir soluciones modernas. El enfoque **políglota** permite:
1.  **Especialización**: Usar el lenguaje más eficiente para cada tarea (ej. Go para velocidad, Python para facilidad de manejo de datos).
2.  **Escalabilidad**: Cada microservicio puede escalarse independientemente.
3.  **Aprendizaje**: Se profundizó en el manejo de protocolos HTTP, serialización JSON y gestión de entornos (pip, npm, go mod).

---
**Nota**: Este reporte es parte del repositorio `Act-APIS` y sirve como documentación técnica del desarrollo realizado en el ecosistema multiplataforma.
