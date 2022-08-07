<script>
    import { fade, fly } from 'svelte/transition';
</script>

<div class="container" in:fade>

    <div class="about-header">
        <h1>About Me</h1>
    </div>

    <div class="about-area">

        <div class="about-block about-details" in:fade={{ delay: 500 }}>
            <p>
                Let me start by telling you a bit about myself. I am an online
                coach and personal trainer for motivated individuals who
                want to change their life. I help clients every day to transform
                their body and become happier and healthier. I help clients
                by creating personalised programmes that are tailored to the
                individual. With in house personal training, I push my clients
                beyond their limits and they see results quicker than ever!
                I come from a sporty background with me discovering I had a
                passion for the gym as early as 12 years old. I was in a gym
                environment from an early age with my brother putting me
                on a treadmill as early as 9 years of age. As years went by and
                I grew older I was finding myself on all the machines at the
                gym and by 12 years old I was in the gym training by myself.<br><br> I
                got given an Arnold Schwarzenegger Encyclopaedia and
                slowly but surely read through the book and is where my
                passion for fitness and the gym exponentially grew. As early
                as 16 years old I knew I wanted to be a personal trainer and
                help other people with their fitness goals.
                In college I completed a Level 3 BTEC Diploma in Sports &amp;
                Exercise &amp; after 2 years I got my qualification. As soon as I
                left college I knew I wanted to get my Qualifications to be a
                personal trainer. A year later, I completed my Level 2 Gym
                instruction course which led me on to completing my Level 3
                Personal Training course.
                <br><br>
                Now, I am helping clients achieve their fitness goals and
                transforming their lives for the better becoming happier and
                healthier!
            </p>
        </div>

        <div class="about-block image-card" in:fade={{ delay: 1000 }}>

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

    .about-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .about-header h1 {
        font-weight: 600;
        font-size: 58px;
    }

    .about-area {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .about-block {
        height: 500px;
        border-radius: 22px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
    }

    .about-details {
        width: 700px;
        background-color: rgb(233, 79, 55);
    }

    .about-details p {
        font-weight: 600;
        font-size: 16px;
        padding: 5px;
        width: 640px;
        color: black;
    }

    .image-card {
        width: 400px;
        border: 1px solid #fff;
    }

</style>