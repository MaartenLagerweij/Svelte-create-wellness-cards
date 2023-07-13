<script>
    import {campaigns} from './data/campaigns';

    export let promotion;
    let {url, campaignID, title, location, show} = promotion;
    
</script>

     <a href={url} target="_blank" title={`Korting ${campaigns[campaignID].name}`} style="display: {show ? "block" : "none"}" class="card-link"> -->
        <div class="card promotion">
            <div class="card-body">
                <div class="logo"><img src={campaigns[campaignID].image} alt={`logo ${campaigns[campaignID].name}`} /></div>
                <div class="promotion-info">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{location}</p>
                </div>
                <div class="cta">
                    <a href="/"><button>Bekijk actie</button></a> 
                    <img src="https://wellnesscentrumnederland.nl/wp-content/uploads/2023/07/pijl2.png" alt="Call to action pijl"/>
                </div>
            </div>
        </div>
    </a>

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
    .promotion button {
        box-shadow: 0 0 3px #7b7b7b;
        background-color: #f46500;
        border: 2px solid #fff;
        border-radius: 3px;
        font-weight: bold;
        min-width: 136px;
        text-transform: uppercase;
        color: #fff;
    }
    .cta {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .cta img {
        transform: rotate(-40deg) scaleX(-1);
        margin: -4px 0px -10px -40px;
    }
    
</style>