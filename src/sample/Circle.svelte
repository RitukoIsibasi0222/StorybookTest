<script>
  export let radius = 50;
  export let color = 'blue';
</script>

<style>
  .circle {
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    background-color: var(--color);
  }
</style>

<div
  class="circle"
  style="--size: {radius * 2}px; --color: {color};"
></div>