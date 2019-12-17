<template>
  <section class="graphic --bb">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "GraphicSection"
};
</script>

<style scoped lang="scss">
.graphic {
  padding: 0;
  margin: 0;

  img {
    width: 100%;
  }
}
</style>
