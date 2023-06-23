<script lang="ts">
	import Header from '../../components/Header.svelte';
	import { goto } from '$app/navigation';
	import ProductCard from '../../components/ProductCard.svelte';
  import Request from '../../utility/Request';

	const pageTitle: string = 'Produtos';
  const requestService = new Request();

	function goBack(): any {
		history.back();
	}

  async function fetchApiData() {
    let endpoint = 'car-store-api/product';
		let availableServices = [];
		let fetchServices = await requestService.getRequest(endpoint);

		for (const service in fetchServices) {
			if (Object.prototype.hasOwnProperty.call(fetchServices, service)) {
				const element = fetchServices[service];
				let fetchResult = {productId: element.id, imgUrl: element.imgUrl, productPrice: element.price, productName: element.name, productDescription: element.description};
				availableServices.push(fetchResult);
			}
		}
		return availableServices;
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function openProductPage(product: object) {
    localStorage.setItem('SELECTED_PRODUCT', JSON.stringify(product));
		goToPage('store/product-details');
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

    {#await fetchApiData() then products}
      {#each products as product }
      <ProductCard productImage={product.imgUrl} productName={product.productName} productPrice={product.productPrice} on:productClick={() => openProductPage(product)} />
      {/each}
    {/await}

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
