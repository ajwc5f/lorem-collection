<template>
  <div class="nav-drawer">
    <div class="inner --color-set-inverse">
      <Titlebar class="--color-set-inverse" />
      <Sidebar class="--color-set-inverse" hamburger-classes="--inverse"/>
      <div class="content">
        <nav>
          <!-- TODO: Convert to <ul> -->
          <div class="nav-inner">
            <div class="nav-item"><a href="#"><span>Products</span></a></div>
            <div class="nav-item"><a href="#"><span>Our Story</span></a></div>
            <div class="nav-item"><a href="#"><span>Find Us</span></a></div>
            <div class="nav-item"><a href="#"><span>FAQ</span></a></div>
            <div class="nav-item"><a href="#"><span>Shop</span></a></div>
          </div>
        </nav>
        <div class="nav-image">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Titlebar,
    Sidebar
  },
  name: "NavContainer"
};
</script>

<style scoped lang="scss">
.nav-drawer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 10;
  transform: translateX(-100%);
  transition: transform 0.5s;

  &.is-active {
    transform: matrix(1, 0, 0, 1, 0, 0);

    .inner {
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }

  .inner {
    transform: translateX(100%);
    transition: transform 0.5s;
    will-change: transform;
    height: 100%;

    .content {
      height: 100vh;
      background: inherit;
      color: $colorBase;
      padding: $sidebarHeaderSize 0 0 $sidebarHeaderSize;

      nav {
        @include content-left;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        .nav-inner {
          text-align: left;
          .nav-item {
            margin: 1.5rem 0;

            a {
              color: $colorBase;
              font-size: 4.5rem;
              text-decoration: none;
              text-transform: uppercase;
              @include underline-hover-anchor($colorBase);
            }
          }
        }
      }

      div {

      }
    }
  }
}
</style>