<script>
    export let width = 120;
    export let height = 120;
    export let color = '#cccccc';
</script>

<style>
    .square {
        width: var(--width);
        height: var(--height);
        background-color: var(--color);
    }
</style>

<div
    class="square"
    style="--width: {width}px; --height: {height}px; --color: {color};">   
</div>