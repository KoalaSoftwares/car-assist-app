<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import FooterLogo from '../../../components/FooterLogo.svelte';
	import Header from '../../../components/Header.svelte';
	import ServiceCard from '../../../components/ServiceCard.svelte';
	import Request from '../../../utility/Request.js';
	import { json } from '@sveltejs/kit';
	import Button from '../../../components/Button.svelte';

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
				let fetchResult = {productId: element.id, productName: element.name, productPrice: element.price, productDescription: element.description, imgUrl: element.imgUrl};
				availableServices.push(fetchResult);
			}
		}
		return availableServices;
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function selectService(service: object) {
    localStorage.setItem('SELECTED_PRODUCT', JSON.stringify(service));
		goToPage('admin/products/modify-product');
	}
</script>

<section class="content">
	<Header
		icon={'bi-arrow-left'}
		on:iconClick={() => goBack()}
		headerTitle={pageTitle}
		extraButton={false}
	/>

	<main class="content__cards">
		<h3>Produtos disponíveis</h3>
		{#await fetchApiData() then services}
			{#each services as service}
				<ServiceCard
					userSchedulesCard={false}
					serviceName={service.productName}
					servicePrice={`R$ ${service.productPrice}`}
					on:cardClick={() => selectService(service)}
				/>
			{/each}
		{/await}

    <div class="content__cards__button">
      <Button buttonTitle="Criar Produto" buttonIcon="bi-arrow-right" on:buttonClick={() => goToPage('admin/products/create-product')} />
    </div>
	</main>
</section>

<style lang="scss">
	@import '../../../styles/global.scss';

	.content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 100vh;

		&__cards {
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 1.2rem;

      &__button {
        padding-top: 2rem;
      }
		}

		&__footer {
			padding: 3rem;
		}
	}
</style>
