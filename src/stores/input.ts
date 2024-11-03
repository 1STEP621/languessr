import { defineStore } from "pinia"
import { ref } from "vue";
import { useViewStore, type ViewType } from "./view";

function withResolvers<T>() {
  let resolve: (value: T | PromiseLike<T>) => void;
  let promise = new Promise<T>(r => resolve = r);
  // @ts-ignore
  return {
    promise,
    resolve(value: T) {
      resolve(value);
    }
  };
}

export type KeyType = "up" | "left" | "right" | "down" | "a" | "home";

export const useInputStore = defineStore("input", () => {
  let resolvers = withResolvers<string>();
  let pressedButtons = new Set<string>();
  let keys = new Map<string, KeyType>();
  let events = ref<Record<KeyType, () => any>>({
    up: () => {},
    right: () => {},
    down: () => {},
    left: () => {},
    a: () => {},
    home: () => {},
  });

  function press(value: string) {
    // NOTE: Promise の解決（生のキー入力）
    resolvers.resolve(value);
    resolvers = withResolvers<string>();

    // NOTE: キーイベントを発生（整理されたキー入力）
    if (keys.get(value)) events.value[keys.get(value)!]();
  }

  // NOTE: キーの検知
  addEventListener("keydown", evt => press(evt.key));

  // NOTE: ゲームパッドの検知
  setInterval(() => {
    const gamepads = navigator.getGamepads();
    const gamepad = gamepads.find(g => g?.buttons.some(b => !b.touched)) ?? null;
    if (gamepad) {
      // NOTE: ボタンごとに押下状況を取得し、新規押下ならイベントを発火
      for (let i = 0; i < gamepad.buttons.length; i++) {
        const button = gamepad.buttons[i];
        const id = `${gamepad.id} / ${i}`;

        if (button.pressed) {
          if (!pressedButtons.has(id)) {
            console.log(`[${Math.floor(performance.now() / 1000)}sec] Pressed button ${i}`);
            press(id);
            pressedButtons.add(id);
            break;
          }
        } else {
          pressedButtons.delete(id);
        }
      }
    }
  }, 1000 / 60);

  return {
    async wait(): Promise<string> {
      return resolvers.promise;
    },
    keys,
    events,
  };
});
