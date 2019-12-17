<template>
  <header class="--bb">
    <div class="inner --left --br">
      <a class="logo" href="index.html">
        <h2 :style="{ color: $store.state.globalPrimaryColor }">{{ text.logo }}</h2>
      </a>
    </div>
    <div class="inner --right">
      <a class="find" href="#" v-html="text.findUs"></a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Titlebar",
  data: function() {
    return {
      text: {
        logo: "LOREM",
        findUs: 'Find Us <i class="fal fa-long-arrow-right fa-lg"></i>'
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
header {
  position: fixed;
  display: flex;
  height: $sidebar_header_size;
  padding-left: $sidebar_header_size;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
  background: $primary;

  .inner {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: $standard_gap;

    .logo {
      font-family: $accent_font;
      text-decoration: none;
    }

    .find {
      font-weight: bold;
    }
  }

  .inner.--left {
    @include content-left;
  }

  .inner.--right {
    @include content-right;
  }
}
</style>
