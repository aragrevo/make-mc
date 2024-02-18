<script>
  import {burger} from 'src/store';
  // Inspired by https://svelte.dev/repl/810b0f1e16ac4bbd8af8ba25d5e0deff?version=3.4.2.
  import {flip} from 'svelte/animate';
  import IndicatorsStep from './IndicatorsStep.svelte';
  import Builder from './Builder.svelte';

  let baskets = [
    {
      name: 'Basket 1',
      items: ['Orange', 'Pineapple'],
    },
    {
      name: 'Basket 2',
      items: ['Banana', 'Apple'],
    },
  ];
</script>

<section>
  <h1>{$burger.name}</h1>

  <IndicatorsStep />
  <Builder />

  <!-- {#each baskets as basket, basketIndex (basket)}
    <div animate:flip>
      <b>{basket.name}</b>
      <ul
        class:hovering={hoveringOverBasket === basket.name}
        on:dragenter={() => (hoveringOverBasket = basket.name)}
        on:dragleave={() => (hoveringOverBasket = null)}
        on:drop={event => drop(event, basketIndex)}
        ondragover="return false"
      >
        {#each basket.items as item, itemIndex (item)}
          <div class="item" animate:flip>
            <li draggable={true} on:dragstart={event => dragStart(event, basketIndex, itemIndex)}>
              {item}
            </li>
          </div>
        {/each}
      </ul>
    </div>
  {/each} -->
</section>

<style>
  .hovering {
    border-color: orange;
  }
  .item {
    display: inline; /* required for flip to work */
  }
  li {
    background-color: lightgray;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    padding: 10px;
  }
  li:hover {
    background: orange;
    color: white;
  }
  ul {
    border: solid lightgray 1px;
    display: flex; /* required for drag & drop to work when .item display is inline */
    height: 40px; /* needed when empty */
    padding: 10px;
  }
</style>
