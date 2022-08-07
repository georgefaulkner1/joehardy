<script>
    import { fade, fly } from 'svelte/transition';
</script>

<div class="container" in:fade>

    <div class="contact-header">
        <h1>Contact Me</h1>
    </div>

    <div class="contact-area">

        <div class="contact-block contact-details" in:fade={{ delay: 500 }}>

        </div>

        <div class="contact-block image-card" in:fade={{ delay: 1000 }}>

        </div>

    </div>

</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

    :global(body){
        background-color: black;
        background-image: none;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1, h2, p, li {
        color: #fff;
        font-family: 'Montserrat', sans-serif;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        width: 1200px;
        margin: 50px auto;
    }

    .contact-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .contact-header h1 {
        font-weight: 600;
        font-size: 58px;
    }

    .contact-area {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .contact-block {
        height: 440px;
        border-radius: 22px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
    }

    .contact-details {
        width: 700px;
        background-color: rgb(69, 78, 158);
    }

    .image-card {
        width: 400px;
        border: 1px solid #fff;
    }

</style>