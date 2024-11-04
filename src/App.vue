<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import AppHeader from '@/components/shared/AppHeader/AppHeader.vue';
import AppFooter from '@/components/shared/AppFooter/AppFooter.vue';
import AppSidebar from '@/components/shared/AppSidebar/AppSidebar.vue';

import { useSettingsStore } from '@/stores/settings';
const settingsStore = useSettingsStore();

import useParallax from '@/composables/parallax';
const { moveParallaxImage } = useParallax();

const route = useRoute();

const showSidebar = ref(false);

watch(
  () => route.name,
  async (newName) => {
    if (newName !== 'home') {
      showSidebar.value = true;
    } else {
      showSidebar.value = false;
    }
  }
);
</script>

<template>
  <app-header />
  <app-sidebar v-if="showSidebar" />

  <div
    class="app-page"
    :class="[
      { 'app-page--with-sidebar': showSidebar },
      { 'app-page--menu-open': settingsStore.isSidebarOpen }
    ]"
    @mouseenter="moveParallaxImage"
    @mousemove="moveParallaxImage"
    @mouseleave="moveParallaxImage"
  >
    <RouterView />
  </div>

  <app-footer />
</template>
