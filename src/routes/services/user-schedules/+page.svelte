<script lang="ts">
	import { goto } from '$app/navigation';
	import FooterLogo from '../../../components/FooterLogo.svelte';
	import Header from '../../../components/Header.svelte';
	import ServiceCard from '../../../components/ServiceCard.svelte';
	const pageTitle: string = 'Meus agendamentos';

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function selectService() {
		goToPage('schedule');
	}
</script>

<section class="content">
	<Header
		icon={'bi-arrow-left'}
		on:iconClick={() => goBack()}
		headerTitle={pageTitle}
		extraButton={false}
	/>

	<main class="content__cards" >
    <ServiceCard userSchedulesCard={true} serviceName="Lavagem Prata" servicePrice="R$ 50,00" />
    <ServiceCard userSchedulesCard={true} serviceName="Lavagem Prata" servicePrice="R$ 50,00" />
  </main>

	<footer class="content__footer">
		<FooterLogo />
	</footer>
</section>

<style lang="scss">
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
