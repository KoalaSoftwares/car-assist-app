<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let productImage: string;
	export let productName: string;
	export let productPrice: string;
</script>

<div class="product">
	<img class="product__image" src={productImage} alt="" />
	<div class="product__info">
		<p class="product__info__name">{productName}</p>
		<div class="product__info__functions">
			<p class="product__info__value">{`R$ ${productPrice}`}</p>
			<div class="product__info__quantity">
				<p>-</p>
				<p>1</p>
				<p>+</p>
			</div>
		</div>
	</div>
	<div class="product__remove">
		<i class="bi-trash-fill" />
	</div>
</div>

<style lang="scss">
	.product {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		height: 7vh;
		width: 100%;
		box-shadow: 0.3rem 0.5rem 0.7rem rgba(black, 0.2);
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
			padding: 0.4rem;
			width: 60%;

      &__name {
        white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
      }

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
