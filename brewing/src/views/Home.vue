<template>
  <div class="home">
    <Welcome />
    <Overview />
    <Story />
    <Shop />
    <GraphicSection>
      <SvgGraphic
        name="LoremBanner"
        inkColor="#000000"
        bgColor="#ffffff"
        accentColor="#FF6161"
        secondaryColor="#E1AADE"
      />
    </GraphicSection>
  </div>
</template>

<script>
import Welcome from "@/components/Home/Welcome";
import Overview from "@/components/Home/Overview";
import Story from "@/components/Home/Story";
import Shop from "@/components/Home/Shop";
import GraphicSection from "@/components/GraphicSection";
import SvgGraphic from "@/components/SvgGraphic";

export default {
  name: "home",
  components: {
    Welcome,
    Overview,
    Story,
    Shop,
    GraphicSection,
    SvgGraphic
  },
  created() {
    this.$store.state.footerActionText = "Lorem ipsum? Follow us on Instagram.";
  }
};
</script>
