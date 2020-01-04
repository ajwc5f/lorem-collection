<template>
  <header class="--bb">
    <div class="inner --left --br">
      <a class="logo" href="index.html">
        <h2>{{ text.logo }}</h2>
      </a>
    </div>
    <div class="inner --right">
      <a class="find --subtle" href="#"
         @mouseenter="isHovering = true"
         @mouseleave="isHovering = false">
        Find Us
        <transition
                appear
                name="fade"
                mode="out-in"
        >
          <i class="fal fa-search-location" v-show="!isHovering"></i>
        </transition>
        <transition
                appear
                name="fade"
                mode="out-in"
        >
          <i class="fad fa-search-location" v-show="isHovering"></i>
        </transition>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Titlebar",
  data: function() {
    return {
      isHovering: false,
      text: {
        logo: "LOREM",
        findUs: 'Find Us <i class="fal fa-search-location"></i>'
      }
    };
  }
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
  display: flex;
  height: $sidebarHeaderSize;
  padding-left: $sidebarHeaderSize;
  top: 0;
  left: 0;
  right: 0;
  z-index: 8;
  background: inherit;
  color: inherit;

  .inner {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 $gapStandard;

    .logo {
      font-family: $fontAccent;
      text-decoration: none;
      color: $colorAccent;
      &:hover {
        @include shake(0.75s);
      }
    }

    .find {
      font-weight: bold;
      color: inherit;
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
