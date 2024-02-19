<script>
  import {flip} from 'svelte/animate';
  export let items = [];
  export let sectionName = '';

  function dragStart(ev, item, itemIndex) {
    ev.currentTarget.classList.add('border-dashed');
    const data = {item, itemIndex};
    ev.dataTransfer.setData('text/plain', JSON.stringify(data));
  }

  function dragEnd(ev) {
    ev.currentTarget.classList.remove('border-dashed');
  }
</script>

<article class="w-full p-4 text-center border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700">
  <h5 class="mb-3 text-2xl font-bold text-white/90">{sectionName}</h5>
  <ul class="flex flex-wrap gap-3">
    {#each items.sort() as item, itemIndex (item)}
      <div animate:flip class="flex-initial">
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
