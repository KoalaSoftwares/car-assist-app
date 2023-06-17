<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let serviceName: string;
	export let servicePrice: string;
  export let userSchedulesCard: boolean;
  export let serviceDate: string = '';

	const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('cardClick')
  }
</script>

{#if userSchedulesCard == false}
<div on:click={handleClick} on:keypress={handleClick} class="card">
	<h6 class="card__title__label">Serviço</h6>
	<p class="card__title">{serviceName}</p>
	<h6 class="card__label__price">Valor</h6>
	<p class="card__price">{servicePrice}</p>
</div>

{:else}
<div on:click={handleClick} on:keypress={handleClick} class="user__card">
  <div class="user__card__wrapper">
    <h6 class="user__card__wrapper__title__label">Serviço</h6>
    <p class="user__card__wrapper__title">{serviceName}</p>
    <h6 class="user__card__wrapper__label__price">Data</h6>
    <p class="user__card__wrapper__price">{serviceDate}</p>
  </div>
  <p class="user__card__status">FINALIZADO</p>
</div>
{/if}


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

  .user__card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 12vh;
    background-color: $base-color;
    color: white;
    border-radius: 0.8rem;
    box-shadow: 0.2rem 0.4rem 0.6rem rgba(black, 0.4);
    margin-top: 1rem;

    &__wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
  
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

    &__status {
      font-size: 1.1rem;
      font-weight: bold;
      text-align: center;
    }
  }

</style>
