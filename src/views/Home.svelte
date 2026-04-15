<script>
  import GlassCard from '../components/GlassCard.svelte';
  
  // Expose an event dispatcher or just take a prop to change view
  export let changeView = (view) => {};

  const apis = [
    {
      id: 'dog',
      title: 'Dog API',
      description: 'Generador infinito de amigos peludos. Un API perfecto para explorar razas y aleatoriedad.',
      icon: '🐕',
      color: '#fcd34d' // amber
    },
    {
      id: 'user',
      title: 'RandomUser',
      description: 'Datos de usuarios simulados. Ideal para llenar directorios y construir tarjetas de perfiles de ejemplo.',
      icon: '👥',
      color: '#60a5fa' // blue
    },
    {
      id: 'poke',
      title: 'PokeAPI',
      description: 'La enciclopedia Pokémon en tu bolsillo. Consulta sprites, tipos y estadísticas en tiempo real.',
      icon: '⚡',
      color: '#ef4444' // red
    }
  ];
</script>

<div class="home-view">
  <header class="hero">
    <h1 class="title">Explorador de APIs</h1>
    <p class="subtitle">Selecciona una de las 3 APIs públicas para visualizar cómo Svelte maneja las peticiones y renderiza los datos en una interfaz premium.</p>
  </header>

  <div class="cards-grid">
    {#each apis as api}
      <GlassCard 
        title={api.title}
        description={api.description}
        icon={api.icon}
        color={api.color}
        onClick={() => changeView(api.id)}
      />
    {/each}
  </div>
</div>

<style>
  .home-view {
    animation: fadeIn 0.6s ease-out;
  }

  .hero {
    text-align: center;
    margin-bottom: 4rem;
    padding-top: 2rem;
  }

  .hero .title {
    font-size: 3.5rem;
  }

  .hero .subtitle {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.2rem;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding-bottom: 3rem;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
