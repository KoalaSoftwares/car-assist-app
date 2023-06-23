<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import FooterLogo from '../../../components/FooterLogo.svelte';
	import Header from '../../../components/Header.svelte';
	import ServiceCard from '../../../components/ServiceCard.svelte';
	import Request from '../../../utility/Request.js';
	import { json } from '@sveltejs/kit';
	import Button from '../../../components/Button.svelte';

	const pageTitle: string = 'Serviços';
	const requestService = new Request();

	function goBack(): any {
		history.back();
	}

	async function fetchApiData() {
    let endpoint = 'car-schedule-api/assistance';
		let availableServices = [];
		let fetchServices = await requestService.getRequest(endpoint);

		for (const service in fetchServices) {
			if (Object.prototype.hasOwnProperty.call(fetchServices, service)) {
				const element = fetchServices[service];
				let fetchResult = {serviceId: element.id, serviceName: element.serviceType, servicePrice: element.price };
				availableServices.push(fetchResult);
			}
		}
		return availableServices;
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function selectService(service: object) {
    localStorage.setItem('SELECTED_SERVICE', JSON.stringify(service));
		goToPage('admin/services/modify-service');
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
		<h3>Serviços disponíveis</h3>
		{#await fetchApiData() then services}
			{#each services as service}
				<ServiceCard
					userSchedulesCard={false}
					serviceName={service.serviceName}
					servicePrice={`R$ ${service.servicePrice}`}
					on:cardClick={() => selectService(service)}
				/>
			{/each}
		{/await}

    <div class="content__cards__button">
      <Button buttonTitle="Criar serviço" buttonIcon="bi-arrow-right" on:buttonClick={() => goToPage('admin/services/create-service')} />
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
