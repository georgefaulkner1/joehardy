<script>
    import Nav from "../components/nav.svelte"
</script>


    <slot></slot>

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

</style>