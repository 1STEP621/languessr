import { defineStore } from "pinia"
import { ref } from "vue";

export const useViewStore = defineStore("view", () => {
  const state = ref<"game" | "disconnected">("game");

  // NOTE: ゲームパッドが切断されたら強制的に切断画面へ移動
  addEventListener("gamepaddisconnected", () => state.value = "disconnected");

  return { state };
});