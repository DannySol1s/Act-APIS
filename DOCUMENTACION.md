# Documentación: Ecosistema de Servicios y APIs

## Introducción
Este proyecto ha evolucionado de un simple consumidor de APIs a un **Ecosistema Multi-Tecnología**. El objetivo es demostrar cómo integrar servicios escritos en diferentes lenguajes (Python y JavaScript) dentro de una misma solución.

## 1. Arquitectura de Micro-servicios (Simulada)
Aunque todo reside en un solo repositorio (Monorepo), cada componente funciona de forma independiente:

### 1.1 Frontend (Svelte 5)
Ubicado en `/frontend-svelte`, es el cerebro visual. 
- **Desafío:** Manejar peticiones a diferentes dominios y puertos.
- **Solución:** Implementación de servicios dedicados en `src/services/api.js` que ahora también pueden apuntar a `localhost`.

### 1.2 Backend Python (FastAPI)
Ubicado en `/api-python`.
- **Por qué Python:** Es el estándar para ciencia de datos y APIs rápidas.
- **FastAPI:** Se eligió por su soporte nativo para `async`/`await` y su capacidad de auto-documentar los endpoints en `/docs`.

### 1.3 Backend Node.js (SvelteKit)
Ubicado en `/api-sveltekit`.
- **SvelteKit como API:** Demuestra que Svelte no es solo una cara bonita (UI), sino que tiene un motor potente (basado en Node.js) capaz de manejar lógica de servidor compleja.

## 2. Configuración de CORS
Un aspecto crítico al trabajar con múltiples APIs es el **Intercambio de Recursos de Origen Cruzado (CORS)**.
- En la API de Python, se configuró mediante el middleware de FastAPI.
- En SvelteKit, se configuró mediante el objeto `csrf` y cabeceras personalizadas en los endpoints.
Esto permite que el Frontend pueda "hablar" con todos los servicios sin ser bloqueado por el navegador.

## 3. Próximos Pasos
- Implementar una base de datos central (SQLite) a la que ambas APIs puedan conectarse.
- Agregar un sistema de autenticación compartido (JWT).
- Desplegar cada servicio usando Docker.
