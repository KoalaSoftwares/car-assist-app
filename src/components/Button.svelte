<script lang="ts">
	import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleClick() {
		dispatch('buttonClick');
	}
	export let buttonTitle: string;
	export let buttonIcon: string;
</script>

<button on:click={handleClick} type="submit" class="button">
	<span class="button__title">{buttonTitle}</span>
	<i class="{buttonIcon} button__icon" />
</button>

<style lang="scss">
	$base-color: #719d33;

	.button {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 3rem;
		margin: 0.5rem 0;
		border-radius: 0.8rem;
		border: none;
		background-color: $base-color;
		color: white;

		&__title {
			font-size: 0.9rem;
			font-weight: 800;
			margin-left: 0.5rem;
		}

		&__icon {
			font-size: 1.8rem;
			margin-top: 0.2rem;
			margin-right: 0.5rem;
		}
	}
</style>
