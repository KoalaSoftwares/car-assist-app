<script lang="ts">
	import Header from '../../components/Header.svelte';
	import { goto } from '$app/navigation';

	const headerTitle: string = 'Admin';

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

  function goBack(): any {
    history.back();
	}
</script>

<section class="content">
	<Header icon="bi-arrow-left" {headerTitle} extraButton={false} on:iconClick={() => goBack()} />

	<main class="content__cards" >
    <div class="content__cards__wrapper" on:keypress={() => {goToPage('admin/services')}} on:click={() => {goToPage('admin/services')}}>
      <p>Serviços</p>
    </div>
    <div class="content__cards__wrapper" on:keypress={() => {goToPage('admin/schedules')}} on:click={() => {goToPage('admin/schedules')}}>
      <p>Agendamentos</p>
    </div>
    <div class="content__cards__wrapper" on:keypress={() => {goToPage('admin/products')}} on:click={() => {goToPage('admin/products')}}>
      <p>Produtos</p>
    </div>
    <div class="content__cards__wrapper" on:keypress={() => {goToPage('admin/schedules')}} on:click={() => {goToPage('admin/orders')}}>
      <p>Pedidos</p>
    </div>
  </main>
</section>

<style lang="scss">
	@import '../../styles/global.scss';
  $base-color: #719d33;

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

      &__wrapper {
      min-height: 8vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: $base-color;
      border-radius: 0.8rem;
		  box-shadow: 0.2rem 0.4rem 0.6rem rgba(black, 0.4);
      margin-bottom: 1.2rem;
      color: white;
      font-size: larger;
    }
		}

	}
</style>
