<script>
    import { fade, fly } from "svelte/transition"

    import Nav from "../components/nav.svelte"
    import { onMount } from "svelte"

    let ready = false
    onMount(async () => {
        ready = true
        //sendMail()
    })

    let name = ""
    let email = ""
    let phone = ""
    let message = "";
    let messagePending = false

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/
        return re.test(email)
    }

    async function sendMail(){
        if(messagePending === false){
            if(validateEmail(email) && name.length > 1 && message.length > 1){
                console.log("Called Mail")
                let res = await fetch("/sendContact", {
                    method: "POST",
                    body: JSON.stringify({
                        name,
                        email,
                        phone,
                        message
                    })
                })
                
                messagePending = true

                const json = await res.json()
                const result = JSON.stringify(json)

                if(result){
                    messagePending = false
                    if(result.body.sent == "Confirmed"){
                        alert("Message Sent!")
                    }
                }

                console.log(result)
            }else{
                console.log(validateEmail(email))
                console.log("Requirements not met")
                messagePending = false
            }   
        }
    }

</script>



<section class="home" id="home">
    {#if ready}
        <div class="hero" in:fly={{ x: -200, duration: 2000 }} out:fade>
            <h2 class="header-title">Contact me!</h2>
            <p>Want more information? Get in touch below.</p>

            <div class="email-contact">
                <div class="inputBox">
                    <label>Name *</label>
                    <input type="text" id="nameInput" bind:value={name}/>
                </div>

                
                <div class="inputBox">
                    <label>Email *</label>
                    <input type="text" id="emailInput" bind:value={email}/>
                </div>

                
                <div class="inputBox">
                    <label>Mobile number</label>
                    <input type="number" id="mobileNumberInput" bind:value={phone}/>
                </div>

                <div class="inputBox">
                    <label>Message *</label>
                    <textarea id="messageInput" bind:value={message}></textarea>
                </div>

                <button on:click={sendMail}>Send message</button>

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
        width: 100%;
        height: 50px;
        border: 2px solid #fff;
        background: none;
        color: #fff;
        font-size: 18px;
        font-weight: 600;
        line-height: 0;
        transition: background-color 1s, color 1s;
    }

    .hero button:hover {
        color: #fff;
        background-color: #454E9E;
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

    .inputBox {
        width: 800px;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
    }

    .inputBox label {
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
        color: #fff;
        margin-bottom: 5px;
    }

    .inputBox input, .inputBox textarea {
        width: 800px;
        height: 50px;
        border: none;
        outline: none;
        padding-left: 10px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    }

    .inputBox textarea {
        height: 100px;
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

        .inputBox {
            width: 100%;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }

        .inputBox label {
            font-family: 'Poppins', sans-serif;
            font-size: 12px;
            color: #fff;
            margin-bottom: 5px;
        }

        .inputBox input, .inputBox textarea {
            width: 100%;
            height: 50px;
            border: none;
            outline: none;
            padding-left: 10px;
            font-family: 'Poppins', sans-serif;
            font-size: 14px;
            border-radius: 0px;
        }
    }


</style>