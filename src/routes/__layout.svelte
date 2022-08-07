<script>
    import Nav from "../components/nav.svelte"
</script>

    <Nav/>
    <slot></slot>

<style>
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :global(body) {
        margin: 0 !important;
        height: 100vh !important;
        width: 100vw !important;
    }

    :global(html) {
        min-height: 100vh !important;
        height: 100vh !important;
        width: 100vw !important;
    }

</style>