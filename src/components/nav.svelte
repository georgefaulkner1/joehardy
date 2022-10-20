<script>
    import { fade, fly } from "svelte/transition"

    let menu_status = false

    function toggleMenu(){
        let menu = document.querySelector(".drop-down-menu")
        let indMenu = document.querySelectorAll(".ind-menu")
        if(menu_status == true){
            console.log("close")
            menu.style.height = "0px"
            for(let i = 6; i >= 1; i--){
                const self = i - 1
                indMenu[self].style.display = "none"
            }
            return menu_status = false
        }else{
            console.log("open")
            menu.style.height = "480px"

            for(let i = 1; i <= indMenu.length; i++){
                setTimeout(e => {
                    const self = i - 1
                    indMenu[self].style.display = "flex"
                }, i * 100)
            }

            return menu_status = true
        }
    }

    
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<header>
    <nav>
        <a href="/" class="underline-hover">Home</a>
        <a href="/about" class="underline-hover">About</a>
        <a href="/faqs" class="underline-hover">FAQs</a>
    
        <div class="logo">
            <img src="./hf.png" alt="">
        </div>
    
        <a href="/pricing" class="underline-hover">Pricing</a>
        <a href="/contact" class="underline-hover">Contact</a>
        <a href="/store" class="underline-hover">Store</a>

        <div class="mobile-nav">
            <i class="fa fa-bars" on:click={toggleMenu}></i>
        </div>

    </nav>
</header>

<div class="drop-down-menu" out:fade>
    <div class="inner-menu-box">
        <a href="/" class="ind-menu" on:click={toggleMenu}>Home</a>
        <a href="/about" class="ind-menu" on:click={toggleMenu}>About</a>
        <a href="/faqs" class="ind-menu" on:click={toggleMenu}>FAQs</a>
        <a href="/pricing" class="ind-menu" on:click={toggleMenu}>Pricing</a>
        <a href="/contact" class="ind-menu" on:click={toggleMenu}>Contact</a>
        <a href="/store" class="ind-menu" on:click={toggleMenu}>Store</a>
    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;700&display=swap');

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 200px;
    margin: 0;
    position: fixed;
    z-index: 10;
    background-color: black;
}   

nav {
    margin: 0 auto;
    width: 1200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

nav a {
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}

nav .logo {
    width: 200px;
    height: 200px;
}

nav .logo img {
    height: 200px;
    filter: invert(1);
}

.underline-hover {
    display: inline-block;
    position: relative;
}

.underline-hover:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

.underline-hover:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

.mobile-nav {
    display: none;
}

.drop-down-menu {
    display: none;
}

.mobile-nav i {
    color: #fff;
    font-size: 32px;
}

    /* Small Device */
    @media only screen and (max-width: 768px) {
        header {
            position: fixed;
            background-color: black;
            top: 0px;
            height: 100px;
        }

        nav {
            min-width: 100% !important;
            justify-content: space-between !important;
        }

        nav a {
            display: none !important;
        }

        nav .mobile-nav {
            height: 60px;
            width: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 20px;
        }

        nav .logo {
            margin-left: 20px;
        }

        nav .logo img {
            width: 60px !important;
            height: 60px !important;
        }

        .drop-down-menu {
            height: 0px;
            transition: height 0.8s;
            width: 100%;
            background-color: #fff;
            opacity: 0.99;
            position: fixed;
            top: 100px;
            display: block;
            z-index: 11;
        }

        .inner-menu-box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .inner-menu-box a {
            height: 80px;
            display: none;
            align-items: center;
            font-family: 'Poppins', sans-serif;
            color: black;
            font-weight: 500;
            text-decoration: none;
            width: 100%;
            text-align: center;
            justify-content: center;
        }
    }


</style>