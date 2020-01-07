<template>
  <div class="products">
    <section class="selector --br">
      <ul>
        <transition
          appear
          name="fade"
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
            :class="{ active: currentProduct === i }"
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
              <i class="fal fa-times" v-show="currentProduct === i"></i>
              <i class="fal fa-long-arrow-right" v-show="currentProduct !== i"></i>
            </div>
            <div class="overview" v-show="currentProduct === i">
              <p>
                {{ product.desc }}
              </p>
            </div>
          </li>
        </transition>
      </ul>
    </section>
    <section class="images">
      <transition
        appear
        name="fade"
        mode="out-in"
        v-for="(product, i) in products"
        :key="i + '_product_image'"
      >
        <img :src="product.can.front" :alt="product.name" v-show="currentProduct === i">
      </transition>
    </section>
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
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          align-items: center;
          text-align: left;
          padding: $gapSmall $gapStandard;
          margin: -2px 0;
          font-family: $fontAccent;

          h3 {
            will-change: transform;
            transition: 0.2s ease-in-out;
          }

          i {
            font-size: 2.9rem;
          }

          &:hover {
            h3 {
              font-size: 1.5em;
            }
          }
        }

        &.active {
          .header {
            h3 {
              font-size: 1.5em;
            }
          }
        }

        .overview {
          height: auto;
          padding: $gapStandard;
        }
      }
    }
  }

  .images {
    @include content-right;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
