<script lang="ts">

export let labelName: string;
export let placeholderText: string;


</script>

<style lang="scss">

$base-gray: gray;

.label {
  font-weight: 400;
}

.input {
  
  width: 100%;
  height: 2.8rem;
  padding: .5rem;
  margin: .5rem 0;
  border-radius: .8rem;
  border: 1px solid $base-gray;
}

</style>

<label class="label" for="name">{ labelName }</label>
<input class="input" id="name" placeholder="{placeholderText}" type="text">
