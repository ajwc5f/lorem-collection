<template>
  <aside class="sidebar --br">
    <div class="sidebar__inner">
      <div class="sidebar__menu">
        <i class="fal fa-bars fa-lg"></i>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.sidebar {
  position: fixed;
  width: $sidebar_header_size;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background: $primary;

  .sidebar__inner {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 1.75rem 0.75rem;

    .sidebar__menu {
      cursor: pointer;
    }
  }
}
</style>
