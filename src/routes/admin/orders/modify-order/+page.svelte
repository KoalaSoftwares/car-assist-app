<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '../../../../components/Header.svelte';
	import Request from '../../../../utility/Request.js';
	import Input from '../../../../components/Input.svelte';
	import Button from '../../../../components/Button.svelte';

	const pageTitle: string = 'Alterar pedido';
	const requestService = new Request();
	let orderId: string;
	let userName: string;
	let orderPrice: string;
	let orderProducts: string;
	let paymentMethod: string;
	let orderDate: string;
	let submitAction: string;

	onMount(async () => {
		document.querySelector('form')?.addEventListener('submit', (e: any) => {
			e.preventDefault();
			const formData = new FormData(e.target);

			if (submitAction == 'modify') {
				modifyService(formData.get('user-name'), formData.get('payment-method'));
			}

			if (submitAction == 'delete') {
				deleteService();
			}
		});

		let selectedOrder = JSON.parse(localStorage.getItem('SELECTED_ORDER') || '{}');
		orderId = selectedOrder.orderId;
		userName = selectedOrder.userName;
		orderPrice = selectedOrder.totalPrice;
		orderProducts = selectedOrder.products;
		orderDate = selectedOrder.date;
		paymentMethod = selectedOrder.paymentType;
		console.log(selectedOrder);

		let userNameDom: any = document.querySelector('#userName')!;
		userNameDom.value = userName;
		let paymentMethodDom: any = document.querySelector('#paymentMethod')!;
		paymentMethodDom.value = paymentMethod;
	});

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	async function modifyService(userName: any, paymentMethod: any) {
		let endpoint = `car-store-api/order/${orderId}`;
		let headerContentType = 'application/json; charset=UTF-8';
		let body = {
			id: orderId,
			userName: userName,
			totalPrice: orderPrice,
			date: orderDate,
			products: orderProducts,
			paymentType: paymentMethod
		};

		await requestService.putRequest(endpoint, body, headerContentType);
		goBack();
	}

	async function deleteService() {
		let endpoint = `car-store-api/order/${orderId}`;
		let body = {};

		requestService.deleteRequest(endpoint, body);
		alert('Produto deletado!');
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
				labelName="Nome do usuário"
				placeholderText="Nome do usuário"
				required={true}
				inputName="user-name"
				inputId="userName"
			/>
			<Input
				labelName="Forma de Pagamento"
				placeholderText="Forma de Pagamento"
				required={true}
				inputName="payment-method"
				inputId="paymentMethod"
			/>

			<div class="content__cards__buttons">
				<Button
					buttonTitle="Alterar pedido"
					buttonIcon="bi-wrench"
					on:buttonClick={() => (submitAction = 'modify')}
				/>
				<Button
					buttonTitle="Deletar pedido"
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
