<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps<{
  onAnimationEnd: () => void
}>();

const elementRef = ref<HTMLElement | null>(null);

onMounted(() => {
  const element = elementRef.value!;
  console.log(element);

  setTimeout(() => {
    props.onAnimationEnd();
  }, 500);
})
</script>

<template>
  <svg :class="$style.circle" xmlns="http://www.w3.org/2000/svg" height="200px" viewBox="0 -960 960 960" width="200px" fill="#ff4800" ref="elementRef">
    <path
      d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
  </svg>
</template>

<style module>
.circle {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  animation: correct 0.5s ease-out;
}

@keyframes correct {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(0.5);
    opacity: 0;
  }
}
</style>
