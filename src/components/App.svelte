<script>
  import {APP_STATUS, appStatus} from '../store.ts';
</script>

{#if $appStatus === APP_STATUS.INIT}
  <p class="instructions">
    Dá al botón iniciar y prepara tú
    <strong>MC</strong>. Selecciona los ingredientes correctos.
  </p>
{/if}

<style>
  .instructions {
    margin-bottom: 2rem;
    border: 1px solid rgba(var(--accent-light), 25%);
    background: linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%));
    padding: 1.5rem;
    border-radius: 8px;
  }
  .instructions strong {
    color: rgb(var(--accent-light));
  }
</style>
