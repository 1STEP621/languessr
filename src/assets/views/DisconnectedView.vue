<script lang="ts" setup>
import Button from '../components/Button.vue';
import BaseView from './BaseView.vue';

function reloadWindow() {
  location.reload();
}
</script>

<template>
  <BaseView :class="$style.view">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"/></svg>
    <div>
      <p>ゲームパッドが切断されました。</p>
      <p>再接続するには、以下のボタンをクリックしてください。</p>
      <p>なお、実行中のゲームは終了されます。ご了承ください。</p>
    </div>
    <Button @click="reloadWindow">
      再接続
    </Button>
  </BaseView>
</template>

<style module>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.2em;

  svg {
    width: 2em;
    height: 2em;
    fill: currentColor;

    font-size: 2em;
  }
  div {
    margin-block: 2em;
    text-align: center;

    p:first-child {
      margin-bottom: 1em;
    }
  }
  button {
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 1em;
  }
}
</style>
