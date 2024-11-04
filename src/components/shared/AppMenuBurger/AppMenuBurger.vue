<script setup lang="ts">
defineProps<{
  isOpen: boolean;
}>();
</script>

<template>
  <div class="app-menu-burger">
    <input
      :checked="isOpen"
      class="app-menu-burger__checkbox"
      data-element="burger"
      type="checkbox"
    />

    <div class="hamburger-lines">
      <span class="line line__first"></span>
      <span class="line line__second"></span>
      <span class="line line__last"></span>
    </div>
  </div>
</template>

<style lang="scss" src="./AppMenuBurger.scss" />
