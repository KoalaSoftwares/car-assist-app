<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Header from '../../../../components/Header.svelte';
	import Request from '../../../../utility/Request.js';
	import Input from '../../../../components/Input.svelte';
	import Button from '../../../../components/Button.svelte';

	const pageTitle: string = 'Alterar agendamento';
	const requestService = new Request();

	onMount(async () => {
		document.querySelector('form')?.addEventListener('submit', (e: any) => {
			e.preventDefault();
			const formData = new FormData(e.target);

				modifyService(
					formData.get('product-name'),
					formData.get('product-price'),
					formData.get('product-description'),
				);
		});
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
	) {
		let endpoint = `car-store-api/product`;
		let headerContentType = 'application/json; charset=UTF-8';
		let body = {
			name: productName,
			price: productPrice,
			description: productDescription,
			imgUrl: null,
		};

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
					buttonTitle="Criar Produto"
					buttonIcon="bi-check-circle-fill"
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
