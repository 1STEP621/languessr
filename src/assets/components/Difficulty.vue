<script lang="ts" setup>
defineProps<{
  name: string;
  color: string;
}>();
</script>

<template>
  <div :class="$style.difficulty" :style="{ backgroundColor: color }">
    <h2>{{ name }}</h2>
    <div :class="$style.description">
      <ul>
        <slot />
      </ul>
    </div>
  </div>
</template>

<style module>
.difficulty {
  color: #ffffff;

  border-radius: 1.5em;
  padding: 1.5em;

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 1em;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0px;
    background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 5 5"><path d="m0 4 4-4h1v1L1 5H0zM0 0h1L0 1M5 5V4L4 5"/></svg>');
    filter: invert(1);
    z-index: 0;
    opacity: 0.05;
  }

  h2 {
    font-size: 1.2em;
    font-weight: bold;
  }

  &:global(.v-enter-active),
  &:global(.v-leave-active) {
    transition: opacity 200ms ease;
  }
  &:global(.v-enter-from),
  &:global(.v-leave-to) {
    opacity: 0;
  }
}
.description {
  background-color: #ffffff20;
  color: #ffffff;

  border-radius: 1em;
  padding: 1em 1.5em;

  text-align: left;

  ul {
    padding-inline-start: 1em;
    padding-block: 0px;
  }
}
</style>
