<script lang="ts">
	import { createEventDispatcher } from "svelte";


export let icon: string;
export let headerTitle: string;
export let extraButton: boolean;
export let buttonType: string = '';
export let buttonIcon: string = '';
export let productQuantity: number = 0;

const dispatch = createEventDispatcher();

function handleIconClick() {
  dispatch('iconClick');
} 

function handleButtonClick() {
  dispatch('buttonClick');
} 

</script>
<style lang="scss">

.header {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 6.5vh;
  
  &__title {
    flex: 1;
    font-weight: bold;
  }
}

i {
  font-size: 1.6rem;
  margin: 1.2rem;
}

</style>

<header class="header">

  <i on:click={handleIconClick} on:keypress={handleIconClick} class="{icon} header__icon"></i>
  <p class="header__title">{ headerTitle }</p>

  {#if extraButton} 

    {#if buttonType == "service"}
    <i class="{buttonIcon}"></i>
    {/if}

    {#if buttonType == "store"}
    <i class="{buttonIcon}"></i>
    {/if}
  
  {/if}

</header>
