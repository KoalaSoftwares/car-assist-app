<script lang="ts">
	import FooterLogo from "../../components/FooterLogo.svelte";
  import Header from "../../components/Header.svelte";
	import ScheduleHourChip from "../../components/ScheduleHourChip.svelte";

  import { InlineCalendar } from 'svelte-calendar';
  import dayjs from 'dayjs';

  const today = new Date();
	const tomorrow = dayjs().add(7, 'day').toDate();

  const calendarTheme = {
		calendar: {
			maxWidth: '90vw',
			shadow: '0px 0px 5px rgba(0, 0, 0, 0.25)'
		}
	};

	function goBack(): any {
    history.back();
	}

</script>

<section class="content">

  <Header icon="bi-arrow-left" headerTitle="Agendamento" on:iconClick={() => goBack()} extraButton={false}></Header>

  <main class="content__main">
    <h3 class="content__main__title">Selecione a data desejada</h3>
    <InlineCalendar start={today} end={tomorrow} theme={calendarTheme} />
    <h3 class="content__main__title">Selecione a hora desejada</h3>
    <ScheduleHourChip />
  </main>

  <footer class="content__footer">
    <FooterLogo></FooterLogo>
  </footer>

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
			padding: 1.2rem;

      &__title {
        margin-bottom: 1rem;
        margin-top: 1rem;
      }
		}

    &__footer {
			padding: 3rem;
		}
  }

</style>