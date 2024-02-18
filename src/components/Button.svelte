<li class="link-card text-center mx-auto w-32">
  <button on:click>
    <h2>
      <slot />
    </h2>
  </button>
</li>

<style>
  .link-card {
    list-style: none;
    aspect-ratio: 1 / 1;
    display: flex;
    padding: 1px;
    background-color: #23262d;
    background-image: none;
    background-size: 400%;
    /* border-radius: 7px; */
    background-position: 100%;
    transition: background-position 0.6s ease;
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
  .link-card > button {
    width: 100%;
    text-decoration: none;
    line-height: 1.4;
    padding: calc(1.5rem - 1px);
    /* border-radius: 8px; */
    border-radius: 50%;
    color: white;
    background-color: #23262d;
    opacity: 0.8;
  }
  h2 {
    margin: 0;
    transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .link-card:is(:hover, :focus-within) {
    background-position: 0;
    background-image: var(--accent-gradient);
  }
  .link-card:is(:hover, :focus-within) h2 {
    color: rgb(var(--accent-light));
  }
</style>
