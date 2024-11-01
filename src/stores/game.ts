import { defineStore } from "pinia"
import { ref } from "vue";

export const useGameStore = defineStore("game", () => {
  const score = ref(0);

  return { score };
});
