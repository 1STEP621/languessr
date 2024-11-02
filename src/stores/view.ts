import { defineStore } from "pinia"
import { ref, watch } from "vue";

export type ViewType = ReturnType<typeof useViewStore>["state"];

export const useViewStore = defineStore("view", () => {
  const state = ref<"calibration" | "title" | "countdown" | "game" | "result" | "disconnected">("calibration");

  watch(state, value => {
    console.trace(`[${Math.floor(performance.now() / 1000)}sec] View changed to: ${value}`);
  });

  // NOTE: ゲームパッドが切断されたら強制的に切断画面へ移動
  addEventListener("gamepaddisconnected", () => state.value = "disconnected");

  return { state };
});
