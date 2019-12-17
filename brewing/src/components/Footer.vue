<template>
  <footer>
    <div class="action --bb">
      <a href="#">
        {{ $store.state.footerActionText }}
      </a>
    </div>
    <div class="main-content">
      <div class="logo --accent-font" v-html="logo"></div>
      <ul class="links">
        <li v-for="(link, i) in links" :key="i + '_footer_link'">
          <a :href="link.href" class="--subtle">{{ link.text }}</a>
        </li>
      </ul>
      <div class="updates">
        <label>Sign up for updates!</label>
        <br>
        <input type="input" placeholder="Email">
      </div>
    </div>
    <div class="sub-content">
      <div>{{ disclaimer }}</div>
      <div v-html="creator"></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data: function() {
    return {
      logo: "<h2>Lorem<br>Brewing</h2>",
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
      ],
      disclaimer: "© ️Lorem Brewing 2019 — Terms — Privacy",
      creator: 'Site by <a href="arenwells.com" target="_blank">Aren Wells</a>',
      updates: {
        label: 'Sign up for updates!',
      }
    };
  }
};
</script>

<style scoped lang="scss">
footer {
  .action {
    background: $secondary !important;
    color: $primary !important;
    text-align: center;
    padding: $large_gap $standard_gap;
    font-size: 2.5rem;

    a {
      text-decoration: none;
      color: $primary !important;
    }
  }

  .main-content {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: $standard_gap;
    flex-wrap: wrap;

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
        margin-bottom: 0.5rem;
        text-align: left;

        a {
          font-size: 1.5rem;
          text-transform: uppercase;
        }
      }
    }
    .updates {
      text-align: right;

      label {
        font-size: 1.5rem;
      }
    }
  }

  .sub-content {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: $small_gap $standard_gap;
    padding-top: 0;
  }
}
</style>
