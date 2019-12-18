<template>
  <footer>
    <div class="action --bb">
      <a href="#">
        {{ $store.state.footerActionText }}
      </a>
    </div>
    <div class="footer-main-content">
      <div class="logo --accent-font">
        <h2>Lorem<br />Brewing</h2>
      </div>
      <ul class="links">
        <li v-for="(link, i) in links" :key="i + '_footer_link'">
          <a :href="link.href" class="--subtle">{{ link.text }}</a>
        </li>
      </ul>
      <div class="updates">
        <label>Sign Up For Updates!</label>
        <input type="text" placeholder="Email">
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
          href: "#",
          text: "Products"
        },
        {
          href: "#",
          text: "Find Us"
        },
        {
          href: "#",
          text: "Our Story"
        },
        {
          href: "#",
          text: "Contact"
        },
        {
          href: "#",
          text: "Events"
        },
        {
          href: "#",
          text: "Instagram"
        },
        {
          href: "#",
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
    background: $colorPrimary !important;
    color: $colorBase !important;
    text-align: center;
    padding: $gapLarge $gapStandard;
    font-size: 2.5rem;

    a {
      text-decoration: none;
      color: $colorPrimary !important;
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
    }

    .links {
      list-style-type: none;
      padding-left: 0;
      margin: 0;
      display: flex;
      flex-wrap: wrap;

      li {
        flex: 1 0 50%;
        margin-bottom: 0.25rem;
        text-align: left;

        a {
          font-size: 1.5rem;
          text-transform: uppercase;
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
