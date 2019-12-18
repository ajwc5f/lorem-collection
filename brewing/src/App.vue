<template>
  <div id="app" class="dark">
    <Titlebar />
    <Sidebar />
    <div class="app-content">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Titlebar from "@/components/Titlebar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer";

export default {
  components: {
    Titlebar,
    Sidebar,
    Footer
  },
  created() {
    this.$store.state.globalPrimaryColor = this.randomHex();
    this.$store.state.globalContrastColor = this.invertColor(this.$store.state.globalPrimaryColor);
  }
};
</script>

<style lang="scss">
.app-content {
  position: relative;
  padding-top: $sidebarHeaderSize;
  padding-left: $sidebarHeaderSize;
  display: flex;
  width: 100%;
  background: $colorBase;
  flex-direction: column;
}
</style>
