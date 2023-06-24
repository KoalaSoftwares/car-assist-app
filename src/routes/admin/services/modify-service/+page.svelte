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
  let serviceId: string;
  let submitAction: string;

	onMount(async () => {
		document.querySelector('form')?.addEventListener('submit', (e: any) => {
			e.preventDefault();
			const formData = new FormData(e.target);

      if (submitAction == 'modify') {
        modifyService(formData.get('service-name'), formData.get('service-price'));
      }

      if (submitAction == 'delete') {
        deleteService(formData.get('service-name'), formData.get('service-price'));
      }
		});

    let selectedService = JSON.parse(localStorage.getItem('SELECTED_SERVICE') || '{}');
    serviceId = selectedService.serviceId;
    serviceName = selectedService.serviceName;
    servicePrice = selectedService.servicePrice

    let serviceNameDom: any = document.querySelector('#serviceName')!;
    serviceNameDom.value = serviceName;
    let servicePriceDom: any = document.querySelector('#servicePrice')!;
    servicePriceDom.value = servicePrice;
    
	});

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

  async function modifyService(serviceName: any, servicePrice: any) {
    let endpoint = `car-schedule-api/assistance/${serviceId}`;
    let headerContentType = 'application/json; charset=UTF-8';
    let body = {id: serviceId, serviceType: serviceName, price: servicePrice};

    await requestService.putRequest(endpoint, body, headerContentType)
    goBack();
  }

  async function deleteService(serviceName: any, servicePrice: any) {
    let endpoint = `car-schedule-api/assistance/${serviceId}`;
    let body = {serviceType: serviceName, price: servicePrice};

    requestService.deleteRequest(endpoint, body);
    alert('Serviço deletado!');
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
  
      <div class="content__cards__buttons">
        <Button buttonTitle="Alterar serviço" buttonIcon="bi-wrench" on:buttonClick={() => submitAction = 'modify'} />
        <Button buttonTitle="Deletar Serviço" buttonIcon="bi-trash"  on:buttonClick={() => submitAction = 'delete'} />
      </div>
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

      &__buttons {
      display: flex;
      gap: 1rem;
    }
		}

		&__footer {
			padding: 3rem;
		}

	}
</style>
