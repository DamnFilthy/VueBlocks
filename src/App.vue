<script setup lang="ts">
import { RouterView } from 'vue-router';

import AppHeader from '@/components/shared/AppHeader/AppHeader.vue';
import AppFooter from '@/components/shared/AppFooter/AppFooter.vue';
</script>

<template>
  <app-header />

  <div class="app-page">
    <RouterView />
  </div>

  <app-footer />
</template>
