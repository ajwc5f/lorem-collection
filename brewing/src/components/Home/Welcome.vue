<template>
  <section class="welcome --bb">
    <div class="cta --br">
      <h1 class="--bold-text --no-margin">{{ text.main }}</h1>
      <h3>{{ text.sub }}</h3>
    </div>
    <div class="image-container" :style="{ backgroundColor: $store.state.globalContrastColor }">
      <object type="image/svg+xml" data="@/assets/images/a.svg">
        <img src="@/assets/images/a.svg" alt="Lorem Logo">
      </object>
    </div>
  </section>
</template>

<script>
export default {
  name: "Welcome",
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
  height: -webkit-calc(100vh - #{$sidebar_header_size} + #{$border_size});
  height: -moz-calc(100vh - #{$sidebar_header_size} + #{$border_size});
  height: calc(100vh - #{$sidebar_header_size} + #{$border_size});

  .cta {
    @include content-left;
    padding: $standard_gap;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .image-container {
    @include content-right;
    display: flex;
    justify-content: center;
    align-items: center;

    object {
      width: 90%;
    }
  }
}
</style>
