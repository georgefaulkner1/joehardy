<header>
    <nav>
        <a href="/" class="underline-hover">Home</a>
        <a href="/about" class="underline-hover">About</a>
    
        <div class="logo">
            <img src="./hf.png">
        </div>
    
        <a href="/pricing" class="underline-hover">Pricing</a>
        <a href="/contact" class="underline-hover">Contact</a>
    </nav>
</header>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    margin: 0;
}   

nav {
    margin: 0 auto;
    width: 1200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

nav a {
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-weight: 500;
    text-decoration: none;
}

nav .logo img {
    height: 100px;
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

</style>