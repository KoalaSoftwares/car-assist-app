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
	let productId: string;
	let productName: string;
	let productPrice: string;
	let productDescription: string;
  let productUrl: string;
	let scheduleDate: string;
	let submitAction: string;

	onMount(async () => {
		document.querySelector('form')?.addEventListener('submit', (e: any) => {
			e.preventDefault();
			const formData = new FormData(e.target);

			if (submitAction == 'modify') {
				modifyService(
					formData.get('product-name'),
					formData.get('product-price'),
					formData.get('product-description'),
					formData.get('product-url'),
          productId
				);
			}

			if (submitAction == 'delete') {
				deleteService();
			}
		});

		let selectedProduct = JSON.parse(localStorage.getItem('SELECTED_PRODUCT') || '{}');
		productId = selectedProduct.productId;
		productName = selectedProduct.productName;
		productPrice = selectedProduct.productPrice;
		productDescription = selectedProduct.productDescription;
    productUrl = selectedProduct.imgUrl;


		let productNameDom: any = document.querySelector('#productName')!;
		productNameDom.value = productName;
		let productPriceDom: any = document.querySelector('#productPrice')!;
		productPriceDom.value = productPrice;
		let productDescriptionDom: any = document.querySelector('#productDescription')!;
		productDescriptionDom.value = productDescription;
		let productUrlDom: any = document.querySelector('#productUrl')!;
		productUrlDom.value = productUrl;
	});

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	async function modifyService(
		productName: any,
		productPrice: any,
		productDescription: any,
    productUrl: any,
    productId: any
	) {
		let endpoint = `car-store-api/product/${productId}`;
		let headerContentType = 'application/json; charset=UTF-8';
		let body = {
			name: productName,
			price: productPrice,
			description: productDescription,
			imgUrl: productUrl,
      id: productId
		};

		await requestService.putRequest(endpoint, body, headerContentType);
		goBack();
	}

	async function deleteService() {
		let endpoint = `car-store-api/product/${productId}`;
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
				labelName="Nome do produto"
				placeholderText="Nome do produto"
				required={true}
				inputName="product-name"
				inputId="productName"
			/>
			<Input
				labelName="Valor do produto"
				placeholderText="Nome do produto"
				required={true}
				inputName="product-price"
				inputId="productPrice"
			/>
			<Input
				labelName="Descrição do produto"
				placeholderText="Descrição do produto"
				required={true}
				inputName="product-description"
				inputId="productDescription"
			/>
			<Input
				labelName="Imagem do produto"
				placeholderText="URL do produto"
				required={false}
				inputName="product-url"
				inputId="productUrl"
			/>

			<div class="content__cards__buttons">
				<Button
					buttonTitle="Alterar produto"
					buttonIcon="bi-wrench"
					on:buttonClick={() => (submitAction = 'modify')}
				/>
				<Button
					buttonTitle="Deletar produto"
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
