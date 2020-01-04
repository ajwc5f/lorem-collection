<template>
  <div class="nav-drawer">
    <div class="inner --color-set-inverse">
      <Titlebar class="--color-set-inverse" />
      <Sidebar class="--color-set-inverse" hamburger-classes="--inverse" />
      <div class="content">
        <nav>
          <ul>
            <li
              v-for="(item, i) in navItems"
              :key="'navItem' + i"
              @mouseenter="currNavItem = i"
              @mouseleave="currNavItem = null"
            >
              <a :href="item.href">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
        <div class="nav-images">
          <transition
            appear
            name="fade"
            mode="out-in"
            v-for="(item, i) in navItems"
            :key="'navImage' + i"
          >
            <SvgGraphic
              :name="item.graphic.name"
              inkColor="#ff5678"
              :accentColor="item.graphic.accentColor"
              v-show="currNavItem === i"
            />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Titlebar from "@/components/Titlebar";
import Sidebar from "@/components/Sidebar";
import SvgGraphic from "@/components/SvgGraphic";

export default {
  name: "NavContainer",
  components: {
    Titlebar,
    Sidebar,
    SvgGraphic
  },
  data: function() {
    return {
      currNavItem: null,
      navItems: [
        {
          name: "Products",
          href: "#",
          graphic: {
            name: "WomanRunning",
            accentColor: "#ffffff"
          }
        },
        {
          name: "Our Story",
          href: "#",
          graphic: {
            name: "ManHeart",
            accentColor: "#ffffff"
          }
        },
        {
          name: "Find Us",
          href: "#",
          graphic: {
            name: "WomanWalking",
            accentColor: "#ffffff"
          }
        },
        {
          name: "FAQ",
          href: "#",
          graphic: {
            name: "WomanMeditating",
            accentColor: "#ffffff"
          }
        },
        {
          name: "Shop",
          href: "#",
          graphic: {
            name: "ManBikini",
            accentColor: "#ffffff"
          }
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.nav-drawer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 10;
  transform: translateX(-100%);
  transition: transform 0.5s;

  &.is-active {
    transform: matrix(1, 0, 0, 1, 0, 0);

    .inner {
      transform: matrix(1, 0, 0, 1, 0, 0);
    }
  }

  .inner {
    transform: translateX(100%);
    transition: transform 0.5s;
    will-change: transform;
    height: 100%;

    .content {
      height: 100vh;
      background: inherit;
      color: $colorBase;
      padding: $sidebarHeaderSize 0 0 $sidebarHeaderSize;
      display: flex;

      nav {
        @include content-left(40%);
        min-width: 600px;
        min-height: 650px;
        z-index: 20;
        overflow: hidden;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        ul {
          text-align: left;
          padding: 0;
          margin: 0;
          list-style: none;

          li {
            margin: 1.5rem 0;

            a {
              color: $colorBase;
              font-size: 4.5rem;
              text-decoration: none;
              text-transform: uppercase;
              @include underline-hover-anchor($colorBase);
            }
          }
        }
      }

      .nav-images {
        @include content-right(60%);
        height: 100%;

        svg {
          width: 100%;
          height: 100%;
          padding: $gapStandard;
        }
      }
    }
  }
}
</style>
