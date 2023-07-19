//This whole file is used to first receive the data and then create a mappedPromotions array of all promotions that each contains an object with only the necessary data
import {wellnessListIDs} from './wellnessListIDs.js';
import mockData from './mock-data.js';
import spaOnlineDaisyconJSON from './daisycon-spaonline.json';
import vakantieVeilingenTradeTrackerJSON from './vakantieveilingen-tradetracker.json';
console.log('vakantieVeilingenTradeTrackerJSON: ', vakantieVeilingenTradeTrackerJSON)

//Get the <div> of the svelte-app on the active page in order to then get the correct WellnessID to then connect the right promotion to
let svelteAppElement = document.getElementById('svelte-app');
let wellnessID = svelteAppElement.dataset.wellnessid
let currentWellness = wellnessListIDs[wellnessID];

//Output all the data from VakantieVeilingen (TradeTracker data) from the ./vakantieveilingen-tradetracker.json file
//const promotions = vakantieVeilingenTradeTrackerJSON.products

//Output all the data from SpaOnline (Daisycon data) from the ./daisycon-spaonline.json file
//const promotions = spaOnlineDaisyconJSON.datafeed.programs[0].products;

//Get all promotions out of the Mock Data
//const promotions = mockData.products;

//push all the pomotions data from VakantieVeilingen & SpaOnline onto promotions:
const promotions = vakantieVeilingenTradeTrackerJSON.products;
spaOnlineDaisyconJSON.datafeed.programs[0].products.forEach(promotion => promotions.push(promotion));

console.log('promotions: ', promotions);
//Data is not consistent for both TradeTracker and Daisycon. That's why make a mapped promotion array that returns a consistent object of the necessary data
export const mappedPromotions = promotions.map(promotion => {
    let titlePromotion = promotion.name ? promotion.name : promotion.product_info.title
    titlePromotion = titlePromotion.replace(/[\s,-:]/g,"");
    let show = currentWellness["regex"].test(titlePromotion);

    //This IF statement is the case of the Daisycon data from SpaOnline. Make object that's consistent with TradeTracker VakantieVeilingen:
    if(promotion.hasOwnProperty('update_info')){
        promotion.campaignID = Number(promotion.product_info.link.match(/(?<=\?si=)\d+/)[0]);
        promotion.name = promotion.product_info.title;
        promotion.URL = promotion.product_info.link;
        promotion.price = {};
        promotion.oldPrice = promotion.product_info.price_old;
        promotion.price.amount = promotion.product_info.price;
        promotion.image = promotion.product_info.images[0].location;
        promotion.properties = {}
        promotion.properties.city = promotion.product_info.keywords;
    } else {
        //In case there is no old price, like for VakantieVeilingen, set it to null
        promotion.oldPrice = null;
        promotion.image = promotion.images[0]
    }
    //Only return the correct data for each promotion I need
    return {
        campaignID: promotion.campaignID,
        title: promotion.name,
        url: promotion.URL,
        oldPrice: promotion.oldPrice,
        newPrice: promotion.price.amount,
        image: promotion.image,
        location: promotion.properties.city,
        show: show
    }
})

