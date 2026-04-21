<script>
  import Home from './views/Home.svelte';
  import DogView from './views/DogView.svelte';
  import UserView from './views/UserView.svelte';
  import PokeView from './views/PokeView.svelte';

  let currentView = 'home'; // home, dog, user, poke

  const navigate = (viewId) => {
    currentView = viewId;
  };
</script>

<main class="container">
  
  {#if currentView === 'home'}
    <Home changeView={navigate} />
  {:else if currentView === 'dog'}
    <DogView onBack={() => navigate('home')} />
  {:else if currentView === 'user'}
    <UserView onBack={() => navigate('home')} />
  {:else if currentView === 'poke'}
    <PokeView onBack={() => navigate('home')} />
  {/if}

</main>

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
