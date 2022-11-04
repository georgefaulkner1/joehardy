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
            <h2 class="header-title">FAQs</h2>

            <div class="family">
                <details>
                    <summary>How do you help your clients achieve their fitness goals?</summary>
                    <p>I provide my clients with detailed, easy to understand training programmes. I provide 24/7 support (if you ever question, even at 3AM on a Sunday, just ask!), Weekly check ins and so much more!</p>
                </details>
    
                <details>
                    <summary>What's the secret to getting the body of your dreams?</summary>
                    <p>Your own mind. Discipline, consistency and the motivation to want to do well in the gym will help you achieve the body of your dreams in no time at all.</p>
                </details>
            </div>

            <div class="family">
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
            </div>

            <div class="family">
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
                    <summary>Can you provide your services online or remotely?</summary>
                    <p>I provide online services for everyone in the UK! I am primarily an online coach as i
                        specialise in making and creating personalised training programmes for clients
                        tailored to them!</p>
                </details>
            </div>

            <div class="family">
                <details>
                    <summary>What changes have you made to keep your customers safe from Covid-
                        19?</summary>
                        <p>Thankfully, as I am an online coach, I can just create programmes for my clients to
                            complete in the comfort of their own home if they do not feel safe in a public gym!</p>
                </details>
    
                <details>
                    <summary>What does online personal training involve?</summary>
                    <p>Online personal training involves personalised training programmes
                        tailored to you, frequent check ins throughout the week, 24/7
                        support so if you have a question or need any assistance at any time
                        just message me and I'Il get back to you asap!</p>
                </details>
            </div>

            <div class="family">
                <details>
                    <summary>How often will you check in with me?</summary>
                    <p>Very often. We will speak to each-other at least a few times per
                        week to talk about how training is going, how you are feeling etc.
                        Each Sunday evening, I will send you over your program for the next
                        week. The check ins will help with adjusting the program each week
                        if you feel like it is too hard, too easy etc. I will gather this
                        information throughout us communicating in the week.</p>
                </details>

                <details>
                    <summary>Will I need a gym membership?</summary>
                    <p>It will help if you are signed up to a gym or have gym access.
                        However you do not need a gym membership. If you are someone
                        who does not have access to a gym, no need to worry! I will create a
                        plan tailored to your environment so you can still achieve your goals.</p>
                </details>
            </div>

            <div class="family">
                <details>
                    <summary>What if I travel frequently?</summary>
                    <p>If you travel frequently, no need to worry! Online personal training is
                        an ideal fit for these people as they are always on the move so they
                        may not have access to a gym all the time. I am happy to alter the
                        program throughout the week so it suits them best!</p>
                </details>

                <details>
                    <summary>Is my plan customised?</summary>
                    <p>YES! - everybody is different. People have different heights, weights,
                        age, likes, dislikes etc. I do not provide a 'One size fits all' training
                        program as this may work for one person but the same program may
                        be a waste of time. Therefore, all plans are truly personalised to the
                        client so they can get the best out of their training!</p>
                </details>
            </div>

            <div class="family">
                <details>
                    <summary>How will I communicate with you?</summary>
                    <p>We will communicate via WhatsApp as the vast majority of people
                        have and use WhatsApp. The programs will be created on Microsoft
                        word and sent over via email. They are sent over email so the client
                        can keep track of their programs and again, the vast majority of
                        people have an email.</p>
                </details>

                <details>
                    <summary>How will you get back to me?</summary>
                    <p>During normal working hours (9-5) I tend to get back to my clients
                        within 5 minutes as I always have access to my phone. However, if I
                        am in a client consultation or Face to Face training session them
                        replies can take up to an hour. However, 99% of the time, I reply as
                        soon as I see the message which is almost instant. Replies will never
                        be longer than 24 hours. In short, I'll get back to you as quickly as
                        possible!</p>
                </details>
            </div>

            <div class="family">
                <details>
                    <summary>If I sign up today, when will I receive my plan?</summary>
                    <p>Once you are signed up and on the team, you will receive a couple of
                        forms to complete and sign so I can create your plan asap. I will then
                        get your personalised plan created in 72 hours from the point of
                        which you send the forms back.</p>
                </details>

                <details>
                    <summary>How long before I see results?</summary>
                    <p>Everyone is different. However, most of my clients see good
                        progression between 4-6 weeks and it never stops from there.
                        Constant improvements as long as you follow the plans and digest
                        the advice that will be given to you.</p>
                </details>
            </div>

            <div class="family">
                <details>
                    <summary>How often will I need to train?</summary>
                    <p>The majority of my clients train 3 times a week. However, I have
                        some clients that train once a week and I have clients that train 4/5
                        times a week. I would recommend 2-3 times per week starting out
                        and then progressing to 3-4 times a week after you gather some
                        experience and you are into the run of things.</p>
                </details>
                
                <details>
                    <summary>Will anyone else see progression photos?</summary>
                    <p>No. Only you and I will have access to these progression photos. This
                        is apart of the privacy section of the business that all information
                        shared between client and coach stays between the client and coach
                        and will not be in the hands of anyone else. This is what I call I like to
                        call coach-client privilege.</p>
                </details>
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
        width: calc(50% - 10px);
        border-radius: 6px;
        margin-bottom: 10px;
        padding-top: 22px;
        padding-bottom: 22px;
        background-color: #454E9E;
        transition: all 0.5s;
        font-size: 14px;
        height: fit-content;
        min-height: 40px;
    }

    details:hover {
        opacity: 0.8;
    }

    details p {
        margin-top: 10px;
        margin-bottom: 0px;
        margin-left: 15px;
        margin-right: 15px;
        max-width: 400px;
    }

    p {
        text-align: justify;
    }

    summary {
        text-align: left;
        padding-left: 15px;
        padding-right: 15px;
        font-weight: 800;
        margin-left: 15px;
        margin-right: 15px;
        width: 100%;
        max-width: 400px;
    }

    .family {
        width: 100%;
        display: flex;
        justify-content: space-between;
        border: 0px solid #fff;
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
            margin-top: 150px;
        }

        details p {
            font-size: 12px;
        }

        details {
            width: 100%;
            padding-top: 15px;
            padding-bottom: 15px;
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
    }


</style>