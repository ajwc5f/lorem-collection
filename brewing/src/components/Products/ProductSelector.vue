<template>
  <section></section>
</template>

<script>
export default {
  name: "ProductSelector"
};
</script>

<style scoped lang="scss">
.welcome {
  @include full-screen-flex;

  .cta {
    @include content-left;
    padding: $gapStandard;
    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin: 0 0 $gapSmall;
      text-transform: uppercase;
      font-weight: 400;
    }
  }

  .image-container {
    @include content-right;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: #ffd52c;

    svg {
      width: 90%;
      height: 100%;
    }
  }
}
</style>
