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
  <svg :class="$style.cross" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#206aff">
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </svg>
</template>

<style module>
.cross {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  animation: incorrect 0.5s ease-out;
}

@keyframes incorrect {
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
