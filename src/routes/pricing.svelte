<script>
    import { fade, fly } from 'svelte/transition';
</script>

<div class="container" in:fade>

    <div class="pricing-header">
        <h1>Pricing</h1>
    </div>

    <div class="pricing-options">

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

</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

    :global(body){
        background-color: black;
        background-image: none;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1, h2, p, li {
        color: #fff;
        font-family: 'Montserrat', sans-serif;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        flex-wrap: wrap;
        width: 1200px;
        margin: 50px auto;
    }

    .pricing-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .pricing-header h1 {
        font-weight: 600;
        font-size: 58px;
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
        height: 440px;
        border-radius: 22px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: flex-start;
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
        color: black;
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
        color: black;
        font-weight: 600;
        font-size: 20px;
    }

    .ind-short-desc {
        width: 300px;
        margin-top: 20px;
        padding: 0;
    }

    .ind-short-desc p {
        color: black;
        font-weight: 600;
        font-size: 16px;
    }

    .ind-price-details {
        width: 300px;
    }

    .ind-price-details li {
        color: black;
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

    /* Small Device */
    @media only screen and (max-width: 768px) {

        .container {
            width: 100%;
        }

        .pricing-options {
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
        }

        .pricing-box {
            margin-bottom: 10px;
        }

    }

</style>