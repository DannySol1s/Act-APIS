<script>
  import { fetchRandomUsers } from '../services/api';
  export let onBack = () => {};

  let usersPromise = fetchRandomUsers(3);

  function reloadUsers() {
    usersPromise = fetchRandomUsers(3);
  }
</script>

<div class="view-container">
  <button class="back-btn glass-panel" on:click={onBack}>← Volver</button>
  
  <div class="content glass-panel">
    <div class="header">
      <h2 class="title" style="margin-bottom: 0;">RandomUser API</h2>
      <p class="subtitle" style="margin-bottom: 1rem; margin-top: 0.5rem;">Temática: Directorio de Usuarios</p>
    </div>

    {#await usersPromise}
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Generando perfiles...</p>
      </div>
    {:then users}
      <div class="users-grid">
        {#each users as user}
          <div class="user-card glass-panel">
            <img src={user.picture.large} alt="Foto de {user.name.first}" class="avatar" />
            <h3>{user.name.first} {user.name.last}</h3>
            <p class="email">{user.email}</p>
            <p class="location">{user.location.city}, {user.location.country}</p>
          </div>
        {/each}
      </div>
      <button class="reload-btn" on:click={reloadUsers}>Generar otros perfiles</button>
    {:catch error}
      <div class="error-state">
        <p>Hubo un error cargando los usuarios</p>
        <button on:click={reloadUsers}>Reintentar</button>
      </div>
    {/await}
  </div>
</div>

<style>
  .view-container {
    animation: slideIn 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .back-btn {
    align-self: flex-start;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: var(--text-primary);
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.1);
  }

  .back-btn:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-5px);
  }

  .content {
    padding: 3rem;
    width: 100%;
    max-width: 900px;
    text-align: center;
  }

  .loading-state, .error-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .spinner {
    width: 50px;
    height: 50px;
    border: 4px solid var(--glass-border);
    border-top-color: #60a5fa;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  .users-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
  }

  .user-card {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
  }

  .user-card:hover {
    transform: translateY(-5px);
    border-color: #60a5fa;
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #60a5fa;
    margin-bottom: 1rem;
  }

  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .email {
    color: #93c5fd;
    margin-bottom: 0.2rem;
    word-break: break-all;
  }

  .reload-btn {
    background: #60a5fa;
    color: #0f172a;
    padding: 1rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .reload-btn:hover {
    background: #3b82f6;
    transform: translateY(-2px);
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>
