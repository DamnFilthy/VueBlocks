<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useSettingsStore } from '@/stores/settings';

const settingsStore = useSettingsStore();

const route = useRoute();
const showBurger = ref(false);

watch(
  () => route.name,
  async (newName) => {
    if (newName !== 'home') {
      showBurger.value = true;
    } else {
      showBurger.value = false;
    }
  }
);
</script>

<template>
  <div class="app-header">
    <div class="app-header__logo-block">
      <div v-if="showBurger" class="app-burger" @click="settingsStore.toggleSidebar">b</div>

      <router-link to="/" class="header-logo">
        <img class="header-logo__icon" src="@/assets/header-logo.png" />
        <div class="header-logo__text">VueBlocks</div>
      </router-link>
    </div>

    <div class="header-nav">
      <ul class="header-nav__list">
        <li class="header-nav__item">
          <router-link to="/demos">Demos</router-link>
        </li>
        <li class="header-nav__item">
          <a href="https://github.com/DamnFilthy/VueBlocks">Github</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" src="./AppHeader.scss" />
