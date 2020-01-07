<template>
  <section class="story --bb">
    <div class="--br">
      <p>{{ text.story }}</p>
      <button class="--link-out">{{ text.button }}</button>
    </div>
    <div class="image-container">
      <img src="https://images.squarespace-cdn.com/content/5bac513e77b9031eb8d17df4/1573010745019-M4S53LQHHG8P6X6BI3GD/Brewery%2BShow%2BComedy%2BBrewers.jpg?content-type=image%2Fjpeg" alt="">
    </div>
  </section>
</template>

<script>
//import WomanSwingGraphic from "../Graphics/WomanSwing";

export default {
  name: "Story",
  components: {
    //WomanSwingGraphic
  },
  data: function() {
    return {
      text: {
        story:
          "Vivamus venenatis lectus vitae pretium egestas. Mauris vitae molestie enim, vel tincidunt nibh. Maecenas at libero posuere, pharetra tortor vel, mollis ante. Morbi auctor ex sit amet libero gravida, in gravida ante vulputate. Aliquam pellentesque ullamcorper nisi vel egestas. Maecenas lacinia velit sed viverra suscipit. Aenean fermentum consectetur urna, pharetra dignissim turpis interdum vitae. Quisque a urna odio.",
        button: "Our Story"
      }
    };
  }
};
</script>

<style scoped lang="scss">
.story {
  position: relative;
  display: flex;
  width: inherit;
  div {
    @include content-left;
    padding: $gapLarge $gapStandard;

    p {
      margin-bottom: $gapLarge;
    }
  }
  .image-container {
    @include content-right;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background: rgb(210, 236, 255);

    svg {
      width: 90%;
      height: 100%;
    }
  }
}
</style>
