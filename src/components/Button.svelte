<script lang="ts">

export let buttonTitle: string
export let buttonIcon: string

</script>
<style lang="scss">
$base-color: #719D33;

.button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  margin: .5rem 0;
  border-radius: .8rem;
  border: none;
  background-color: $base-color;
  color: white;

  &__title {
    font-size: .9rem;
    font-weight: 800;
    margin-left: .5rem;
  }

  &__icon {
    font-size: 1.8rem;
    margin-top: .2rem;
    margin-right  : .5rem;
  }
}



</style>

<button class="button">
  <span class="button__title">{ buttonTitle }</span>
  <i class="{buttonIcon} button__icon"></i>
</button>
