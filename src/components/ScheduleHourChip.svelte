<script lang="ts">
	import { each } from 'svelte/internal';

	const rates: any = document.getElementsByName('hour');
  let selectedHour: number;
	const availableHours: Array<Object> = [
		{
			id: 0,
			hour: '10:00'
		},
		{
			id: 1,
			hour: '12:00'
		},
		{
			id: 2,
			hour: '13:30'
		},
		{
			id: 3,
			hour: '15:00'
		}
	];

	
	function selectScheduleHour() {
    let selected = document.getElementById(`${selectedHour}`)?.parentElement;
    selected?.classList.remove('chips__wrapper--selected');
		for (let i = 0; i < rates.length; i++) {
			if (rates[i].checked) {
				selectedHour = rates[i].id;
        let selected = document.getElementById(`${selectedHour}`)?.parentElement;
        selected?.classList.add('chips__wrapper--selected');
				break;
			}
		}
	}
</script>

<section class="chips">
	{#each availableHours as hour, index (hour.id)}
		<div class="chips__wrapper">
			<input on:click={selectScheduleHour} type="radio" id={hour.id} name="hour" />
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
		margin: 0 0 1rem 0;

		&__wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 5vh;
			width: 16vw;
			margin: 0.2rem;
			border: 1px solid black;
			border-radius: 8px;

      &--selected {
        background-color: green;
      }
		}

		//   input[type="radio"] {
		//   /* Add if not using autoprefixer */
		//   -webkit-appearance: none;
		//   appearance: none;
		//   /* For iOS < 15 to remove gradient background */
		//   background-color: #fff;
		//   /* Not removed via appearance */
		//   margin: 0;
		// }
	}

  .active {
    background-color:  $base-color;
  }
</style>
