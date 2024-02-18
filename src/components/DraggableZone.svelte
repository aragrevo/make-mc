<script>
  import {flip} from 'svelte/animate';
  export let items = [];

  function dragStart(ev, item, itemIndex) {
    ev.currentTarget.classList.add('border-dashed');
    const data = {item, itemIndex};
    ev.dataTransfer.setData('text/plain', JSON.stringify(data));
  }

  function dragEnd(ev) {
    ev.currentTarget.classList.remove('border-dashed');
  }
</script>

<article class="m-4">
  <ul class="flex flex-wrap gap-3">
    {#each items as item, itemIndex (item)}
      <div animate:flip class="inline">
        <li
          draggable={true}
          on:dragstart={event => dragStart(event, item, itemIndex)}
          on:dragend={event => dragEnd(event, item, itemIndex)}
          class="cursor-pointer inline-block max-w-xs p-4 rounded-lg shadow text-gray-400 divide-gray-700 bg-gray-800 border border-gray-700 text-sm leading-none hover:bg-gray-900"
        >
          <span class="text-sm font-normal leading-none">{item}</span>
        </li>
      </div>
    {/each}
  </ul>
</article>
