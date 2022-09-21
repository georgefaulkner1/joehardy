<script>
    import Nav from "../components/nav.svelte"
    import { onMount } from "svelte"

    /*
    onMount( async () => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
                console.log(entry)
                //console.log(`${entry.target.classList} - `)
                if(entry.isIntersecting){
                    entry.target.classList.add("show")
                }else{
                    entry.target.classList.remove("show")
                }
            })
        })

        const hiddenElements = document.querySelectorAll(".hidden")
        hiddenElements.forEach((el) => observer.observe(el))
    })
    */

    onMount(async () => {
        animateOpening()
    })

    function animateOpening(){
        document.querySelector(".opening").classList.add("showOpening")
    }

</script>



<Nav/>

<section class="home" id="home">
    <div class="hidden opening">
        <h2>Discover your Potential, the Hardy way!</h2>
        <h1>Personal training, Online Programs & Nutritional plans</h1>
        <button>Discover your Potential</button>
    </div>
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
    }

    section {
        display: grid;
        place-items: center;
        align-content: center;
        height: 100vh;
    }

    .home {
        background-image: url("https://wallpapercave.com/wp/wp7353778.jpg");    
        background-repeat: no-repeat;
        background-size: cover;
    }

    .opening {
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .opening button {
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

    .opening button:hover {
        color: black;
        background-color: #fff;
    }

    .opening h1, .opening h2 {
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

    :global(.showOpening) {
        opacity: 1 !important;
        filter: blur(0) !important;
        transform: translateX(0) !important;
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

        .opening {
            max-width: 300px;
        }
    }


</style>