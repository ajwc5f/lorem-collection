<template>
  <section class="welcome --bb">
    <div class="cta --br">
      <h1 class="--bold-text">Lorem ipsum.<br>Dolor sit amet.</h1>
      <h3>Diam phasellus vestibulum sed risus ultricies tristique nulla. Donec tempus accumsan nibh non elementum.</h3>
    </div>
    <div class="image-container">
      <SvgGraphic name="WomanDog" inkColor="#000000" accentColor="#ffffff" />
    </div>
  </section>
</template>

<script>
import SvgGraphic from "../SvgGraphic";

export default {
  name: "Welcome",
  components: {
    SvgGraphic
  }
};
</script>

<style scoped lang="scss">
.welcome {
  @include full-screen-flex;

  .cta {
    @include content-left;
    padding: $gapStandard;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin: 0 0 $gapSmall;
      text-transform: uppercase;
    }
  }

  .image-container {
    @include content-right;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #ffd52c;

    svg {
      width: 90%;
      height: 100%;
    }
  }
}
</style>
