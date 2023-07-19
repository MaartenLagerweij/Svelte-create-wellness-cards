<script>

    import { createEventDispatcher } from "svelte";

    //import the campaigns so that they can be printed in the options
    import {campaigns} from './data/campaigns';
    import {wellnessListIDs} from './data/wellnessListIDs';

    
    const dispatch = createEventDispatcher();
    
    const campaignsArray = Object.entries(campaigns);
    const wellnessArray = Object.entries(wellnessListIDs);

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
            {#each campaignsArray as [campaignID, {name}]}
                <option value={campaignID}>{name}</option>
            {/each}
        </select>
    </label>
    
    <label>
        <b>Selecteer een wellness:</b>
        <select class="form-select" bind:value={selectedWellness}>
            {#each wellnessArray as [, {name}]}
                <option value={name}>{name}</option>
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
    @media only screen and (max-width: 600px) {
		/* Somehow couldn't overwrite the other style where the max with stays on 240px with a smaller screen for main */
        .filter {
            flex-direction: column;
        }
	}
</style>