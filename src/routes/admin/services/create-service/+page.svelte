<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import FooterLogo from '../../../../components/FooterLogo.svelte';
	import Header from '../../../../components/Header.svelte';
	import ServiceCard from '../../../../components/ServiceCard.svelte';
	import Request from '../../../../utility/Request.js';
	import Input from '../../../../components/Input.svelte';
	import Button from '../../../../components/Button.svelte';

	const pageTitle: string = 'Alterar serviço';
	const requestService = new Request();
	let serviceName: string;
	let servicePrice: string;
  let productId = Math.floor(Math.random() * 1000000) + 1;

	onMount(async () => {
		document.querySelector('form')?.addEventListener('submit', (e: any) => {
			e.preventDefault();
			const formData = new FormData(e.target);

      createService(formData.get('service-name'), formData.get('service-price'));
		});
    console.log(productId)
	});

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	async function createService(serviceName: any, servicePrice: any) {
		let endpoint = `car-schedule-api/assistance`;
		let headerContentType = 'application/json; charset=UTF-8';
		let body = {serviceType: serviceName, price: servicePrice };

		await requestService.postRequest(endpoint, body, headerContentType);
		goBack();
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
		<form action="">
			<Input
				labelName="Nome do serviço"
				placeholderText="Nome do serviço"
				required={true}
				inputName="service-name"
				inputId="serviceName"
			/>
			<Input
				labelName="Valor do serviço"
				placeholderText="Nome do serviço"
				required={true}
				inputName="service-price"
				inputId="servicePrice"
			/>

			<Button buttonTitle="Criar serviço" buttonIcon="bi-check-circle-fill" />
		</form>
	</main>
</section>

<style lang="scss">
	@import '../../../../styles/global.scss';

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
		}

		&__footer {
			padding: 3rem;
		}
	}
</style>
