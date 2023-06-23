<script lang="ts">
  import { goto } from "$app/navigation";
  import Request from '../../utility/Request.js';
  import Header from "../../components/Header.svelte";
	import ScheduleHourChip from "../../components/ScheduleHourChip.svelte";
	import Input from "../../components/Input.svelte";
	import Button from "../../components/Button.svelte";
	import { onMount } from "svelte";
  
  
  let scheduleInfo = {};
  let serviceData: any;
  let clientName: string;
  let selectedHour: number;
	const requestService = new Request();
	const availableHours: Array<any> = [
		{
			id: 0,
			hour: '10:00'
		},
		{
			id: 1,
			hour: '12:00'
		},
		{
			id: 2,
			hour: '13:30'
		},
		{
			id: 3,
			hour: '15:00'
		}
	];

  onMount(async () => {
    document.querySelector('form')?.addEventListener('submit', (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      saveScheduleInfo(formData);
    })

    clientName = JSON.parse(localStorage.getItem('USER_NAME') || '');
    serviceData = JSON.parse(localStorage.getItem('USER_SCHEDULE') || '')
  })

  // async function fetchApiData() {
  //   let endpoint = 'users';
	// 	let fetchAvailableHour = await requestService.getRequest(endpoint);

	// 	for (const hour in fetchAvailableHour) {
	// 		if (Object.prototype.hasOwnProperty.call(fetchAvailableHour, hour)) {
	// 			const element = fetchAvailableHour[hour];
	// 			let fetchResult = {id: element.id, hour: element.name};
	// 			availableHours.push(fetchResult);
	// 		}
	// 	}
	// 	return availableHours;
	// }

  function saveScheduleInfo(formData: FormData) {

    let hourId = formData.get('selectedHour');
    let hour = availableHours.find(hour => hour.id == hourId);

    scheduleInfo = {
      date: `${formData.get('selectedDate')} ${hour.hour}`,
      price: serviceData.servicePrice,
      serviceType: serviceData.serviceName,
      clientName: clientName,
      clientCar: `${formData.get('vehicleManufacturer')} ${formData.get('vehicleModel')}`,
      status: 'S'
    }

    localStorage.setItem("USER_SCHEDULE", JSON.stringify(scheduleInfo));
    goToPage('schedule/checkout');
  }

	function goToPage(routerPage: string): any {
		goto(`/${routerPage}`);
	}

	function goBack(): any {
    history.back();
	}

</script>

<section class="content">

  <Header icon="bi-arrow-left" headerTitle="Agendamento" on:iconClick={() => goBack()} extraButton={false}></Header>

  <main class="content__main">
    <form action="submit">
      <h4 class="content__main__title">Selecione a data desejada</h4>
      <input required class="content__main__date" name="selectedDate" type="date">
      <!-- <InlineCalendar start={today} end={tomorrow} theme={calendarTheme} /> -->
      <h4 class="content__main__title">Selecione a hora desejada</h4>
      <ScheduleHourChip availableHours={availableHours} required bind:selectedHour inputName="selectedHour" />
      <h4 class="content__main__title">Informações do Veículo</h4>
      <Input required labelName="Marca do Veículo" placeholderText="Digite a marca..." inputName="vehicleManufacturer" />
      <Input required labelName="Modelo do Veículo" placeholderText="Digite o modelo..." inputName="vehicleModel" />
      <div class="content__main__button">
        <Button buttonIcon="bi bi-arrow-right" buttonTitle="Ir para Checkout" />
      </div>
    </form>
  </main>

  <!-- <footer class="content__footer">
    <FooterLogo></FooterLogo>
  </footer> -->

</section>



<style lang="scss">
  @import '../../styles/global.scss';

  .content{
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
        margin-top: 1rem;
      }

      &__date {
        outline: none;
        border: 1px solid gray;
        border-radius: 0.8rem;
        padding: 0.5rem;
        height: 2.8rem;
      }

      &__button {
        margin-top: 32vh;
      }
		}
  }

</style>