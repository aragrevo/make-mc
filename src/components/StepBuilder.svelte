<script>
  import {burger, setAppStatusLoading} from 'src/store';
  import IndicatorsStep from './IndicatorsStep.svelte';
  import Builder from './Builder.svelte';
</script>

<section class="flex flex-col gap-4">
  <h1 class="text-2xl text-center text-[#EA7C69]">{$burger.name}</h1>

  <IndicatorsStep />
  <Builder />
</section>
<button
  type="button"
  on:click={setAppStatusLoading}
  class="fixed bottom-4 right-4 border focus:ring-4 focus:outline-none font-medium rounded-full text-sm p-2 text-center inline-flex items-center border-blue-800 text-blue-800 hover:text-white focus:ring-blue-800 hover:bg-blue-700"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    class="w-4 h-4"
    viewBox="0 0 24 24"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
    /></svg
  >
  <span class="sr-only">Reload</span>
</button>
