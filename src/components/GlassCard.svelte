<script>
  export let title = '';
  export let description = '';
  export let icon = '';
  export let onClick = () => {};
  export let color = '#a78bfa'; /* Default accent color */
</script>

<div class="glass-card" on:click={onClick} style="--card-hover-color: {color};">
  <div class="card-icon" style="background-color: {color}20; color: {color}">
    <span class="icon">{icon}</span>
  </div>
  <div class="card-content">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
  <div class="card-action">
    Explorar →
  </div>
</div>

<style>
  .glass-card {
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid var(--glass-border);
    border-radius: var(--glass-radius);
    padding: 2rem;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  /* Hover glow effect */
  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, var(--card-hover-color) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 0;
    mix-blend-mode: overlay;
  }

  .glass-card:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: var(--card-hover-color);
    box-shadow: 0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px var(--card-hover-color);
  }

  .glass-card:hover::before {
    opacity: 0.3;
  }

  .glass-card > * {
    position: relative;
    z-index: 1;
  }

  .card-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
    transition: transform 0.3s ease;
  }

  .glass-card:hover .card-icon {
    transform: scale(1.1) rotate(5deg);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }

  .card-action {
    font-weight: 600;
    color: var(--card-hover-color);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    transition: padding-left 0.3s ease;
  }

  .glass-card:hover .card-action {
    padding-left: 10px;
  }
</style>
