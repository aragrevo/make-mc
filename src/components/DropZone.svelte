<script>
  import {flip} from 'svelte/animate';

  export let itemsAdded = [];
  export let handleDrop;
  export let fail;

  function dragOver(ev) {
    ev.currentTarget.classList.add('border-dashed');
    ev.currentTarget.classList.add('grayscale');
    ev.currentTarget.classList.remove('grayscale-0');
    ev.preventDefault();
  }

  function dragLeave(ev) {
    resetClassListDropZone(ev);
    ev.preventDefault();
  }

  function resetClassListDropZone(ev) {
    ev.currentTarget.classList.remove('border-dashed');
    ev.currentTarget.classList.remove('grayscale');
    ev.currentTarget.classList.add('grayscale-0');
  }

  function drop(ev) {
    ev.preventDefault();
    resetClassListDropZone(ev);
    const json = ev.dataTransfer.getData('text/plain');
    const data = JSON.parse(json);
    if (handleDrop) {
      handleDrop(data.item);
    }
  }
</script>

<article
  on:drop={event => drop(event)}
  on:dragover={event => dragOver(event)}
  on:dragleave={event => dragLeave(event)}
  class="dropzone flex flex-col md:flex-row justify-between p-4 border rounded-lg border-gray-600 filter grayscale-0 transition-all"
  class:snake={fail}
>
  <div class="flex flex-col min-h-[20vh] items-start w-full">
    <ul class="flex flex-wrap gap-2 mb-2">
      {#each itemsAdded as item, itemIndex (item)}
        <div animate:flip class="inline">
          <li
            class="inline-block max-w-xs p-3 rounded-lg shadow text-gray-400 divide-gray-700 bg-gray-900 border border-gray-700 text-sm leading-none"
          >
            <span class="text-sm font-normal leading-none">{item}</span>
          </li>
        </div>
      {/each}
    </ul>
    <p class="flex self-center items-center mt-auto text-sm font-normal text-center text-gray-400">
      Drag and drop all ingredients of this burger
    </p>
  </div>
</article>

<style>
  .dropzone {
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
    background-color: #23262d;
    opacity: 0.8;
  }
  .snake {
    animation: snake 0.5s ease-in-out;
  }
  @keyframes snake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(10px);
    }
    75% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
