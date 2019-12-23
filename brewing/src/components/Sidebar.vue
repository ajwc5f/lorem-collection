<template>
  <aside class="sidebar --br">
    <div class="sidebar__inner">
      <div
        class="hamburger"
        :class="[{ 'is-active': this.$store.state.navDrawerIsActive}, hamburgerClasses ]"
        @click="toggleMenu"
      ></div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    hamburgerClasses: {
      type: String,
      default: ""
    }
  },
  methods: {
    toggleMenu() {
      this.$store.state.navDrawerIsActive = !this.$store.state.navDrawerIsActive;
    }
  }
};
</script>

<style scoped lang="scss">
.sidebar {
  position: fixed;
  width: $sidebarHeaderSize;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background: inherit;
  color: inherit;

  .sidebar__inner {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 1.75rem 1rem;
  }
}
</style>
