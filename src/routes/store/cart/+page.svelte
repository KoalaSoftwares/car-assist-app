<script lang="ts">
	import Header from '../../../components/Header.svelte';
	import { goto } from '$app/navigation';
	import Button from '../../../components/Button.svelte';
	import ProductCartCard from '../../../components/ProductCartCard.svelte';
  import type { Product } from '../../../utility/Interfaces';
	import { onMount } from 'svelte';
  import Request from '../../../utility/Request.js';

	const pageTitle: string = 'Carrinho';
  const requestService = new Request();
  let userCart: Array<Product> = [];
  let userName: string;
  let productsTotal: any = 0;

    onMount(() => {
      userCart = JSON.parse(localStorage.getItem('USER_CART') || '[]');
      userName = JSON.parse(localStorage.getItem('USER_NAME') || "");
      console.log(userCart);
      userCart.forEach(element => {
      console.log(element.price)
      productsTotal = productsTotal + element.price;
    });
    })

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function addProductToCart() {
		console.log('Click');
		goToPage('schedule');
	}

	function removeProductToCart() {
		console.log('Click');
		goToPage('schedule');
	}

  async function createOrder() {
		let endpoint = `car-store-api/order`;
		let headerContentType = 'application/json; charset=UTF-8';
		let body = {
			userName: userName,
			totalPrice: productsTotal,
			date: new Date(`2023-06-23T01:55:00.000Z`),
			products: userCart,
			paymentType: "Local"
		};
		await requestService.postRequest(endpoint, body, headerContentType);
    localStorage.removeItem('USER_CART');
		goToPage('functions');
	}
</script>

<section class="content">
	<Header
		icon={'bi-arrow-left'}
		on:iconClick={() => goBack()}
		headerTitle={pageTitle}
		extraButton={false}
	/>

	<main class="content__main">
    <div>
      <h4 class="content__main__title">Seus produtos</h4>
      {#each userCart as product}
      <ProductCartCard productImage={product.imgUrl} productName={product.name} productPrice={product.price} />
      {/each}
    </div>

    <div>
      <h4 class="content__main__title">Resumo do pedido</h4>
      <div class="content__main__info__wrapper">
        <div class="content__main__info">
          <p>Cliente</p>
          <p>{userName}</p>
        </div>
        <div class="content__main__info">
          <p>Forma de Pagamento</p>
          <p>Pagar no local</p>
        </div>
        <div class="content__main__info">
          <p>Valor a pagar</p>
          <p>{`R$ ${productsTotal}`}</p>
        </div>
        <div class="content__main__info">
          <p>Entrega</p>
          <p>{'Retirada no local'}</p>
        </div>
      </div>
    </div>

    <div>
      <h4 class="content__main__title">Informações adicionais</h4>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor sequi, laudantium rerum laborum debitis odio eius similique, voluptatem veniam iusto ratione! Eum est sit ipsum doloribus eligendi labore maiores?</p>
    </div>
    
		<div class="content__main__button">
			<Button buttonIcon="bi bi-arrow-right" buttonTitle="Finalizar Compra" on:buttonClick={() => {createOrder()}} />
		</div>
	</main>
</section>

<style lang="scss">
	@import '../../../styles/global.scss';

	.content {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		height: 100vh;

		&__main {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			align-items: flex-start;
			justify-content: space-between;
			gap: 1.2rem;
			padding: 1.2rem;

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

			&__title {
        font-weight: bold;
				padding-bottom: 1rem;
			}

			&__button {
				padding-top: 24.5vh;
			}
		}
	}
</style>
