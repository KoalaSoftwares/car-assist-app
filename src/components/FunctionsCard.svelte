<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let cardImage: string;
	export let iconName: string;
	export let cardTitle: string;

	const dispatch = createEventDispatcher();

	function handleIconClick() {
		dispatch('handleClick');
	}
</script>

<div on:click={handleIconClick} on:keypress={handleIconClick} class="card">
	<img class="card__image" src={cardImage} alt="Imagem do card" />
	<div class="card__info">
		<i class="{iconName} card__info__icon" />
		<p class="card__info__title">{cardTitle}</p>
	</div>
</div>

<style lang="scss">
	$base-color: #719d33;

	.card {
		position: relative;
		width: 100%;
		margin-bottom: 1rem;
		color: white;
		font-size: large;
		font-weight: bold;

		&__image {
			width: inherit;
			min-height: 24vh;
			max-height: 24vh;
			border-radius: 16px;
			box-shadow: gray 0.2rem 0.4rem 0.6rem;
		}

		&__info {
			position: absolute;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			bottom: 0.3rem;
			height: 7vh;
			width: 100%;
			background-color: rgba($base-color, 0.7);
			backdrop-filter: blur(2px);
			border-radius: 0 0 16px 16px;

			&__icon {
				font-size: larger;
				padding: 1rem;
			}
		}
	}
</style>
