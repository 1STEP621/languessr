<script lang="ts" setup>
import { ref } from 'vue';

const width = ref("100%");
let duration = 0;
let startTime = 0;

defineEmits<{
  timeout: [void];
}>();
defineExpose({
  /**
   * カウントダウンを開始します。
   * @param d 長さ（ミリ秒）
   */
  startCountdown(d: number) {
    startTime = performance.now();
    duration = d;
    requestAnimationFrame(frame);
  }
});

function frame(timestamp: number) {
  width.value = `${100 - (timestamp - startTime) / duration * 100}%`;

  if (startTime + duration > timestamp)
    requestAnimationFrame(frame);
}

</script>

<template>
  <div :class="$style.progressBar" :style="{ width }"></div>
</template>

<style module>
.progressBar {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background-color: var(--c-primary);
}
</style>
