<script>

    import { createEventDispatcher } from "svelte";

    //import the campaigns so that they can be printed in the options
    import {campaigns} from './data/campaigns';
    import {wellnessListIDs} from './data/wellnessListIDs';
    import { numPromotionsForFilter } from './data/createPromotionData';
    import { mappedPromotions } from './data/createPromotionData';

    mappedPromotions.forEach(promotion => {
        Object.entries(wellnessListIDs).map(wellness => {
            if(wellness[1].regex.test(promotion.title)){
                wellness[1].numPromotions += 1
            }
            return wellness
        })
    })
    
    const dispatch = createEventDispatcher();
    
    const campaignsArray = Object.entries(campaigns);
    let wellnessArray = Object.entries(wellnessListIDs);
    //to sort the wellness centres inside the Filter, starting with the ones that have promotions
    wellnessArray.sort((a,b) => b[1].numPromotions - a[1].numPromotions)

    let selectedCampaignID;
    let selectedWellness;
    
    $: {
        dispatch('filter', {
            campaignID: selectedCampaignID,
            wellness: selectedWellness,
        });
    }

</script>
<div class="filter">
    <label>
        <b>Selecteer een campagne:</b>
        <select class="form-select" bind:value={selectedCampaignID}>
            <option value="all">Alle ({numPromotionsForFilter.all})</option>
            {#each campaignsArray as [campaignID, {name}]}
                <option value={campaignID}>{name} ({numPromotionsForFilter[name]})</option>
            {/each}
        </select>
    </label>
    
    <label>
        <b>Selecteer een wellness:</b>
        <select class="form-select" bind:value={selectedWellness}>
            <option value="all">Alle</option>
            {#each wellnessArray as [name,{numPromotions}]}
                <option value={name}>{name} ({numPromotions})</option>
            {/each}
        </select>
    </label>
</div>

<style>
    .filter {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 10px 5px;
        border-bottom: 1px solid grey;
        padding: 10px 5px;
    }
    @media only screen and (max-width: 640px) {
		/* Somehow couldn't overwrite the other style where the max with stays on 240px with a smaller screen for main */
        .filter {
            flex-direction: column;
        }
	}
</style>