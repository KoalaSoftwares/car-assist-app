<script lang="ts">
	import Header from '../../../components/Header.svelte';
	import { goto } from '$app/navigation';
	import ProductCard from '../../../components/ProductCard.svelte';
	import Button from '../../../components/Button.svelte';
	import { onDestroy, onMount } from 'svelte';
	import type { Product } from '../../../utility/Interfaces';

	const pageTitle: string = 'Detalhes do Produto';
	let userCart: Array<Object>;
	let selectedProduct: Product = {
    id: '',
		imgUrl: '',
		name: '',
		price: '',
		description: ''
	};

	onMount(() => {
		userCart = JSON.parse(localStorage.getItem('USER_CART') || '[]');
		let productDetails = JSON.parse(localStorage.getItem('SELECTED_PRODUCT') || '{}');
		selectedProduct.id = productDetails.productId;
		selectedProduct.imgUrl = productDetails.imgUrl;
		selectedProduct.name = productDetails.productName;
		selectedProduct.price = productDetails.productPrice;
		selectedProduct.productDescdescriptionription = productDetails.productDescription;
	});

  onDestroy(() => {
    localStorage.removeItem('SELECTED_PRODUCT');
  })

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function addProductToCart(product: Product) {
    userCart.push(product);
    localStorage.setItem('USER_CART', JSON.stringify(userCart));
    alert('Produto Adicionado ao carrinho!');
    userCart = JSON.parse(localStorage.getItem('USER_CART') || '[]');
	}
</script>

<section class="content">
	<Header
		icon={'bi-arrow-left'}
		on:iconClick={() => goBack()}
		headerTitle={pageTitle}
		extraButton={true}
		buttonType="store"
		buttonIcon="bi-bag-fill"
		on:buttonClick={() => goToPage('store/cart')}
	/>

	<main class="content__main">
		<img class="content__main__image" src={selectedProduct.imgUrl} alt="Product" />
		<div>
			<h2 class="content__main__product">{selectedProduct.name}</h2>
			<p class="content__main__price">{`R$ ${selectedProduct.price}`}</p>
		</div>
		<div>
			<h4 class="content__main__title">Sobre o produto</h4>
			<p class="content__main__about">{selectedProduct.description}</p>
		</div>
		<div class="content__main__button">
			<Button buttonIcon="bi bi-arrow-right" buttonTitle="Adicionar ao carrinho" on:buttonClick={() => addProductToCart(selectedProduct)} />
		</div>
	</main>
</section>

<style lang="scss">
	@import '../../../styles/global.scss';

	.content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 100vh;

		&__main {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
			gap: 1.2rem;
			padding: 1.2rem;

			&__image {
				height: 30vh;
				width: 100%;
				border-radius: 12px;
				box-shadow: 0.3rem 0.6rem 0.8rem rgba(black, 0.3);
			}

			&__price {
				font-size: 1.2rem;
			}

			&__title {
				margin-top: 0.4rem;
				margin-bottom: 0.4rem;
			}

			&__button {
				padding-top: 18vh;
			}
		}
	}
</style>
