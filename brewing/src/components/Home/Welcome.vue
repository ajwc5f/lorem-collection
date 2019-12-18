<template>
  <section class="welcome --bb">
    <div class="cta --br">
      <h1 class="--bold-text">{{ text.main }}</h1>
      <h3>{{ text.sub }}</h3>
    </div>
    <div class="image-container">
      <WomanDogGraphic/>
    </div>
  </section>
</template>

<script>
import WomanDogGraphic from "../Graphics/WomanDog";

export default {
  name: "Welcome",
  components: {
    WomanDogGraphic
  },
  data: function() {
    return {
      text: {
        main: "Lorem ipsum. Dolor sit amet.",
        sub: "Diam phasellus vestibulum sed risus ultricies tristique nulla."
      }
    };
  }
};
</script>

<style scoped lang="scss">
.welcome {
  position: relative;
  display: flex;
  width: inherit;
  height: -webkit-calc(100vh - #{$sidebarHeaderSize} + #{$borderSize});
  height: -moz-calc(100vh - #{$sidebarHeaderSize} + #{$borderSize});
  height: calc(100vh - #{$sidebarHeaderSize} + #{$borderSize});

  .cta {
    @include content-left;
    padding: $gapStandard;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin: 0 0 $gapSmall;
      text-transform: uppercase;
      font-weight: 400;
    }
  }

  .image-container {
    @include content-right;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #FFD52C;

    svg {
      width: 90%;
      height: 100%;
    }
  }
}
</style>
