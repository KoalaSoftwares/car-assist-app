<script lang="ts">
	import { each, onMount } from 'svelte/internal';

	export let selectedHour: number;
  export let required: boolean;
  export let inputName: string;
  export let availableHours: Array<any>;

	let rates: any;

	onMount(() => {
		rates = document.getElementsByName(inputName);
	});

	function selectScheduleHour() {
		for (let i = 0; i < rates.length; i++) {
			if (rates[i].checked) {
				selectedHour = rates[i].id;
				break;
			}
		}
	}
</script>

<section class="chips">
	{#each availableHours as hour, index (hour.id)}
		<div class="chips__wrapper">
			<input {required} bind:value={selectedHour} on:click={selectScheduleHour} type="radio" id={hour.id} name={inputName} />
			<label for="hour">{hour.hour}</label>
		</div>
	{/each}
</section>

<style lang="scss">
	$base-color: #719d33;
	.chips {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: start;

		&__wrapper {
			display: flex;
			color: black;
			align-items: center;
			justify-content: center;
			height: 4vh;
			width: 16vw;
			margin: 0.3rem;
			border: 1px solid black;
			border-radius: 8px;
		}
	}
</style>
