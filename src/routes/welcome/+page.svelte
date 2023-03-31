<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount, tick } from "svelte";
	import Button from "../../components/Button.svelte";
  import FooterLogo from "../../components/FooterLogo.svelte";
	import Input from "../../components/Input.svelte";

  onMount(async () => {

    document.querySelector('form')?.addEventListener('submit', (e: any) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      localStorage.setItem("USER_NAME", JSON.stringify(formData.get('input')));
      goto('/functions');
    })

    let checkUserName = localStorage.getItem("USER_NAME");
    if (checkUserName) {
      goto('/functions');
    }
  })

</script>

<style lang="scss">
@import '../../styles/global.scss';

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3rem;
  height: 100vh;
  width: 100vw;

  .header {

    &__title {
      font-weight: 700;
    }
  }

  .main {

    &__title {
      font-size: 1rem;
      font-weight: 400;
      margin: 2rem 0;
    }
  }

}
</style>

<section class="content">
  <header class="header">
    <h1 class="header__title">Car Assist</h1>
    <h4 class="header__subtitle">Bem Vindo!</h4>
    </header>

    <main class="main">
      <h5 class="main__title">Para iniciar digite seu nome.</h5>

      <form class="form">
        <Input required={true} labelName="Nome" placeholderText="Digite seu nome" />
        <Button buttonTitle="Acessar aplicativo" buttonIcon="bi-arrow-right" />
      </form>
    </main>

    <FooterLogo />
</section>