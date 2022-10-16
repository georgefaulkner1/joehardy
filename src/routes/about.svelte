<script>
    import { fade, fly } from "svelte/transition"

    import Nav from "../components/nav.svelte"
    import { onMount } from "svelte"

    let ready = false
    onMount(async () => {
        ready = true
    })

</script>



<Nav/>

<section class="home" id="home">
    {#if ready}
        <div class="hero" in:fly={{ x: -200, duration: 2000 }} out:fade>
            <h2>About Me</h2>
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

            
            <h2>FAQs</h2>

            <details>
                <summary>How do you help your clients achieve their fitness goals?</summary>
                <p>I provide my clients with detailed, easy to understand training programmes. I provide 24/7 support (if you ever question, even at 3AM on a Sunday, just ask!), Weekly check ins and so much more!</p>
            </details>

            <details>
                <summary>What's the secret to getting the body of your dreams?</summary>
                <p>Your own mind. Discipline, consistency and the motivation to want to do well in the gym will help you achieve the body of your dreams in no time at all.</p>
            </details>

            <details>
                <summary>What do you love most about your job?</summary>
                <p>I love providing support and help for those who have set themselves a goal to
                    achieve. It is so motivating for me seeing people with dreams and goals and
                    working towards them. I have clients who have been with me for as short as 2
                    weeks and already feel more confident and better about themselves. These types
                    of messages motivates me to help more and more people.</p>
            </details>

            <details>
                <summary>What inspired you to start your own business?</summary>
                <p>I have dreams and goals to start my own gym chain for my clients and starting my
                    gym business is one step in the right direction. The world has become more
                    technologically advanced and if I can provide help to people from sitting at home
                    then I can help so many people. It's only right to start my own business!</p>
            </details>

            <details>
                <summary>Why should our clients choose you?</summary>
                <p>There are lots of online coaches and personal trainer out there. The difference is
                    between me and them is that I can guarantee 99% of online coaches and personal
                    trainers have a bit of interest in the gym and see it is a well paying job. However,
                    with myself I have spent almost half my life in the gym, ever since I was 12 years of
                    age, training, bulking, cutting etc. The gym is all I know! This is the reason why I
                    want to share my knowledge with clients so I can provide the best support
                    possible for them to achieve their goals and dreams as I am just a person trying to
                    achieve mine!
                    </p>
            </details>

            <details>
                <summary>Can you provide your services online or remotely? If so, please add
                    details.</summary>
                <p>I provide online services for everyone in the UK! I am primarily an online coach as i
                    specialise in making and creating personalised training programmes for clients
                    tailored to them!</p>
            </details>

            <details>
                <summary>What changes have you made to keep your customers safe from Covid-
                    19?</summary>
                    <p>Thankfully, as I am an online coach, I can just create programmes for my clients to
                        complete in the comfort of their own home if they do not feel safe in a public gym!</p>
            </details>

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
        padding-top: 8px;
        padding-bottom: 8px;
        background-color: #454E9E;
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
            margin-top: 100px;
            height: calc(100vh - 100px);
        }

        .mobile-about {
            margin-top: 150px;
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
    }


</style>