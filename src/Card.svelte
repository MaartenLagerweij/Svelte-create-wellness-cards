<script>
    import {campaigns} from './data/campaigns';

    export let title;
    export let url;
    export let campaignID;
    export let location;

</script>

<main>
    <a href={url} target="_blank" title={`Korting ${campaigns[campaignID].name}`} class="card-link">
        <div class="card deal">
            <div class="card-body">
                <div class="logo"><img src={campaigns[campaignID].image} alt={`logo ${campaigns[campaignID].name}`} /></div>
                <div class="promotion-info">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{location}</p>
                </div>
                <div class="cta">
                    <a href="/"><button class="btn btn-primary">Bekijk actie</button></a>
                </div>
            </div>
        </div>
    </a>
</main>

<style>
    .card-link {
        text-decoration: none;
    }
    .card {
        margin: 10px;
        border: dashed 1px #4f4f4f;
    }
    .card-body {
        text-decoration: none !important;
    }
    .card:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .card-body {
        display: flex;
        align-items: start;
        gap: 1rem;
        justify-content: space-between;
    }
    .deal button {
        box-shadow: 0 0 3px #7b7b7b;
        background-color: #f46500;
        border: 2px solid #fff;
        border-radius: 3px;
        font-weight: bold;
        min-width: 123px;
    }
    
</style>