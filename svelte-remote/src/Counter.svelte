<script lang="ts">
  let count = 0;
</script>

<div class="flex items-center gap-4 mt-4 text-lg">
  <button
    class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
    on:click={() => (count -= 1)}
  >
    -
  </button>
  <span>{count}</span>
  <button
    class="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
    on:click={() => (count += 1)}
  >
    +
  </button>
</div>
