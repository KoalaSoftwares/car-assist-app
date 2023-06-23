<script lang="ts">
	import { onMount } from 'svelte';
	import Header from '../../components/Header.svelte';
	import FunctionsCard from '../../components/FunctionsCard.svelte';
	import FooterLogo from '../../components/FooterLogo.svelte';
	import { goto } from '$app/navigation';

	let userName: string = '';

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	onMount(async () => {
		userName = JSON.parse(localStorage.getItem('USER_NAME') || '');
	});
</script>

<section class="content">
	<Header icon="bi-person-fill" headerTitle={userName} extraButton={false} />

	<main class="content__cards">
		<FunctionsCard
			cardImage="images/Services2.png"
			iconName="bi-tools"
			cardTitle="Agendar Serviços"
			on:handleClick={() => goToPage('services')}
		/>
		<FunctionsCard
			cardImage="images/Services1.jpg"
			iconName="bi-bag-fill"
			cardTitle="Comprar Produtos"
			on:handleClick={() => goToPage('store')}
		/>
	</main>

	<footer on:click={() => goToPage('admin')} on:keypress={() => goToPage('admin')} class="content__footer">
		<FooterLogo />
	</footer>
</section>

<style lang="scss">
	@import '../../styles/global.scss';

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