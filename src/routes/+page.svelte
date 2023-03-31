<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount, tick } from "svelte";
	import Button from "../components/Button.svelte";
  import FooterLogo from "../components/FooterLogo.svelte";
	import Input from "../components/Input.svelte";

  onMount(async () => {
    let checkUserName = localStorage.getItem("USER_NAME");
    if (checkUserName) {
      goto('/functions');
    } else {
      goto('/welcome');
    }
  })

</script>
