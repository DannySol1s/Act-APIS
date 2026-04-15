// /src/services/api.js

/**
 * Servicio para consumir la Dog API
 * Documentación: https://dog.ceo/dog-api/
 */
export const fetchRandomDog = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) throw new Error('Error al obtener la imagen del perrito');
        const data = await response.json();
        return data.message; // Devuelve la URL de la imagen
    } catch (error) {
        console.error(error);
        return null;
    }
};

/**
 * Servicio para consumir la Random User API
 * Documentación: https://randomuser.me/
 */
export const fetchRandomUsers = async (count = 3) => {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${count}`);
        if (!response.ok) throw new Error('Error al obtener usuarios');
        const data = await response.json();
        return data.results; // Devuelve un arreglo de usuarios
    } catch (error) {
        console.error(error);
        return [];
    }
};

/**
 * Servicio para consumir la PokeAPI
 * Documentación: https://pokeapi.co/
 */
export const fetchPokemon = async (idOrName) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
        if (!response.ok) throw new Error('Error al obtener el Pokémon');
        const data = await response.json();
        return {
            id: data.id,
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
            types: data.types.map(t => t.type.name),
            stats: data.stats.map(s => ({ name: s.stat.name, value: s.base_stat }))
        };
    } catch (error) {
        console.error(error);
        return null;
    }
};
