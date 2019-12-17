<template>
  <section class="overview --bb">
    <div class="ticker">
      <h2 class="--bold-text">{{ text.ticker }}</h2>
    </div>
    <ul class="products">
      <li v-for="(product, i) in products" :key="i + '_overview_product'" class="product">
        <img :src="product.image" :alt="product.name" />
        <h3 class="--accent-font">{{ product.name }}</h3>
      </li>
    </ul>
    <div class="summary">
      <p>{{ text.summary }}</p>
      <a href="#">{{ text.learnMore }}</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Overview",
  data: function() {
    return {
      text: {
        ticker: '"Quis enim lobortis scelerisque fermentum dui faucibus. Risus sed vulputate odio ut enim."',
        summary: "Proin eu pretium lacus, vitae varius elit. Aliquam laoreet mollis turpis, vitae dapibus metus finibus sed. Praesent volutpat id sapien et sodales. Maecenas nisi felis, consequat et porttitor at, faucibus id massa. Aenean venenatis risus a ultrices ultricies. Nulla iaculis eleifend interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
        learnMore: "Want to learn more about how we brew our beers?"
      },
      products: [
        {
          name: "Citra IPA",
          image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        },
        {
          name: "Hazy IPA",
          image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        },
        {
          name: "Lager",
          image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        },
        {
          name: "Cherry Sour",
          image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        },
        {
          name: "Raspberry Sour",
          image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        },
        {
          name: "Nitro Stout",
          image: "https://www.tecatebeerusa.com/assets/images/home/tecate-original-beer.png"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.overview {
  padding: $gapLarge $gapStandard;

  .ticker {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    overflow: hidden;
    white-space: nowrap;
    width: calc(100% + (2 * #{$gapStandard}));
    margin-left: -$gapStandard;
    margin-right: -$gapStandard;

    h2 {
      @include marquee(left, 20s);
    }
  }

  .products {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
    margin-bottom: $gapLarge;

    .product {
      position: relative;
      width: 33.33333%;
      cursor: pointer;
      text-align: center;

      img {
        width: 100%;
      }
    }
  }

  .summary {
    width: 75%;
    font-size: 2.5rem;

    a {
      padding: $gapStandard 0;
      display: block;
    }
  }
}
</style>
