<template>
  <footer>
    <div class="action --bb">
      <a href="#">
        {{ $store.state.footerActionText }}
      </a>
    </div>
    <div class="footer-main-content">
      <div class="logo --accent-font">
        <router-link to="/"><span>Lorem</span><br />Brewing</router-link>
      </div>
      <ul class="links">
        <li v-for="(link, i) in links" :key="i + '_footer_link'">
          <router-link :to="link.routerLink" class="--subtle">{{ link.text }}</router-link>
        </li>
      </ul>
      <div class="updates">
        <label>Sign Up For Updates!</label>
        <input type="text" placeholder="Email" />
      </div>
    </div>
    <div class="sub-content">
      <div>© ️Lorem Brewing 2019 — Terms — Privacy</div>
      <div>Site by <a href="arenwells.com" target="_blank">Aren Wells</a></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {
      links: [
        {
          routerLink: "/products",
          text: "Products"
        },
        {
          routerLink: "/storelocator",
          text: "Find Us"
        },
        {
          routerLink: "/story",
          text: "Our Story"
        },
        {
          routerLink: "/contact",
          text: "Contact"
        },
        {
          routerLink: "/events",
          text: "Events"
        },
        {
          routerLink: "/instagram",
          text: "Instagram"
        },
        {
          routerLink: "/faq",
          text: "FAQ"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
footer {
  .action {
    background: $colorPrimary;
    color: $colorBase;
    text-align: center;
    padding: $gapLarge $gapStandard;
    font-size: 2.75rem;

    a {
      text-decoration: none;
      color: $colorBase;
    }
  }

  .footer-main-content {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: $gapStandard;
    flex-wrap: wrap;

    & > * {
      &:first-child {
        flex-grow: 1;
        width: 30%;
      }
      &:not(first-child) {
        flex-grow: 1;
        width: 35%;
      }
    }

    .logo {
      text-align: left;

      a {
        text-decoration: none;
        font-size: 3rem;
        transition: color 0.15s ease-in-out;
        span {
          color: $colorAccent;
        }
        &:hover {
          color: $colorAccent;
          span {
            color: $colorPrimary;
          }
        }
      }
    }

    .links {
      list-style-type: none;
      padding-left: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;

      li {
        flex: 1 0 50%;
        margin-bottom: 0.1rem;
        text-align: left;

        a {
          font-size: 1.25rem;
          text-transform: uppercase;
          @include underline-hover-anchor($colorPrimary);
        }
      }
    }

    .updates {
      text-align: left;
      label {
        font-size: 1.5rem;
      }
      input {
        width: 100%;
      }
    }
  }

  .sub-content {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 0 $gapStandard $gapSmall;
  }
}
</style>
