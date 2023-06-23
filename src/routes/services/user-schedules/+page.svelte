<script lang="ts">
	import { goto } from '$app/navigation';
	import FooterLogo from '../../../components/FooterLogo.svelte';
	import Header from '../../../components/Header.svelte';
	import ServiceCard from '../../../components/ServiceCard.svelte';
	import Request from '../../../utility/Request.js';

	const requestService = new Request();
	const pageTitle: string = 'Meus agendamentos';

	function goBack(): any {
		history.back();
	}

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	async function fetchApiData() {
    let endpoint = 'car-schedule-api/schedule';
		let userSchedules = [];
    let fetchResult;
    let splitDate;
    let formattedDate;
		let fetchUserSchedules = await requestService.getRequest(endpoint);

		for (const service in fetchUserSchedules) {
			if (Object.prototype.hasOwnProperty.call(fetchUserSchedules, service)) {
				const element = fetchUserSchedules[service];
        splitDate = element.date.split("T");
        formattedDate =  `${splitDate[0]} ${splitDate[1].split(".")[0]}`;
				fetchResult = {
					serviceName: element.serviceType,
					serviceDate: formattedDate,
					serviceStatus: element.username
				};
				userSchedules.push(fetchResult);
			}
		}
		return userSchedules;
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
		{#await fetchApiData() then userSchedules}
			{#each userSchedules as schedule}
				<ServiceCard
					userSchedulesCard={true}
					serviceName={schedule.serviceName}
					servicePrice=''
					serviceDate={schedule.serviceDate}
				/>
			{/each}
		{/await}
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
