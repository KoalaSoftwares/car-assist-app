<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import FooterLogo from '../../../../components/FooterLogo.svelte';
	import Header from '../../../../components/Header.svelte';
	import ServiceCard from '../../../../components/ServiceCard.svelte';
	import Request from '../../../../utility/Request.js';
	import Input from '../../../../components/Input.svelte';
	import Button from '../../../../components/Button.svelte';

	const pageTitle: string = 'Alterar agendamento';
	const requestService = new Request();
	let scheduleId: string;
	let serviceName: string;
	let servicePrice: string;
	let clientName: string;
	let clientVehicle: string;
	let scheduleStatus: string;
	let scheduleDate: string;
	let submitAction: string;

	onMount(async () => {
		document.querySelector('form')?.addEventListener('submit', (e: any) => {
			e.preventDefault();
			const formData = new FormData(e.target);

			if (submitAction == 'modify') {
				modifyService(
					formData.get('service-name'),
					formData.get('service-price'),
					formData.get('client-name'),
					formData.get('client-vehicle'),
					formData.get('schedule-status'),
          scheduleDate
				);
			}

			if (submitAction == 'delete') {
				deleteService();
			}
		});

		let selectedSchedule = JSON.parse(localStorage.getItem('SELECTED_SCHEDULE') || '{}');
		scheduleId = selectedSchedule.scheduleId;
		serviceName = selectedSchedule.serviceType;
		servicePrice = selectedSchedule.servicePrice;
		clientName = selectedSchedule.clientName;
		clientVehicle = selectedSchedule.clientCar;
		scheduleStatus = selectedSchedule.status;
    scheduleDate = selectedSchedule.date;

		let serviceNameDom: any = document.querySelector('#serviceName')!;
		serviceNameDom.value = serviceName;
		let servicePriceDom: any = document.querySelector('#servicePrice')!;
		servicePriceDom.value = servicePrice;
		let clientNameDom: any = document.querySelector('#clientName')!;
		clientNameDom.value = clientName;
		let clientVehicleDom: any = document.querySelector('#clientVehicle')!;
		clientVehicleDom.value = clientVehicle;
		let scheduleStatusDom: any = document.querySelector('#scheduleStatus')!;
		scheduleStatusDom.value = scheduleStatus;
	});

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	async function modifyService(
		serviceName: any,
		servicePrice: any,
		clientName: any,
		clientCar: any,
		scheduleStatus: any,
		scheduleDate: any
	) {
		let endpoint = `car-schedule-api/schedule/${scheduleId}`;
		let headerContentType = 'application/json; charset=UTF-8';
		let body = {
			serviceType: serviceName,
			price: servicePrice,
			clientName: clientName,
			clientCar: clientCar,
			status: scheduleStatus,
      date: scheduleDate
		};

		await requestService.putRequest(endpoint, body, headerContentType);
		goBack();
	}

	async function deleteService() {
		let endpoint = `car-schedule-api/schedule/${scheduleId}`;
		let body = {};

		requestService.deleteRequest(endpoint, body);
    alert('Agendamento deletado!');
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
			<Input
				labelName="Nome do cliente"
				placeholderText="Nome do Cliente"
				required={true}
				inputName="client-name"
				inputId="clientName"
			/>
			<Input
				labelName="Veículo do cliente"
				placeholderText="Veículo do cliente"
				required={true}
				inputName="client-vehicle"
				inputId="clientVehicle"
			/>
			<Input
				labelName="Estado do agendamento"
				placeholderText="Estado do agendamento"
				required={true}
				inputName="schedule-status"
				inputId="scheduleStatus"
			/>

			<div class="content__cards__buttons">
				<Button
					buttonTitle="Alterar agendamento"
					buttonIcon="bi-wrench"
					on:buttonClick={() => (submitAction = 'modify')}
				/>
				<Button
					buttonTitle="Deletar agendamento"
					buttonIcon="bi-trash"
					on:buttonClick={() => (submitAction = 'delete')}
				/>
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
