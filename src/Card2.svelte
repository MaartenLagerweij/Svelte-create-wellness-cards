<script>
    export let image;
    export let title;
    export let url;
    export let campaignID;
    export let location;

    import { campaigns } from "./data/campaigns";
    let logoCampaignURL = campaigns[campaignID].image;
</script>

<div class="card deal">
    <img class="card-img-top" src={image} alt="Card image cap" />
    <div class="card-body" style="background-image: url({logoCampaignURL});">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{location}</p>
    </div>
    <div class="card-footer">
        <a href={url}><button class="btn btn-primary"><span>Bekijk aanbieding</span></button></a>
        <img src="https://wellnesscentrumnederland.nl/wp-content/uploads/2023/07/pijl2.png" alt="Call to action pijl"/>
    </div>
</div>

<style>
    .card {
        margin: 2px;
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
    .card-body {
        background-repeat: no-repeat;
        background-position: left bottom;
        filter: grayscale(100%);
        background-size: auto 40px;
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
        margin-top: -10px;
        margin-right: -30px;
    }
</style>
