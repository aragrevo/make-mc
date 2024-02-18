<script>
  export let active;
  export let fill;
</script>

<li
  class="{fill
    ? 'after:border-blue-800'
    : 'after:border-gray-700'} flex flex-1 items-center text-blue-600 dark:text-blue-500 last:flex-none last:after:w-0 last:after:content-none after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block"
>
  <span
    class="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 p-1.5 lg:p-2 {active
      ? 'bg-blue-800'
      : 'bg-gray-700'}"
  >
    <slot />
  </span>
</li>
