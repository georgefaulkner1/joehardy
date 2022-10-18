<script>
    import Nav from "../components/nav.svelte"
</script>



    <Nav/>
    <div class="container">
        <div class="inner-container">
            <slot></slot>
        </div>
    </div>

<style>
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(body) {
        -ms-overflow-style: none; /* for Internet Explorer, Edge */
        scrollbar-width: none; /* for Firefox */
        overflow-y: scroll; 
    }

    :global(body::-webkit-scrollbar) {
        display: none; /* for Chrome, Safari, and Opera */
    }

    .container {
        width: 100%;
        display: flex;
        justify-content: center;
        top: 200px;
        height: 100%;
        border: 0px solid #fff;
        position: absolute;
    }

    .inner-container {
        width: 1200px;
        border: 0px solid #fff;
        height: 100%;
    }

    :global(.home) {
        background-image: url("https://i.ibb.co/LJXvwCk/home-background-scaled.png");    
        background-repeat: no-repeat;
        background-size: contain !important;
    }

    :global(.hero) {
        margin-top: 0px !important;
        max-width: 100% !important;
    }

    :global(.header-title) {
        margin-top: 20px !important;
        margin-bottom: 20px !important;
    }
    
    :global(section) {
        align-content: baseline !important;
    }

    :global(.index) {
        margin-top: 100px !important;
    }

    /* Small Device */
    @media only screen and (max-width: 768px) {
        .inner-container {
            width: calc(100% - 60px);
            border: 0px solid #fff;
            height: 100%;
        }

        .container {
            width: 100%;
            display: flex;
            justify-content: center;
            top: 100px;
            height: 100%;
            border: 0px solid #fff;
            position: absolute;
        }

        :global(.header-title) {
            max-width: 300px;
        }

        :global(.hero) {
            margin-top: 0px !important;
            max-width: 100% !important;
        }

        :global(.index) {
            margin-top: 140px !important;
        }

    
    }

</style>