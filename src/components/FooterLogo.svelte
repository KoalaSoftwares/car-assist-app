<script lang="ts"></script>

<style lang="scss">
$base-gray: gray;

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  &__name {
    font-weight: bold;
    color: $base-gray;
    
  }

  &__icon {
    width: 3.2rem;
    height: 2rem;
    opacity: .6;
  }
}
</style>

<div class="logo">
  <p class="logo__name">KoalaSoftwares</p>
  <img class="logo__icon" src="images/KoalaSoftwaresLogo.png" alt="Koala Softwares logo">
</div>