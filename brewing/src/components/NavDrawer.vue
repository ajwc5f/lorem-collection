<template>
  <nav>
    <a href="#">Products</a>
    <a href="#">Our Story</a>
    <a href="#">Find Us</a>
    <a href="#">FAQ</a>
    <a href="#">Shop</a>
  </nav>
</template>

<script>
export default {
  name: "NavContainer"
};
</script>

<style scoped lang="scss">
nav {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: inherit;
  color: $colorBase;
  padding: $sidebarHeaderSize $sidebarHeaderSize 0 calc(3 * #{$sidebarHeaderSize});

  a {
    color: $colorBase;
    font-size: 4.25rem;
    text-decoration: none;
    text-transform: uppercase;
    margin: 1rem 0;
  }
}
</style>