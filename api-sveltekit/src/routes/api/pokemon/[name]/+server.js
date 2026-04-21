import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
    const { name } = params;
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            return json({ error: 'Pokemon no encontrado' }, { status: 404 });
        }
        const data = await response.json();

        // Procesamos los datos para devolver una estructura limpia
        const pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.other['official-artwork'].front_default || data.sprites.front_default,
            types: data.types.map(t => t.type.name),
            stats: data.stats.map(s => ({ name: s.stat.name, value: s.base_stat }))
        };

        return json(pokemon, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        });
    } catch (error) {
        return json({ error: 'Error al conectar con PokeAPI' }, { status: 500 });
    }
}
