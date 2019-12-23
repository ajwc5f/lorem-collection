<template>
  <div class="nav-container">
    <Titlebar />
    <Sidebar />
    <nav>
      This is a nav drawer.
    </nav>
  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "NavContainer",
  components: {
    Titlebar,
    Sidebar
  }
};
</script>

<style scoped lang="scss">
.nav-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
}
</style>