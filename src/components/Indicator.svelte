<script>
  export let active;
</script>

<li
  class="flex flex-1 items-center text-blue-600 dark:text-blue-500 last:flex-none last:after:w-0 last:after:content-none after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-gray-700"
  class:after:border-blue-800={active}
>
  <span
    class="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full lg:h-12 lg:w-12 shrink-0 p-1.5 lg:p-2"
    class:bg-blue-800={active}
  >
    <slot />
  </span>
</li>
