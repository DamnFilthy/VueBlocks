<template>
  <component
    :is="name"
    v-bind="$attrs"
    class="default-app-icon"
    :class="{ 'default-app-icon--theme': theme }"
  />
</template>

<script lang="ts">
import * as icons from './variants';

export default {
  name: 'AppIcon',
  components: {
    ...icons
  },
  props: {
    name: {
      type: String,
      required: true,
      validator(value: string) {
        return Object.keys(icons).includes(value);
      }
    },
    theme: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped src="./AppIcon.scss" />
