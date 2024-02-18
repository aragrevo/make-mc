<script>
  import {APP_STATUS, appStatus} from '../store.ts';
  import Introduction from '@components/Introduction.svelte';
  import StepLoading from '@components/StepLoading.svelte';
  import StepBuilder from '@components/StepBuilder.svelte';
  import StepDone from './StepDone.svelte';
</script>

{#if $appStatus === APP_STATUS.INIT}
  <Introduction />
{:else if $appStatus === APP_STATUS.LOADING}
  <div>
    <StepLoading />
  </div>
{:else if $appStatus === APP_STATUS.BUILD}
  <div>
    <StepBuilder />
  </div>
{:else if $appStatus === APP_STATUS.DONE}
  <div>
    <StepDone />
  </div>
{/if}
