<script lang="ts">
  import { createEventDispatcher } from 'svelte';

	const productImage: string = 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80';
	const productPrice: string = 'R$100,00';
	const productName: string = 'ProdutoX 500ml 1 unidade';

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
