<script>
    import { fade, fly } from "svelte/transition"

    import Nav from "../components/nav.svelte"
    import { onMount } from "svelte"

    let ready = false
    onMount(async () => {
        ready = true
    })

</script>



<section class="home" id="home">
    {#if ready}
        <div class="hero" in:fly={{ x: -200, duration: 2000 }} out:fade>
            <h2 class="header-title">About Me</h2>
            <p class="mobile-about">
                I have been in the gym ever since I was 12 years
                old. The gym, fitness, health & well being is
                something I'm extremely passionate about as I
                have spent a large part of my life studying and
                being in an environment that promotes health
                and well being. I train at the gym myself 6 times
                a week, therefore I know and have a lot of
                experience in training in the gym as I have been
                training for the better part of 7 years and
                counting. I grew a passion for sharing my
                knowledge to people in the gym when I started
                helping my friends with what to do at the gym.
                Since then, I knew I wanted to be a personal
                trainer with my own business helping others
                achieve their dreams and goals!
            </p>

            <div class="family">

                <div class="group">
                    <p class="mobile-about">
                        I offer a number of different services to help you
                        achieve your goals. Online coaching is the most
                        popular and most effective way for you to
                        improve and achieve your wants in the gym and
                        in everyday life. Online coaching provides a
                        structure to your life, gives an in depth
                        description of what to do in the gym and why
                        you are doing it. Each program is tailored to the
                        client which takes into account the clients goals,
                        lifestyle, diet etc. This results in my clients feel
                        awesome and build their best body! So, don't
                        worry if you work unusual hours, as long as you
                        have an hour spare in the day from when you
                        wake up, to when you go to sleep, you can train.
                        No excuses!
                    </p>
        
                    <p class="mobile-about">
                        Online coaching is also the most cost-effective
                        way of hiring a coach. To break it down, the
                        average cost of a personal trainer can be
                        anywhere between £30-£40 per hour. If you
                        train 3 times a week with a personal trainer,
                        that's a monthly cost of £360-£480. That is for
                        12 hours worth of work a month! Whereas with
                        Online coaching you can get up to 30 hours
                        worth of personal training per month worth
                        £200. So, if you train 3 times a week, this would
                        work out as £16 per hour instead of the costly
                        £30-£40 per hour whilst getting the same, if not
                        better results as you would training Face to
                        Face! This also gets cheaper the more you train.
                        If you require 4 days of training out of the 7 days
                        per week. monthly that would add up to 16
                        hours per month which would be the equivalent
                        of £12.50 per hour! The more you train, the
                        cheaper it is, the better the results…
                    </p>
                </div>

                <div class="image-container">
                    <img src="./about3.jpg" alt="">
                </div>


            </div>

            <p class="mobile-about">
                Join the team today! It does not matter where
                you live in the UK, you can become apart of the
                team as with online coaching you can take your
                personalised program with you and I will only be
                a text/phone call away if you have any questions
                or require support. I offer 24/7 support so if you
                have any questions or need any help I will reply
                as soon as I see it!
            </p>

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
        background-image: none; /*url("https://i.ibb.co/LJXvwCk/home-background-scaled.png") */    
        background-repeat: no-repeat;
        background-size: cover;
        background-color: black;
    }

    .hero {
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-top: 200px;
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

    details {
        border: 0px solid #fff;
        width: 100%;
        border-radius: 6px;
        margin-bottom: 10px;
        padding-top: 22px;
        padding-bottom: 22px;
        background-color: #454E9E;
        transition: all 0.5s;
    }

    details:hover {
        opacity: 0.8;
    }

    details p {
        margin-top: 10px;
        margin-bottom: 0px;
        margin-left: 15px;
        margin-right: 15px;
    }

    p {
        text-align: justify;
    }

    summary {
        text-align: justify;
        padding-left: 15px;
        font-weight: 800;
        margin-left: 15px;
        margin-right: 15px;
    }

    .family {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border: 0px solid #fff;
    }

    .group {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        border: 0px solid #fff;
    }

    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50%;
    }

    .image-container img {
        height: 400px;
        box-shadow: inset 0 0 100px black;
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
            margin-top: 1030px;
        }

        .home {
            background-image: url("https://i.ibb.co/3v3j5jy/home-mobile-background.jpg");    
            background-repeat: no-repeat;
            background-size: contain;
            height: calc(100vh - 100px);
        }

        .mobile-about {
            margin-top: 50px;
            margin-bottom: 50px;
        }

        details p {
            font-size: 12px;
        }

        summary {
            font-size: 12px;
            margin-left: 5px;
            margin-right: 5px;
            width: calc(100% - 40px);
        }

        .family {
            flex-wrap: wrap;
        }

        .image-container img {
            height: 200px;
            box-shadow: inset 0 0 100px black;
        }

        .group {
            width: 100%;
        }

        .image-container {
            width: 100%;
        }
    }


</style>