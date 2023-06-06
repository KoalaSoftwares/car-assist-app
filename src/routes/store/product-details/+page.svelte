<script lang="ts">
	import Header from '../../../components/Header.svelte';
	import { goto } from '$app/navigation';
	import ProductCard from '../../../components/ProductCard.svelte';
  import Button from "../../../components/Button.svelte";

	const pageTitle: string = 'Detalhes do Produto';
  const productImage: string = 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80';

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function openProductPage() {
		console.log('Click');
		goToPage('schedule');
	}

	function addProductToCart() {
		console.log('Click');
		goToPage('schedule');
	}

	function removeProductToCart() {
		console.log('Click');
		goToPage('schedule');
	}
</script>

<section class="content">
	<Header
		icon={'bi-arrow-left'}
		on:iconClick={() => goBack()}
		headerTitle={pageTitle}
		extraButton={true}
		buttonType="store"
		buttonIcon="bi-bag-fill"
		on:buttonClick={() => goToPage('store/cart')}
	/>

	<main class="content__main">
    <img class="content__main__image" src={productImage} alt="Product">
    <div>
      <h2 class="content__main__product">Product Name</h2>
      <p class="content__main__price">R$ 28,80</p>
    </div>
    <div>
      <h4 class="content__main__title">Sobre o produto</h4>
      <p class="content__main__about">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolore laudantium, ratione recusandae dolorum porro eaque voluptatum accusantium suscipit ipsam numquam, sint nulla inventore aliquid cum? Maiores non natus quis!</p>
    </div>
    <div class="content__main__button">
      <Button buttonIcon="bi bi-arrow-right" buttonTitle="Adicionar ao carrinho" />
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

      &__image {
        height: 30vh;
        width: 100%;
        border-radius: 12px;
        box-shadow: .3rem .6rem .8rem rgba(black, .3);
      }

      &__price {
        font-size: 1.2rem;
      }

      &__title {
        margin-top: .4rem;
        margin-bottom: .4rem;
      }

      &__button {
      padding-top: 18vh;
    }


		}
	}
</style>
