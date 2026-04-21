# 🚀 Ecosistema Multi-API (Monorepo)

![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![SvelteKit](https://img.shields.io/badge/SvelteKit-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Go](https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white)

Este es un proyecto educativo avanzado diseñado para demostrar la integración y orquestación de múltiples servicios construidos en diferentes ecosistemas, todos consolidados en una interfaz moderna y fluida.

---

## 📁 Arquitectura del Ecosistema

El proyecto utiliza una estructura de **Monorepo** para gestionar dinámicamente cada servicio:

### 🎨 [Frontend (Svelte 5)](./frontend-svelte)
*   **Tecnología:** Svelte 5 + Vite + Vanilla CSS.
*   **Función:** Dashboard central que consume y visualiza datos de todos los microservicios locales.

### 🐍 [API Python (FastAPI)](./api-python) ➡️ **RandomUser API**
*   **Descripción:** *"Datos de usuarios simulados. Ideal para llenar directorios y construir tarjetas de perfiles de ejemplo."*
*   **Puerto Local:** `http://localhost:8000`
*   **Servicio Externo:** [RandomUser](https://randomuser.me/)

### ⚡ [API SvelteKit](./api-sveltekit) ➡️ **PokeAPI**
*   **Descripción:** *"La enciclopedia Pokémon en tu bolsillo. Consulta sprites, tipos y estadísticas en tiempo real."*
*   **Puerto Local:** `http://localhost:5000`
*   **Servicio Externo:** [PokeAPI](https://pokeapi.co/)

### 🐹 [API Go (Golang)](./api-go) ➡️ **Dog API**
*   **Descripción:** *"Generador infinito de amigos peludos. Un API perfecto para explorar razas y aleatoriedad."*
*   **Puerto Local:** `http://localhost:9000`
*   **Servicio Externo:** [Dog API](https://dog.ceo/dog-api/)

---

## 🚀 Guía de Inicio Rápido

Sigue estos pasos para levantar el ecosistema completo en tu entorno local:

### 1. Frontend (Svelte)
```bash
cd frontend-svelte
npm install
npm run dev
```

### 2. API Python (FastAPI) ➡️ RandomUser API
```bash
cd api-python
pip install -r requirements.txt
python -m uvicorn main:app --reload
```

### 3. API SvelteKit ➡️ PokeAPI
```bash
cd api-sveltekit
npm install --legacy-peer-deps
npm run dev
```

### 4. API Go ➡️ Dog API
```bash
cd api-go
go run main.go
```

---

## 📄 Documentación y Recursos
Para un análisis profundo sobre la arquitectura, manejo de CORS y decisiones de diseño, consulta nuestro archivo de [DOCUMENTACION.md](./DOCUMENTACION.md).

---
*Desarrollado con ❤️ para demostrar el poder de la poliglotía en el desarrollo web.*
