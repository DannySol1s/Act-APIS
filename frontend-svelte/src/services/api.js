// /src/services/api.js

/**
 * Servicio para consumir la Dog API mediante PROXY GO
 * Backend: api-go (Puerto 9000)
 */
export const fetchRandomDog = async () => {
    try {
        const response = await fetch('http://localhost:9000/dog');
        if (!response.ok) throw new Error('Error al obtener la imagen del perrito desde el proxy Go');
        const data = await response.json();
        return data.url; // El proxy de Go devuelve { "url": "..." }
    } catch (error) {
        console.error("Error en Proxy Go:", error);
        return null;
    }
};

/**
 * Servicio para consumir la Random User API mediante PROXY PYTHON
 * Backend: api-python (Puerto 8000)
 */
export const fetchRandomUsers = async (count = 3) => {
    try {
        const response = await fetch(`http://localhost:8000/user?results=${count}`);
        if (!response.ok) throw new Error('Error al obtener usuarios desde el proxy Python');
        const data = await response.json();
        return data; // El proxy de Python devuelve directamente el arreglo de resultados
    } catch (error) {
        console.error("Error en Proxy Python:", error);
        return [];
    }
};

/**
 * Servicio para consumir la PokeAPI mediante PROXY SVELTEKIT
 * Backend: api-sveltekit (Puerto 5000)
 */
export const fetchPokemon = async (idOrName) => {
    try {
        const response = await fetch(`http://localhost:5000/api/pokemon/${idOrName}`);
        if (!response.ok) throw new Error('Error al obtener el Pokémon desde el proxy SvelteKit');
        const data = await response.json();
        // El proxy de SvelteKit ya devuelve el objeto procesado y limpio
        return data; 
    } catch (error) {
        console.error("Error en Proxy SvelteKit:", error);
        return null;
    }
};
