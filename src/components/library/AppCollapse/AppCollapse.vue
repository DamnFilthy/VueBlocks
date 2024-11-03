<script lang="ts" setup>
import type { CSSProperties } from 'vue';
import { ref, useTemplateRef, computed, watch } from 'vue';

enum EHiddenStyles {
  height = 0,
  overflow = 'hidden'
}

const HIDDEN_CONTAINER_STYLE: CSSProperties = {
  height: EHiddenStyles.height,
  overflow: EHiddenStyles.overflow
};

const props = withDefaults(
  defineProps<{
    isOpen: boolean;
    tag?: string;
    duration?: number;
  }>(),
  {
    tag: 'div',
    duration: 300
  }
);

const innerIsOpen = ref(props.isOpen);
const containerStyle = ref<CSSProperties>(innerIsOpen.value ? {} : HIDDEN_CONTAINER_STYLE);

const container = useTemplateRef('container');

const emit = defineEmits(['open-start', 'open-end', 'close-start', 'close-end']);

const transitionStyle = computed(() => {
  return {
    overflow: 'hidden',
    transitionProperty: 'height',
    transitionDuration: `${props.duration}ms`
  };
});

const setContainerStyle = (style: CSSProperties) => (containerStyle.value = style);

const startHeightAnimation = (fromHeight: string | number, toHeight: string | number) => {
  setContainerStyle({ ...transitionStyle.value, height: fromHeight });
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setContainerStyle({ ...containerStyle.value, height: toHeight });
    });
  });
};

const onOpen = () => {
  innerIsOpen.value = true;
  emit('open-start');
  //@ts-ignore
  startHeightAnimation(EHiddenStyles.height, `${container.value!.scrollHeight}px`);
};

const onClose = () => {
  emit('close-start');
  //@ts-ignore
  startHeightAnimation(`${container.value!.scrollHeight}px`, EHiddenStyles.height);
};

const onTransitionEnd = (event: TransitionEvent) => {
  if (event.target !== container.value) return;

  innerIsOpen.value = props.isOpen;

  if (props.isOpen) {
    setContainerStyle({});
    emit('open-end');
  } else {
    setContainerStyle(HIDDEN_CONTAINER_STYLE);
    emit('close-end');
  }
};

watch(
  () => props.isOpen,
  (newValue: boolean) => {
    if (newValue) {
      onOpen();
    } else {
      onClose();
    }
  }
);
</script>

<template>
  <component :is="tag" ref="container" :style="containerStyle" @transitionend="onTransitionEnd">
    <slot />
  </component>
</template>
