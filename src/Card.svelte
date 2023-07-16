<script>
    import {campaigns} from './data/campaigns';

    export let promotion;
    let {url, campaignID, title, location, oldPrice, newPrice, show} = promotion;
    let discount;

    function numToEuroString(num){
        return /\./.test(num.toString()) ? "€"+num.toString().replace(".",",") : "€"+num+",-"
    }

    if(campaignID == 4179 && newPrice == 1) newPrice = "v.a. €1,-"
    if(campaignID == 11136) {
        discount = Math.round((newPrice-oldPrice)/oldPrice*100)*-1
        discount = discount+'% korting!';
        oldPrice = numToEuroString(oldPrice);
        newPrice = numToEuroString(newPrice);
    };
    if(/\|/.test(location))location = location.replace(/\|.*/,"");

    //style="display: {show ? "block" : "none"}"
</script>

    <a href={url} target="_blank" title={`Korting ${campaigns[campaignID].name}`}  class="promotion-link">
        <div class="promotion">
            <div class="promotion-body">
                <div class="logo"><img src={campaigns[campaignID].image} alt={`logo ${campaigns[campaignID].name}`} /></div>
                <div class="promotion-info">
                    <h5 class="promotion-title">{title}</h5>
                    <div class="extra-info">
                        <p class="promotion-text"><i class="fas fa-map-marker"></i>  {location}</p>
                        <div class="price-info">
                            <div class="old">
                                {oldPrice ? oldPrice : ""}
                            </div>
                            <div class="newDiscount">
                                <div class="new" style={campaignID == 11136 ? 'background-color: transparent': ''}>
                                    {newPrice}
                                </div>
                                <div class={campaignID == 11136 ? 'discount' : ''}>
                                    {discount?discount:""}
                                </div>
                            </div>
                        </div>
                    </div>
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
    .logo {
        max-width: 105px;
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
        align-items: center;
        gap: 1rem;
        justify-content: space-between;
    }
    .promotion .extra-info {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 2rem;
    }
    .promotion .price-info {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }
    .promotion .price-info .new {
        color: #06a306;
        font-size: 1.15rem;
        font-weight: 600;
        background-color: #cfeccf;
        padding: 3px 10px;
        border-radius: 5%;
        text-decoration: underline;
    }
    .promotion .price-info .old {
        font-size: 0.9rem;
        text-decoration: line-through;
        color: #626262;
    }
    .promotion .price-info .newDiscount .discount {
        font-size: 1.1rem;
        font-weight: 500;
        background-color: #cfeccf;
        padding: 3px 7px;
        border-radius: 5%;
        color: #06a406;
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