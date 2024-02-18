<script>
  import {setAppStatusLoading} from 'src/store';

  import Button from './Button.svelte';
  function handleClick() {
    setAppStatusLoading();
  }
</script>

<h1>PArabens!</h1>
<Button on:click={handleClick} />
