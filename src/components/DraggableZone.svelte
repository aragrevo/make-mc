<script>
  import {createEventDispatcher} from 'svelte';
  import {flip} from 'svelte/animate';
  const dispatch = createEventDispatcher();
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

  function touchMove(ev) {
    const touchLocation = ev.targetTouches[0];
    const box = ev.currentTarget;
    box.classList.add('border-dashed');
    box.style.position = 'absolute';
    box.style.zIndex = '2';
    box.style.left = touchLocation.pageX + 'px';
    box.style.top = touchLocation.pageY + 'px';
  }

  function touchEnd(ev, item, itemIndex) {
    // current box position.
    const box = ev.currentTarget;
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
    const dropZone = document.querySelector('.dropzone');
    const {bottom, left, right, top} = dropZone.getBoundingClientRect();

    if (left <= x && x <= right && top <= y && y <= bottom) {
      dispatch('dropMe', {
        item,
        itemIndex,
        target: box,
      });
      return;
    }
    box.style.position = 'initial';
    ev.currentTarget.classList.remove('border-dashed');
    dispatch('dropMe', null);
  }
</script>

<article class="w-full p-4 text-center border rounded-lg shadow sm:p-8 bg-gray-800 border-gray-700 min-h-[25vh]">
  <h5 class="mb-3 text-2xl font-bold text-white/90">{sectionName}</h5>
  <ul class="flex flex-wrap gap-3">
    {#each items.sort() as item, itemIndex (item)}
      <li
        animate:flip
        draggable={true}
        on:dragstart={event => dragStart(event, item, itemIndex)}
        on:dragend={event => dragEnd(event, item, itemIndex)}
        on:touchmove={event => touchMove(event)}
        on:touchend={event => touchEnd(event, item, itemIndex)}
        class=" flex-initial cursor-pointer inline-block max-w-xs p-4 rounded-lg shadow text-gray-400 divide-gray-700 bg-gray-800 border border-gray-700 text-sm leading-none hover:bg-gray-900"
      >
        <span class="text-sm font-normal leading-none">{item}</span>
      </li>
    {/each}
  </ul>
</article>
