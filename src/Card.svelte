<script>
    import {campaigns} from './data/campaigns';

    export let promotion;
    let {url, campaignID, title, location, show} = promotion;
    
</script>

    <a href={url} target="_blank" title={`Korting ${campaigns[campaignID].name}`} style="display: {show ? "block" : "none"}" class="promotion-link">
        <div class="promotion">
            <div class="promotion-body">
                <div class="logo"><img src={campaigns[campaignID].image} alt={`logo ${campaigns[campaignID].name}`} /></div>
                <div class="promotion-info">
                    <h5 class="promotion-title">{title}</h5>
                    <p class="promotion-text"><i class="fas fa-map-marker"></i>  {location}</p>
                </div>
                <div class="cta">
                    <a href="/"><button><span>Bekijk actie</span></button></a> 
                    <img src="https://wellnesscentrumnederland.nl/wp-content/uploads/2023/07/pijl2.png" alt="Call to action pijl"/>
                </div>
            </div>
        </div>
    </a>

<style>
    /* Changed the .card bootstrap to .promotion with all corresponding elements */
    .promotion-link {
        text-decoration: none;
    }
    .promotion {
        margin: 10px;
        border: dashed 1px #4f4f4f;
    }
    .promotion-body {
        text-decoration: none !important;
        padding: 16px;
    }
    .promotion-info {
        color: black;
    }
    .promotion-text {
        margin-bottom: 0px;
        text-align: center;
    }
    .promotion:hover {
        cursor: pointer;
        text-decoration: underline;
    }
    .promotion-body {
        display: flex;
        align-items: start;
        gap: 1rem;
        justify-content: space-between;
    }
    /* All the button styling and span hover effect */
    .promotion button {
        box-shadow: 0 0 3px #7b7b7b;
        background-color: #f46500;
        border: 2px solid #fff;
        border-radius: 3px;
        font-weight: bold;
        min-width: 140px;
        color: #fff;
        padding: 8px;
    }

    .promotion button span {
        cursor: pointer;
        display: inline-block;
        position: relative;
        transition: 0.5s;
    }

    .promotion button span:after {
        content: "\00bb";
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }

    .promotion button:hover span {
        padding-right: 25px;
    }

    .promotion button:hover span:after {
        opacity: 1;
        right: 0;
    }
    /* On Wellnesscentrumnederland.nl the styles for h5 would otherwise get a lot of margin */
    .promotion h5 {
        margin: 6px 0 4px;
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
    
    .fa-map-marker:before {
        content: "\f041";
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 22px;
        color: #595959;
    }
    
</style>