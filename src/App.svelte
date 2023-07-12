<script>
	import 'bootstrap/dist/css/bootstrap.css';
	
	import mockData from './data/mock-data.js';
	import {wellnessListIDs} from './data/wellnessListIDs.js';
	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';

	let svelteApp = document.getElementById('svelte-app');
	let wellnessID = svelteApp.dataset.wellnessid
	let currentWellness = wellnessListIDs[wellnessID].name;
	console.log('currentWellness: ', currentWellness)

	
	const products = mockData.products; 

	//Data is not consistent for both TradeTracker and Daisycon. That's why make a mapped product array that returns a consistent object of the necessary data
	const mappedProducts = products.map(product => {

		//This IF statement is the case of the Daisycon data from SpaOnline. Make object that's consistent with TradeTracker VakantieVeilingen:
		if(product.hasOwnProperty('update_info')){
			product.campaignID = Number(product.product_info.link.match(/(?<=\?si=)\d+/)[0]);
			product.name = product.product_info.title;
			product.URL = product.product_info.link;
			product.image = product.product_info.images[0].location;
			product.properties = {}
			product.properties.city = product.product_info.keywords;
		} else {
			product.image = product.images[0]
		}
		//Only return the correct data for each product I need
		return {
			title: product.name,
			url: product.URL,
			campaignID: product.campaignID,
			location: product.properties.city,
			image: product.image
		}
	})
</script>

<main>
	<div class="container">
		<h1>Find here the list of all the promotions!</h1>
		<h3>Underneath an overview of the Card1 template:</h3>
		{#each mappedProducts as product}
			<Card title={product.title} url={product.url} campaignID={product.campaignID} location={product.location}/>
		{/each}

		<h3>Underneath an overview of the Card2 template:</h3>
		<div class="card-group">
			{#each mappedProducts as product}
				<Card2 title={product.title} url={product.url} campaignID={product.campaignID} location={product.location} image={product.image}/>
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