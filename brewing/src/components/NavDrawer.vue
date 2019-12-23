<template>
  <div class="nav-container --color-set-inverse">
    <Titlebar class="--color-set-inverse" />
    <Sidebar class="--color-set-inverse" hamburger-classes="--inverse"/>
    <nav>
      <a href="#">Products</a>
      <a href="#">Our Story</a>
      <a href="#">Find Us</a>
      <a href="#">FAQ</a>
      <a href="#">Shop</a>
    </nav>
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
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  transform: translate(-100%, 0%) matrix(1, 0, 0, 1, 0, 0);
  transition: transform 0.5s;

  &.is-active {
    transform: matrix(1, 0, 0, 1, 0, 0);
  }

  nav {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: inherit;
    color: $colorBase;
    padding: $sidebarHeaderSize $sidebarHeaderSize 0 calc(3 * #{$sidebarHeaderSize});

    a {
      color: $colorBase;
      font-size: 4.25rem;
      text-decoration: none;
      text-transform: uppercase;
      margin: 1rem 0;
    }
  }
}
</style>