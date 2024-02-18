<script>
  import Indicator from './Indicator.svelte';
  import Bread from './Bread.svelte';
  import Sauce from './Sauce.svelte';
  import Meat from './Meat.svelte';
  import {STEPS, step} from 'src/store';
</script>

<ol class="flex items-center w-full justify-between">
  <Indicator active={$step >= STEPS.INITIALIZER} fill={$step >= STEPS.SEASONING}>
    <Bread />
  </Indicator>
  <Indicator active={$step >= STEPS.SEASONING} fill={$step >= STEPS.FINISHER}>
    <Sauce />
  </Indicator>
  <Indicator active={$step >= STEPS.FINISHER} fill={$step >= STEPS.FINISHER}>
    <Meat />
  </Indicator>
</ol>
