<script>
    import { fade, fly } from "svelte/transition"
    import { goto } from '$app/navigation'

    import Nav from "../components/nav.svelte"
    import { onMount } from "svelte"

    let ready = false
    onMount(async () => {
        ready = true
    })

    function DiscoverButton(){
        goto("/pricing")
    }

</script>



<section class="home" id="home">
    {#if ready}
        <div class="hero index" in:fly={{ x: -200, duration: 2000 }} out:fade>
            <h2 class="header-title">Discover your Potential, the Hardy way!</h2>
            <h1>Personal training, Online Programs & Nutritional plans</h1>
            <button on:click={DiscoverButton}>Discover your Potential</button>
        </div>
    {/if}
</section>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

    :global(body){
        background-repeat: no-repeat;
        background-size: cover;
        padding: 0;
        margin: 0;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        background-color: black;
    }

    section {
        display: grid;
        place-items: center;
        align-content: center;
        height: 100vh;
    }

    .home {
        background-image: url("https://i.ibb.co/LJXvwCk/home-background-scaled.png");    
        background-repeat: no-repeat;
        background-size: contain;
    }

    .hero {
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .hero button {
        margin-top: 5px;
        width: 280px;
        height: 50px;
        border: 2px solid #fff;
        border-radius: 9999px;
        background: none;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        line-height: 0;
        transition: background-color 1s, color 1s;
    }

    .hero button:hover {
        color: black;
        background-color: #fff;
    }

    .hero h1, .hero h2 {
        margin: 10px 0px 10px 0px;
    }

    section h1 {
        font-size: 64px;
    }

    .hidden {
        opacity: 0;
        filter: blur(5px);
        transform: translateX(-100%);
        transition: all 2s;
    }

    :global(.show) {
        opacity: 1 !important;
        filter: blur(0) !important;
        transform: translateX(0) !important;
    }

    /* Small Device */
    @media only screen and (max-width: 768px) {
        section h1 {
            font-size: 34px;
        }

        section h2 {
            font-size: 24px;
        }

        .hero {
            max-width: 300px;
        }

        .home {
            background-image: url("https://i.ibb.co/3v3j5jy/home-mobile-background.jpg");    
            background-repeat: no-repeat;
            background-size: contain;
            height: calc(100vh - 100px);
        }
    }


</style>