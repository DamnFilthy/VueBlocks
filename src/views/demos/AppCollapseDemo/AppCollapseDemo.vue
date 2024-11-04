<script setup lang="ts">
import { ref, computed } from 'vue';
import AppCollapse from '@/components/library/AppCollapse/AppCollapse.vue';

const isOpen = ref(true);

const items = ref(['First item', 'Second item', 'Third item', 'Four item', 'Five item']);

const onAddElement = () =>
  items.value.push(`Item-${Math.floor(Math.random() * (1000 - 1 + 1) + 1)}`);

const onDeleteElement = (el: string) =>
  (items.value = items.value.filter((element) => element !== el));

const text = computed(() => (isOpen.value ? 'Скрыть' : 'Раскрыть'));
</script>

<template>
  <main class="app-collapse-demo page-with-sidebar">
    <router-link :to="{ name: 'demos' }">Назад</router-link>

    <div class="demonstration">
      <h1 class="demonstration__title">Collapse Demo</h1>

      <div class="demonstration__actions">
        <button @click="onAddElement" class="demonstration__btn">Добавить элемент +</button>
      </div>

      <button class="app-main-button demonstration__show" @click="isOpen = !isOpen">
        {{ text }}
      </button>

      <app-collapse :is-open="isOpen">
        <ul class="demonstration__collapse">
          <li class="demonstration__collapse-item" v-for="item in items" :key="item">
            <span>{{ item }}</span>
            <button
              @click="onDeleteElement(item)"
              class="demonstration__btn demonstration__btn--warning"
            >
              X
            </button>
          </li>
        </ul>
      </app-collapse>
    </div>
  </main>
</template>

<style lang="scss" src="./AppCollapseDemo.scss" />
