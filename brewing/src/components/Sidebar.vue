<template>
  <aside class="sidebar --br">
    <div class="sidebar__inner">
      <button class="--reset hamburger" :class="{'is-active': menuIsActive}" @click="toggleMenu"></button>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  data: function() {
    return {
      menuIsActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuIsActive = !this.menuIsActive;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sidebar {
  position: fixed;
  width: $sidebarHeaderSize;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  background: $colorBase;

  .sidebar__inner {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 1.75rem 1rem;

    .hamburger {
      cursor: pointer;
      width: 100%;
      height: 35px;
      border: none;
      position: relative;
      background: linear-gradient(to bottom, $colorPrimary 25%, transparent 25%);
      background-size: 100% 40%;
      background-repeat-x: no-repeat;
      background-position: 0 0;
      cursor: pointer;
      transition: background-size 0.2s 0.45s ease;
    }
    .hamburger:before,
    .hamburger:after {
      height: 8%;
      width: 0;
      position: absolute;
      background-color: $colorPrimary;
      content: '';
      transform: rotate(0);
      top: 40%;
      transition: transform 0.3s ease, width 0.3s 0.2s ease;
    }
    .hamburger:before,
    .hamburger:after {
      left: 0;
    }
    .hamburger.is-active {
      background-size: 0 40%;
      transition-delay: 0s;
    }
    .hamburger.is-active:before,
    .hamburger.is-active:after {
      width: 100%;
      transition: width 0.3s 0.2s ease, transform 0.3s 0.4s ease;
    }
    .hamburger.is-active:before {
      transform: rotate(-45deg);
    }
    .hamburger.is-active:after {
      transform: rotate(45deg);
    }
  }
}
</style>
