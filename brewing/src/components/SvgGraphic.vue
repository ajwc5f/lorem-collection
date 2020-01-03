<template>
  <component
    :is="name"
    :inkColor="inkColor"
    :bgColor="bgColor"
    :accentColor="accentColor"
  />
</template>

<script>
import ManBikini from "@/components/Graphics/ManBikini";
import ManHeart from "@/components/Graphics/ManHeart";
import WomanDog from "@/components/Graphics/WomanDog";
import WomanMeditating from "@/components/Graphics/WomanMeditating";
import WomanPlant from "@/components/Graphics/WomanPlant";
import WomanRunning from "@/components/Graphics/WomanRunning";
import WomanSwing from "@/components/Graphics/WomanSwing";
import WomanWalking from "@/components/Graphics/WomanWalking";

export default {
  name: "SvgGraphic",
  components: {
    ManBikini,
    ManHeart,
    WomanDog,
    WomanMeditating,
    WomanPlant,
    WomanRunning,
    WomanSwing,
    WomanWalking
  },
  props: {
    name: {
      type: String,
      required: true
    },
    accentColor: {
      type: String,
      default: "#FFFFFF",
      required: false
    },
    bgColor: {
      type: String,
      default: "#FFD52C",
      required: false
    },
    inkColor: {
      type: String,
      default: "#000000",
      required: false
    }
  }
};
</script>