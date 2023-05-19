<script lang="ts">
	export let labelName: string;
	export let placeholderText: string;
	export let required: boolean;
  export let inputName: string;
</script>

<label class="label" for="name">{labelName}</label>
<input class="input" {required} id="name" placeholder={placeholderText} type="text" name={inputName} />

<style lang="scss">
	$base-gray: gray;

	.label {
		font-weight: 400;
	}

	.input {
		width: 100%;
		height: 2.8rem;
		padding: 0.5rem;
		margin: 0.5rem 0;
		border-radius: 0.8rem;
		border: 1px solid $base-gray;
	}
</style>
