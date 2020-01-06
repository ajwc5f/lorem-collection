<template>
  <header class="--bb">
    <div class="inner --left --br">
      <a
        class="logo"
        href="#"
        ref="titlebarLogo"
        :class="{ shake: this.hoveringLogo }"
        @mouseover="hoverLogoToggle()"
      >
        <h2>LOREM</h2>
      </a>
    </div>
    <div class="inner --right">
      <a class="find --subtle" href="#">
        Find Us
        <i class="fal fa-search-location" v-show="!hoveringFindUs"></i>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Titlebar",
  data: function() {
    return {
      hoveringFindUs: false,
      hoveringLogo: false
    };
  },
  methods: {
    hoverLogoToggle() {
      if (this.hoveringLogo) return;

      this.hoveringLogo = true;
      let vm = this;
      setTimeout(function() {
        vm.hoveringLogo = false;
      }, 751);
    }
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
      &.shake {
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
