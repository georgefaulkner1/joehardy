<script>
    import { fade, fly } from 'svelte/transition';
</script>

<div class="container" in:fade>
    <h1>Home</h1>
    <div class="col">
        <div class="half child">
        </div>
        <div class="half child">
        </div>
    </div>
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
        border: 1px solid #fff;
        width: 1200px;
        margin: 50px auto;
    }

    .col {
        display: flex;
        justify-content: space-evenly;
    }

    .child {
        padding: 5px;
    }

    .half {
        width: 50%;
    }
</style>