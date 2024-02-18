<script>
  import Button from '@components/Button.svelte';
  import {setAppStatusLoading} from 'src/store';

  function handleClick() {
    setAppStatusLoading();
  }
</script>

<section class="">
  <p class="instructions mb-6 p-6 text-2xl">
    Press the start button and get your
    <strong>MC</strong> test. Choose the right ingredients. Ready? Let's go!
  </p>
  <Button on:click={handleClick} />
</section>

<style>
  .instructions {
    border: 1px solid rgba(var(--accent-light), 25%);
    background: linear-gradient(rgba(var(--accent-dark), 66%), rgba(var(--accent-dark), 33%));
    border-radius: 8px;
  }
  .instructions strong {
    color: rgb(var(--accent-light));
  }
</style>
