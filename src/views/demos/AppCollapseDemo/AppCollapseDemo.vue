<script setup lang="ts">
import { ref, computed } from 'vue';

import AppIcon from '@/components/icons/AppIcon.vue';
import AppCollapse from '@/components/library/AppCollapse/AppCollapse.vue';

const isOpen = ref(true);
const isOpenDetails = ref(false);

const items = ref(['First item', 'Second item', 'Third item', 'Four item', 'Five item']);

const onAddElement = () =>
  items.value.push(`Item-${Math.floor(Math.random() * (1000 - 1 + 1) + 1)}`);

const onDeleteElement = (el: string) =>
  (items.value = items.value.filter((element) => element !== el));

const text = computed(() => (isOpen.value ? 'Скрыть' : 'Раскрыть'));

const codeExample = computed(() => {
  return `
  Входные параметры

  | Пропс      | Тип     | Обязательный | По умолчанию | Описание                                       |
  | ---------- | ------- | ------------ | ------------ | ---------------------------------------------- |
  | isOpen     | Boolean | Да           |              | Показывает/скрывает содержимое                 |
  | tag        | String  | Нет          | div          | В какой тег будет обёрнуто содержимое контента |
  | duration   | Number  | Нет          | 300          | Длительность анимации в ms                     |

  События

  | Событие       | Описание                               |
  | ------------- | -------------------------------------- |
  | open-start    | Запущена анимация раскрытия компонента |
  | open-end      | Контент раскрыт                        |
  | close-start   | Запущена анимация скрытия компонента   |
  | close-end     | Контент скрыт                          |

  Пример Использования

  <button @click="() => (isOpen = !isOpen)">Показать содержимое</button>
  <app-collapse :is-open="isOpen"> Контент </app-collapse>
  `;
});
</script>

<template>
  <main class="app-collapse-demo page-with-sidebar">
    <router-link :to="{ name: 'demos' }">Назад</router-link>

    <div class="demonstration">
      <a
        href="https://github.com/DamnFilthy/VueBlocks/blob/main/src/components/library/AppCollapse/AppCollapse.vue"
        target="_blank"
        class="link-title"
        style="margin-bottom: 30px"
      >
        <app-icon name="github" width="30" height="30" />

        <span>Collapse Demo</span>

        <app-icon name="link" width="30" height="30" />
      </a>

      <div class="demonstration__description">
        Компонент collapse позволяет анимированно показывать/скрывать содержимое компонента с
        эффектом "collapse" (плавное изменение высоты)
      </div>

      <div class="demonstration__description">
        Основная фишка - динамическая высота высчитывающаяся на лету с помощью javascript
      </div>

      <div class="demonstration__actions">
        <button @click="onAddElement" class="demonstration__btn">Добавить элемент +</button>
      </div>

      <button class="app-main-button demonstration__show" @click="isOpen = !isOpen">
        {{ text }}
      </button>

      <div style="max-width: 500px; margin-bottom: 30px">
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

      <h2
        class="details-title"
        :class="{ 'details-title--open': isOpenDetails }"
        @click="isOpenDetails = !isOpenDetails"
      >
        <span>Показать подробное объяснение</span>
        <app-icon name="arrow-right" />
      </h2>
      <app-collapse :is-open="isOpenDetails">
        <pre v-highlight class="highlight">
          <code class="javascript">
            {{ codeExample }}
          </code>
        </pre>
      </app-collapse>
    </div>
  </main>
</template>

<style lang="scss" src="./AppCollapseDemo.scss" />
