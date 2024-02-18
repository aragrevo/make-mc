<script>
  import {setAppStatusLoading} from 'src/store';
  import confetti from 'canvas-confetti';

  import Button from './Button.svelte';
  function handleClick() {
    setAppStatusLoading();
  }

  confetti();
</script>

<section class="flex flex-col gap-8">
  <h2 class="text-2xl text-center text-[#EA7C69]">Nice Work!</h2>
  <Button on:click={handleClick}>Play Again</Button>
</section>
