<script lang="ts">
  import {setBurger} from 'src/store';
  import {burgers} from 'src/data/burgers';

  function randomNumber(max: number) {
    return Math.floor(Math.random() * max);
  }

  setTimeout(() => {
    const idx = randomNumber(burgers.length);
    setBurger(burgers[idx]);
  }, 750);
</script>

<div class="flex justify-center items-center flex-col gap-y-8">
  <p class="opacity-75 text-xl">Seleccionando hamburgesa...</p>
  <span class="loader"></span>
</div>

<style>
  .loader {
    width: 90px;
    height: 14px;
    box-shadow: 0 3px 0 #fff;
    position: relative;
    clip-path: inset(-40px 0 -5px);
  }
  .loader:before {
    content: '';
    position: absolute;
    inset: auto calc(50% - 17px) 0;
    height: 50px;
    background:
      no-repeat linear-gradient(#00da3c 0 0),
      no-repeat linear-gradient(#00cbe7 0 0),
      no-repeat linear-gradient(#fd8603 0 0),
      no-repeat linear-gradient(#f4f328 0 0);
    background-size: 16px 14px;
    animation:
      l7-1 2s infinite linear,
      l7-2 2s infinite linear;
  }
  @keyframes l7-1 {
    0%,
    100% {
      background-position:
        0 -50px,
        100% -50px;
    }
    17.5% {
      background-position:
        0 100%,
        100% -50px,
        0 -50px,
        100% -50px;
    }
    35% {
      background-position:
        0 100%,
        100% 100%,
        0 -50px,
        100% -50px;
    }
    52.5% {
      background-position:
        0 100%,
        100% 100%,
        0 calc(100% - 16px),
        100% -50px;
    }
    70%,
    98% {
      background-position:
        0 100%,
        100% 100%,
        0 calc(100% - 16px),
        100% calc(100% - 16px);
    }
  }
  @keyframes l7-2 {
    0%,
    70% {
      transform: translate(0);
    }
    100% {
      transform: translate(200%);
    }
  }
</style>
