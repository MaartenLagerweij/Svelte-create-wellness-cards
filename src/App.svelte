<script>
	import 'bootstrap/dist/css/bootstrap.css';
	
	//Load the promotion data and map each promotion into a universal object that could be used to create each Card
	import { mappedPromotions } from './data/createPromotionData';

	import Card from './Card.svelte';
	import Card2 from './Card2.svelte';
	
	console.log('mappedPromotions: ', mappedPromotions)
</script>

<main>
	<div class="container">
		<h1>Find here the list of all the promotions!</h1>
		<h3>Underneath an overview of the Card1 template:</h3>
		{#each mappedPromotions as promotion}
			<Card {promotion}/>
		{/each}

		<h3>Underneath an overview of the Card2 template:</h3>
		<div class="card-group">
			{#each mappedPromotions as promotion}
				<Card2 {promotion}/>
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