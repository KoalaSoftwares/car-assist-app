<script lang="ts">
	import { goto } from '$app/navigation';
	import { beforeUpdate, onMount } from 'svelte';
	import Header from '../../../components/Header.svelte';
	import Button from '../../../components/Button.svelte';
	import Request from '../../../utility/Request.js';

	let scheduleInfo: any;
	const requestService = new Request();

	beforeUpdate(() => {
		scheduleInfo = JSON.parse(localStorage.getItem('USER_SCHEDULE') || '');
	});

	onMount(async () => {
		document.querySelector('form')?.addEventListener('submit', (e: any) => {
			e.preventDefault();
			const formData = new FormData(e.target);
		});
	});

	async function scheduleService() {
		let endpoint = 'schedule';
    let headerContentType = 'application/json; charset=UTF-8';
    let postServiceSchedule = await requestService.postRequest(endpoint, scheduleInfo, headerContentType);
    console.log(postServiceSchedule);

    goToPage('services/user-schedules');
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function goBack(): any {
		history.back();
	}
</script>

<section class="content">
	<Header
		icon="bi-arrow-left"
		headerTitle="Agendamento"
		on:iconClick={() => goBack()}
		extraButton={false}
	/>

	<main class="content__main">
		<h4 class="content__main__title">Resumo do Agendamento</h4>
		<div class="content__main__info__wrapper">
			<div class="content__main__info">
				<p>Cliente</p>
				<p>{scheduleInfo.clientName}</p>
			</div>
			<div class="content__main__info">
				<p>Serviço</p>
				<p>{scheduleInfo.serviceType}</p>
			</div>
			<div class="content__main__info">
				<p>Data do agendamento</p>
				<p>{scheduleInfo.date}</p>
			</div>
			<div class="content__main__info">
				<p>Veículo</p>
				<p>{scheduleInfo.clientCar}</p>
			</div>
			<div class="content__main__info">
				<p>Forma de Pagamento</p>
				<p>Pagar no local</p>
			</div>
			<div class="content__main__info">
				<p>Valor a pagar</p>
				<p>{scheduleInfo.price}</p>
			</div>
		</div>
		<h4 class="content__main__title">Informações Adicionais</h4>
		<p class="content__main__subtitle">
			Para garantir um melhor atendimento recomendamos aos clientes que cheguem no local do serviço
			com 15 minutos de antecedência.
		</p>
		<div class="content__main__button">
			<Button
				buttonIcon="bi bi-arrow-right"
				buttonTitle="Finalizar Agendamento"
				on:buttonClick={() => scheduleService()}
			/>
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

		&__main {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			padding: 1.2rem;

			&__title {
				margin-bottom: 1rem;
				margin-top: 2rem;
				font-weight: 600;
			}

			&__subtitle {
				font-size: small;
			}

			&__info__wrapper {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				gap: 0.8rem;
			}

			&__info {
				display: flex;
				text-align: start;

				& p:last-child {
					text-align: end;
				}
			}

			&__date {
				outline: none;
				border: 1px solid gray;
				border-radius: 0.8rem;
				padding: 0.5rem;
				height: 2.8rem;
			}

			&__button {
				padding-top: 35.3vh;
			}
		}
	}
</style>
