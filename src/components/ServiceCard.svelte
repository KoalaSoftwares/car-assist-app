<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let serviceName: string;
	export let servicePrice: string;

	const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('cardClick')
  }
</script>

<div on:click={handleClick} on:keypress={handleClick} class="card">
	<h6 class="card__title__label">Serviço</h6>
	<p class="card__title">{serviceName}</p>
	<h6 class="card__label__price">Valor</h6>
	<p class="card__price">{servicePrice}</p>
</div>

<style lang="scss">
	$base-color: #719d33;

	.card {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		min-height: 8vh;
		background-color: $base-color;
		color: white;
		border-radius: 0.8rem;
		box-shadow: 0.2rem 0.4rem 0.6rem rgba(black, 0.4);
		margin-top: 1rem;

		&__title__label {
			grid-column-start: 1;
			grid-row-start: 1;
			margin-left: 1.2rem;
			text-align: start;
			font-weight: bold;
		}

		&__title {
			grid-column-start: 1;
			text-align: start;
			margin-left: 1.2rem;
			grid-row-start: 2;
		}

		&__label__price {
			grid-column-start: 2;
			grid-row-start: 1;
			margin-right: 1.2rem;
			text-align: end;
			font-weight: bold;
		}

		&__price {
			grid-column-start: 2;
			grid-row-start: 2;
			margin-right: 1.2rem;
			text-align: end;
		}
	}
</style>
