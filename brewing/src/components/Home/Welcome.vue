<template>
  <section class="welcome --bb">
    <div class="cta --br">
      <h1 class="--bold-text --no-margin">{{ text.main }}</h1>
      <h3>{{ text.sub }}</h3>
    </div>
    <div class="image-container">
      <WomanDogDoodle class="doodle" />
    </div>
  </section>
</template>

<script>
import WomanDogDoodle from "../Icons/WomanDogDoodle";

export default {
  name: "Welcome",
  components: {
    WomanDogDoodle
  },
  data: function() {
    return {
      text: {
        main: "Lorem ipsum dolor sit amet.",
        sub: "Diam phasellus vestibulum lorem sed risus ultricies tristique nulla."
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
  }

  .image-container {
    @include content-right;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #ffd52c;

    .doodle {
      width: 90%;
      height: 100%;
    }
  }
}
</style>
