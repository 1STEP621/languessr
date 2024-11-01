<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useInputStore } from '../../stores/input';
import { useViewStore } from '@/stores/view';
import BaseView from './BaseView.vue';
import ProgressBar from '../components/ProgressBar.vue';

const view = useViewStore();
const input = useInputStore();

const progressBarRef = ref<typeof ProgressBar>();
const definedKeys = [
  ref<string | null | undefined>(null),
  ref<string | null | undefined>(undefined),
  ref<string | null | undefined>(undefined),
  ref<string | null | undefined>(undefined)
];

onMounted(async () => {
  document.body.focus();

  for (let i = 0; i < definedKeys.length; i++) {
    const defineKey = definedKeys[i];
    defineKey.value = await input.wait();

    if (i + 1 < definedKeys.length) {
      // NOTE: 次のキーを null にする（入力待機状態を示す）
      definedKeys[i + 1].value = null;
    }
  }

  // NOTE: 設定完了
  input.keys.set(definedKeys[0].value!, "up");
  input.keys.set(definedKeys[1].value!, "down");
  input.keys.set(definedKeys[2].value!, "left");
  input.keys.set(definedKeys[3].value!, "right");
  progressBarRef.value?.startCountdown(5000);
});

function getKeyNameFromIndex(index: number) {
  const keyName = definedKeys[index].value;
  if (keyName === null) {
    return "入力を待機中…";
  } else if (typeof keyName === "undefined") {
    return "<small>未設定</small>";
  } else {
    if (keyName.includes(" / ")) {
      const buttonId = keyName.split(" / ")[1];
      return `<kbd>ゲームパッド: ${buttonId}</kbd>`;
    } else {
      return `<kbd>キーボード: ${keyName}</kbd>`;
    }
  }
}
</script>

<template>
  <BaseView :class="$style.view">
    <ProgressBar @timeout="view.state = 'title'" ref="progressBarRef" />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path
        d="M182-200q-51 0-79-35.5T82-322l42-300q9-60 53.5-99T282-760h396q60 0 104.5 39t53.5 99l42 300q7 51-21 86.5T778-200q-21 0-39-7.5T706-230l-90-90H344l-90 90q-15 15-33 22.5t-39 7.5Zm16-86 114-114h336l114 114q2 2 16 6 11 0 17.5-6.5T800-304l-44-308q-4-29-26-48.5T678-680H282q-30 0-52 19.5T204-612l-44 308q-2 11 4.5 17.5T182-280q2 0 16-6Zm482-154q17 0 28.5-11.5T720-480q0-17-11.5-28.5T680-520q-17 0-28.5 11.5T640-480q0 17 11.5 28.5T680-440Zm-80-120q17 0 28.5-11.5T640-600q0-17-11.5-28.5T600-640q-17 0-28.5 11.5T560-600q0 17 11.5 28.5T600-560ZM310-440h60v-70h70v-60h-70v-70h-60v70h-70v60h70v70Zm170-40Z" />
    </svg>
    <div>
      <p v-if="definedKeys.every(k => k.value)">セットアップが完了しました！</p>
      <template v-else>
        <p>割り当てるキーもしくはゲームパッドのボタンを押してください。</p>
        <small>ゲームパッドは丁寧にゆっくり押してください。<br>ボタンが2回押され、意図しない結果になることがあります。</small>
      </template>
      <table :class="$style.table">
        <tbody>
          <tr>
            <td>↑</td>
            <td v-html="getKeyNameFromIndex(0)" />
          </tr>
          <tr>
            <td>↓</td>
            <td v-html="getKeyNameFromIndex(1)" />
          </tr>
          <tr>
            <td>←</td>
            <td v-html="getKeyNameFromIndex(2)" />
          </tr>
          <tr>
            <td>→</td>
            <td v-html="getKeyNameFromIndex(3)" />
          </tr>
        </tbody>
      </table>
    </div>
  </BaseView>
</template>

<style module>
.view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  font-size: 1.2em;

  h1 {
    font-size: 1.2em;
  }

  svg {
    width: 2em;
    height: 2em;
    fill: currentColor;

    font-size: 2em;
  }

  div {
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }

  button {
    font-size: 1em;
    padding: 1em 3em;
    border-radius: 1em;
  }

  kbd {
    opacity: 0.6;
  }

  small {
    opacity: 0.6;
    font-size: 0.7em;
  }
}

.table {
  width: fit-content;

  padding: 1em;
  border: 1px solid currentColor;
  border-radius: 0.5em;

  margin-top: 1em;

  td:first-of-type {
    padding-right: 1em;

    width: 2em;
  }

  td:last-of-type {
    text-align: left;
  }
}
</style>
