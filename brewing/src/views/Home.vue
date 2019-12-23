<template>
  <div class="home">
    <Welcome />
    <Overview />
    <Story />
    <Shop />
    <GraphicSection>
      <img src="@/assets/images/banner-a.png" />
    </GraphicSection>
  </div>
</template>

<script>
import Welcome from "../components/Home/Welcome";
import Overview from "../components/Home/Overview";
import Story from "../components/Home/Story";
import Shop from "../components/Home/Shop";
import GraphicSection from "../components/GraphicSection";

export default {
  name: "home",
  components: {
    Welcome,
    Overview,
    Story,
    Shop,
    GraphicSection
  },
  created() {
    this.$store.state.footerActionText = "Lorem ipsum? Follow us on Instagram.";
  }
};
</script>
