import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// CSRF se maneja automáticamente en SvelteKit 2+, 
		// pero permitimos orígenes externos si es necesario en los endpoints
	}
};

export default config;
