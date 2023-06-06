<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const productImage: string = 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80';
	const productPrice: string = 'R$100,00';
	const productName: string = 'ProdutoX 500ml 1 unidade';
</script>

<div class="product">
	<img class="product__image" src={productImage} alt="" />
	<div class="product__info">
		<p>nome</p>
		<div class="product__info__functions">
			<p class="product_info__value">valor</p>
			<div class="product__info__quantity">
				<p>-</p>
				<p>1</p>
				<p>+</p>
			</div>
		</div>
	</div>
	<div class="product__remove">
		<i class="bi-trash-fill"></i>
	</div>
</div>

<style lang="scss">
  .product {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    height: 7vh;
    width: 100%;
    box-shadow: .3rem .5rem .7rem rgba(black, .2);
    border-radius: 12px;
    margin: 1rem 0;

    &__image {
      width: 20%;
      border-radius: 12px 0 0 12px;
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: .4rem;
      width: 60%;

      &__functions {
        display: flex;
        justify-content: space-between;
      }

      &__value {
        width: 80%;
      }

      &__quantity {
        display: flex;
        justify-content: space-evenly;
        width: 20%;
      }
    }

    &__remove {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20%;
      background-color: red;
      color: white;
      border-radius: 12px;
    }
  }




</style>
