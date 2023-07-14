//This whole file is used to first receive the data and then create a mappedPromotions array of all promotions that each contains an object with only the necessary data
import {wellnessListIDs} from './wellnessListIDs.js';
import mockData from './mock-data.js';
import spaOnlineDaisyconJSON from './daisycon-spaonline.json';
console.log('spaOnlineDaisyconJSON: ', spaOnlineDaisyconJSON)

//Get the <div> of the svelte-app on the active page in order to then get the correct WellnessID to then connect the right promotion to
let svelteAppElement = document.getElementById('svelte-app');
let wellnessID = svelteAppElement.dataset.wellnessid
let currentWellness = wellnessListIDs[wellnessID];

//Get all promotions out of the Mock Data
const promotions = mockData.products;

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
        promotion.image = promotion.product_info.images[0].location;
        promotion.properties = {}
        promotion.properties.city = promotion.product_info.keywords;
    } else {
        promotion.image = promotion.images[0]
    }
    //Only return the correct data for each promotion I need
    return {
        title: promotion.name,
        url: promotion.URL,
        campaignID: promotion.campaignID,
        location: promotion.properties.city,
        image: promotion.image,
        show: show
    }
})

