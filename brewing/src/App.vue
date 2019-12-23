<template>
  <div id="app" class="dark">
    <NavDrawer />
    <div class="app-content">
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavDrawer from "@/components/NavDrawer.vue";
import Footer from "@/components/Footer";

export default {
  components: {
    NavDrawer,
    Footer
  },
  created() {
    this.$store.state.globalPrimaryColor = this.randomHex();
    this.$store.state.globalContrastColor = this.invertColor(
      this.$store.state.globalPrimaryColor
    );
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
