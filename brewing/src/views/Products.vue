<template>
  <div class="products">
    These are our products.
  </div>
</template>

<script>
export default {
  name: "products",
  created() {
    this.$store.state.footerActionText =
      "Lorem ipsum? Find our beers near you.";
  }
};
</script>

<style scoped lang="scss">
.products {
  @include full-screen-flex;
}
</style>