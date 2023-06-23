<script lang="ts">
  import { createEventDispatcher } from 'svelte';

	export let productImage: string = '';
	export let productPrice: string = '';
	export let productName: string = '';

  const dispatch = createEventDispatcher();

  function handleIconClick() {
    dispatch('productClick');
  }
</script>

<div class="product" on:click={handleIconClick} on:keypress={handleIconClick}>
	<img class="product__image" src={productImage} alt="Product" />

	<div class="product__info">
		<p class="product__info__price">{productPrice}</p>
		<p class="product__info__name">{productName}</p>
	</div>
</div>

<style lang="scss">
	.product {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 24vh;
		width: 42vw;
		box-shadow: 0.4rem 0.6rem 0.8rem rgba(black, 0.2);
		border-radius: 12px;

    &__image {
      min-height: 17vh;
      max-height: 17vh;
      max-width: auto;
    }

		&__info {
			padding: 0.4rem;

			&__price {
				font-size: large;
				font-weight: bold;
			}

			&__name {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}
</style>
