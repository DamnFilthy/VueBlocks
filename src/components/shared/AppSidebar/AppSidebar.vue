<script setup lang="ts">
import { useSettingsStore } from '@/stores/settings';

const settingsStore = useSettingsStore();
</script>

<template>
  <div class="app-sidebar" :class="{ 'app-sidebar--open': settingsStore.isSidebarOpen }">
    <router-link
      :to="{ name: 'collapse' }"
      @click="settingsStore.closeSidebar"
      class="app-sidebar__link"
      >Collapse</router-link
    >
  </div>
</template>

<style lang="scss" src="./AppSidebar.scss" />
