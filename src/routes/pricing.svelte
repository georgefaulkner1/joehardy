<script>
    import { fade, fly } from "svelte/transition"
    import { goto } from '$app/navigation'

    import Nav from "../components/nav.svelte"
    import { onMount } from "svelte"

    let ready = false
    onMount(async () => {
        ready = true
    })

    function enquireDirect(){
        goto("/contact")
    }

</script>



<section class="home" id="home">
    {#if ready}
        <div class="hero" in:fly={{ x: -200, duration: 2000 }} out:fade>
            <h2 class="header-title">Pricing</h2>

            <div class="pricing-container">

                <div class="pricing-box face-to-face" in:fade={{ delay: 500 }}>

                    <div class="ind-price-header">
                        <h2>Face to Face</h2>
                    </div>
        
                    <div class="ind-price-value">
                        <p>Starting at</p>
                        <h2>£185<span class="price-small">/ month</span></h2>
                    </div>
        
                    <div class="ind-short-desc">
                        <p>Leicester Based Training</p>
                    </div>
        
        
                    <div class="ind-price-details">
                        <li>Personalised Plan</li>
                        <li>One on One Sessions</li>
                        <li>Nutritional Advice</li>
                        <li>Weekly Check ins</li>
                    </div>
        
                    <div class="ind-price-button">
                        <a href="/contact" class="ind-button">Enquire</a>
                    </div>
        
                </div>
        
                <div class="pricing-box online-coaching" in:fade={{ delay: 1000 }}>
                
                    <div class="ind-price-header">
                        <h2>Online Coaching</h2>
                    </div>
        
                    <div class="ind-price-value">
                        <p>Starting at</p>
                        <h2>£200<span class="price-small">/ month</span></h2>
                    </div>
        
                    <div class="ind-short-desc">
                        <p>A Short Description</p>
                    </div>
        
                    <div class="ind-price-details">
                        <li>Personalised Plan</li>
                        <li>24/7 Support</li>
                        <li>Nutritional Advice</li>
                        <li>Weekly Check ins</li>
                    </div>
        
                    <div class="ind-price-button">
                        <a href="/contact" class="ind-button">Enquire</a>
                    </div>
        
                </div>
        
                <div class="pricing-box nutritional-plan" in:fade={{ delay: 1500 }}>
                    
                    <div class="ind-price-header">
                        <h2>Nutritional Plan</h2>
                    </div>
        
                    <div class="ind-price-value">
                        <p>Starting at</p>
                        <h2>£30<span class="price-small">/ plan</span></h2>
                    </div>
        
                    <div class="ind-short-desc">
                        <p>Abs are made in the Kitchen</p>
                    </div>
        
                    <div class="ind-price-details">
                        <li>Personalised Nutritional Plan</li>
                        <li>24/7 Support</li>
                        <li>Nutritional Advice</li>
                        <li>Weekly Check ins</li>
                    </div>
        
                    <div class="ind-price-button">
                        <a href="/contact" class="ind-button">Enquire</a>
                    </div>
        
                </div>

            </div>

            <div class="family">
                <div class="group">
                    <h2 class="header-title">Reviews</h2>
                    <p>"Joe has really given me the
                        confidence in my abilities, he has
                        motivated and pushed me through
                        my training as well as taught me and
                        gave me loads of tips and tricks. He
                        is so flexible and is always happy to
                        adapt to my schedule. Especially as
                        he's doing online coaching for me.
                        This is really great."</p>
    
                    <p>
                        “Me and my wife over the last 2 years
    have worked with a few Personal
    Trainers; 2 PTs from PureGym and 2
    PTs from GriffinFit. When I started
    looking (yet again) for another PT, I
    wanted to work with some one who's
    really passionate about fitness and
    nutrition and would consistently be a
    friendly voice encouraging you to
    train smart and hard. This is exactly
    what I've found working with Joe, his
    ability to explain the changes your
    body is (and will) go through in the
    middle of the workout is really easy
    to understand. I'd highly recommend
    having Joe as a Personal Trainer
    who'll help ingrain a passion for
    fitness for life.”
                    </p>
    
                    <p>
                        “I've enjoyed working with Joe as a
    personal trainer; he's really
    understanding, motivating and
    supportive. I've definitely seen the
    benefits of online training as it's
    flexible, easy to access and more
    independent for the client; he's made
    sure I've got my plan on time and it's
    personal to me. I've made some
    good progress in the past few weeks
    thanks to Joe and would highly
    recommend his services!”
                    </p>
                </div>

                <div class="image-container">
                    <img src="https://i.ibb.co/0sHDYHV/training.jpg" alt="">
                </div>
                
            </div>

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
        background-size: cover;
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

    .pricing-container {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
    }
    
    .pricing-options {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }

    .pricing-box {
        width: 360px;
        height: 480px;
        border-radius: 22px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
        background-color: #454E9E !important;
        transition: all 0.5s;
    }

    .pricing-box:hover {
        opacity: 0.8;
    }

    .face-to-face {
        background-color: rgb(242, 178, 215);
    }

    .online-coaching {
        background-color: rgb(208, 233, 87);
    }

    .nutritional-plan {
        background-color: rgb(255, 188, 1);
    }

    .ind-price-header {
        width: 300px;
        height: 40px;
        margin-top: 10px;
    }

    .ind-price-value {
        width: 300px;
        margin-top: 40px;
        padding: 0;
    }

    .ind-price-value p, .ind-price-value h2 {
        color: #fff;
    }

    .ind-price-value p {
        font-weight: 600;
        font-size: 16px;
        margin: 0;
        padding: 0;
    }

    .ind-price-value h2 { 
        font-weight: 800;
        font-size: 48px;
        margin: 0;
        padding: 0;
    }

    span.price-small {
        font-size: 16px;
        font-weight: 600;
    }

    .ind-price-header h2 {
        color: #fff;
        font-weight: 600;
        font-size: 20px;
    }

    .ind-short-desc {
        width: 300px;
        margin-top: 20px;
        padding: 0;
    }

    .ind-short-desc p {
        color: #fff;
        font-weight: 600;
        font-size: 16px;
    }

    .ind-price-details {
        width: 300px;
        text-align: left;
    }

    .ind-price-details li {
        color: #fff;
        font-weight: 600;
        font-size: 16px;
        margin-top: 5px;
    }

    .ind-price-button {
        width: 300px;
        margin-top: 40px;
    }

    .ind-button {
        background-color: black;
        padding: 12px 25px;
        border-radius: 8px;
        color: #fff;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        font-size: 16px;
    }

    p {
        text-align: justify;
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
            margin-top: 1020px;
        }

        .home {
            background-color: black !important;  
            background-image: url("https://i.ibb.co/3v3j5jy/home-mobile-background.jpg"); 
            background-repeat: no-repeat;
            background-size: contain;
            height: calc(100vh - 100px);
        }

        .pricing-container {
            width: 100%;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 220px;
        }

        .ind-price-header {
            width: 260px;
            height: 40px;
            margin-top: 10px;
        }

        .ind-price-value {
            width: 260px;
            margin-top: 40px;
            padding: 0;
        }

        .ind-short-desc {
            width: 260px;
            margin-top: 20px;
            padding: 0;
        }

        .ind-price-details {
            width: 260px;
            text-align: left;
        }

        .ind-price-button {
            width: 260px;
            margin-top: 40px;
        }
        
        .pricing-box {
            margin-bottom: 10px;
            width: 300px;
            height: 450px;
        }
        
        .ind-short-desc p {
            color: #fff;
            font-weight: 600;
            font-size: 14px;
        }

        .ind-price-details li {
            color: #fff;
            font-weight: 600;
            font-size: 14px;
            margin-top: 5px;
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