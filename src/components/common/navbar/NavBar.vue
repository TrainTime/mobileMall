<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  position: relative;
  z-index: 999;
  display: flex;
  line-height: 44px;
  text-align: center;

  box-shadow: 0 3px 9px rgba(100, 100, 100, 0.1);
}

.left,
.right,
.center {
  background-color: var(--color-high-text);
}

.left,
.right {
  width: 60px;
}

.center {
  flex: 1;
}
</style>
