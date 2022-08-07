<script>
    import { fade, fly } from 'svelte/transition';
</script>

<div class="container" in:fade>

</div>

<style>

    :global(body){
        background-color: black;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1, h2, p {
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 1200px;
        margin: 50px auto;
    }


</style>