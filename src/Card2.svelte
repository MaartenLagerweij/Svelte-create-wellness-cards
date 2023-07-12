<script>
    export let promotion;

    import { campaigns } from "./data/campaigns";
    let logoCampaignURL = campaigns[promotion.campaignID].image;
</script>

<div class="card deal">
    <div class="img-wrapper">
        <img class="card-img-top" src={promotion.image} alt={`Bekijk de promotie ${promotion.title}`} />
    </div>
    <div class="card-body" style="background-image: url({logoCampaignURL});">
        <h5 class="card-title">{promotion.title}</h5>
        <p class="card-text">{promotion.location}</p>
    </div>
    <div class="card-footer">
        <a href={promotion.url}>
            <div class="button-container">
                <button class="btn btn-primary svelte-129k69g"><span class="svelte-129k69g">Bekijk aanbieding</span></button>
                <img src="https://wellnesscentrumnederland.nl/wp-content/uploads/2023/07/pijl2.png" alt="Call to action pijl" class="svelte-129k69g">
            </div>
        </a>
    </div>
</div>

<style>
    .card {
        margin: 2px;
    }
    .card-body {
        background-repeat: no-repeat;
        background-position: left bottom;
        filter: grayscale(100%);
        background-size: auto 40px;
    }
    .img-wrapper {
        height: 150px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card-img-top {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .deal button {
        box-shadow: 0 0 3px #7b7b7b;
        background-color: #f46500;
        border: 2px solid #fff;
        border-radius: 3px;
        font-weight: bold;
        min-width: 123px;
        margin: 10px 0px;
    }

    .deal button {
        display: inline-block;
    }

    .deal button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    .deal button span:after {
        content: "\00bb";
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    .deal button:hover span {
        padding-right: 25px;
    }

    .deal button:hover span:after {
        opacity: 1;
        right: 0;
    }
    .deal .card-footer img {
        transform: rotate(45deg);
        margin: -10px -30px -8px 0px;
    }
    .button-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
