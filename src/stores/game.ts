import { defineStore } from "pinia"
import { ref } from "vue";

export const useGameStore = defineStore("game", () => {
  const score = ref(0);

  const difficulty = ref<"easy" | "normal" | "hard">("easy");

  return { score, difficulty };
});
