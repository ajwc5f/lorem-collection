<template>
  <div class="products">
    <section class="selector --br">
      <ul>
        <transition
          appear
          name="fade-slow"
          mode="out-in"
          v-for="(product, i) in products"
          :key="i + '_product'"
        >
          <li
            class="product"
            v-show="currentProduct === null || currentProduct === i"
            @click="toggleProduct(i)"
            @mouseenter="currentHoveredProduct = i"
            @mouseleave="currentHoveredProduct = null"
          >
            <div
              class="header --by"
              :style="{
                color:
                  currentHoveredProduct === i || currentProduct === i
                    ? product.color
                    : '#000'
              }"
            >
              <h3>{{ product.name }}</h3>
            </div>
            <div class="overview" v-show="currentProduct === i"></div>
          </li>
        </transition>
      </ul>
    </section>
    <section class="images"></section>
  </div>
</template>

<script>
import { products } from "../assets/scripts/variables";

export default {
  name: "products",
  data: function() {
    return {
      currentProduct: null,
      currentHoveredProduct: null,
      products: products
    };
  },
  methods: {
    toggleProduct(currentIndex) {
      this.currentProduct =
        this.currentProduct === currentIndex ? null : currentIndex;
    }
  },
  created() {
    this.$store.state.footerActionText =
      "Lorem ipsum? Find our beers near you.";
  }
};
</script>

<style scoped lang="scss">
.products {
  @include full-screen-flex;

  .selector {
    @include content-left;
    height: 100%;

    ul {
      @include reset-list-styles;

      li.product {
        cursor: pointer;

        .header {
          text-align: center;
          padding: $gapSmall;
          margin: -2px 0;
          font-family: $fontAccent;

          h3 {
            will-change: transform;
            transition: 0.25s ease-in-out;
          }

          &:hover {
            h3 {
              transform: rotate(-4deg);
            }
          }
        }

        .overview {
          height: auto;
        }
      }
    }
  }
}
</style>
