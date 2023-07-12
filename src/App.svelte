<script>
	import 'bootstrap/dist/css/bootstrap.css';
	
	import mockData from './data/mock-data.js';
	import {wellnessListIDs} from './data/wellnessListIDs.js';
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';

	let svelteAppElement = document.getElementById('svelte-app');
	let wellnessID = svelteAppElement.dataset.wellnessid
	let currentWellness = wellnessListIDs[wellnessID];
	
	const promotions = mockData.products;

	//Data is not consistent for both TradeTracker and Daisycon. That's why make a mapped product array that returns a consistent object of the necessary data
	const mappedPromotions = promotions.map(promotion => {
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
		//Only return the correct data for each product I need
		return {
			title: promotion.name,
			url: promotion.URL,
			campaignID: promotion.campaignID,
			location: promotion.properties.city,
			image: promotion.image,
			show: show
		}
	})
	console.log('mappedPromotions: ', mappedPromotions)
</script>

<main>
	<div class="container">
		<h1>Find here the list of all the promotions!</h1>
		<h3>Underneath an overview of the Card1 template:</h3>
		{#each mappedPromotions as promotion}
			<Card title={promotion.title} url={promotion.url} campaignID={promotion.campaignID} location={promotion.location}/>
		{/each}

		<h3>Underneath an overview of the Card2 template:</h3>
		<div class="card-group">
			{#each mappedPromotions as promotion}
				<Card2 title={promotion.title} url={promotion.url} campaignID={promotion.campaignID} location={promotion.location} image={promotion.image}/>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	.container {
		max-width: 750px;
	}
</style>