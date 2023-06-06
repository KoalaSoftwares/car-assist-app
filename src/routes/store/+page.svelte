<script lang="ts">
	import Header from '../../components/Header.svelte';
	import { goto } from '$app/navigation';
	import ProductCard from '../../components/ProductCard.svelte';

	const pageTitle: string = 'Produtos';

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function openProductPage() {
		console.log('Click');
		goToPage('schedule');
	}

	function addProductToCart() {
		console.log('Click');
		goToPage('schedule');
	}

	function removeProductToCart() {
		console.log('Click');
		goToPage('schedule');
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

	<main class="content__wrapper">
		<ProductCard on:productClick={() => goToPage('store/product-details')} />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
		<ProductCard />
	</main>
</section>

<style lang="scss">
	@import '../../styles/global.scss';

	.content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 100vh;

		&__wrapper {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1.2rem;
			padding: 1.2rem;
		}
	}
</style>
