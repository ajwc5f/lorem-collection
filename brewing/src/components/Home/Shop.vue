<template>
  <section class="shop --bb">
    <div class="ticker">
      <div>
        <img class="item" v-for="(item, i) in shopItems" :src="item.image" :key="i + '_shop_item'">
      </div>
    </div>
    <button class="--link-out">{{ text.button }}</button>
  </section>
</template>

<script>
export default {
  name: "Shop",
  data: function() {
    return {
      shopItems: [
        {
          image: 'http://pluspng.com/img-png/tshirt-png-black-t-shirt-png-transparent-image-2611.png'
        },
        {
          image: 'http://pluspng.com/img-png/tshirt-png-black-t-shirt-png-transparent-image-2611.png'
        },
        {
          image: 'http://pluspng.com/img-png/tshirt-png-black-t-shirt-png-transparent-image-2611.png'
        },
        {
          image: 'http://pluspng.com/img-png/tshirt-png-black-t-shirt-png-transparent-image-2611.png'
        },
        {
          image: 'http://pluspng.com/img-png/tshirt-png-black-t-shirt-png-transparent-image-2611.png'
        },
        {
          image: 'http://pluspng.com/img-png/tshirt-png-black-t-shirt-png-transparent-image-2611.png'
        }
      ],
      text: {
        button: "Shop Now"
      }
    };
  }
};
</script>

<style scoped lang="scss">
.shop {
  padding: $large_gap $standard_gap;

  .ticker {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    overflow: hidden;
    white-space: nowrap;
    width: calc(100% + (2 * #{$standard_gap}));
    margin-left: -$standard_gap;
    margin-right: -$standard_gap;
    margin-bottom: $large_gap;

    div {
      @include marquee(right, 45s);
    }

    .item {
      width: 600px;
      padding: 0 100px;
    }
  }
}
</style>
