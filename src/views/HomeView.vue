<script setup lang="ts">
import { ref } from 'vue';
import AppCollapse from '@/components/AppCollapse.vue';

const isOpen = ref(false);

const items = ref(['First item', 'Second item', 'Third item', 'Four item', 'Five item']);

const onAddElement = () =>
  items.value.push(`Item-${Math.floor(Math.random() * (1000 - 1 + 1) + 1)}`);
</script>

<template>
  <main>
    <button @click="isOpen = !isOpen">Toggle</button>
    <br />
    <br />
    <button @click="onAddElement">Add Element</button>
    <app-collapse :is-open="isOpen">
      <ul class="app-footer-menu-collapse__list">
        <li v-for="item in items" :key="item">{{ item }}</li>
      </ul>
    </app-collapse>
  </main>
</template>
