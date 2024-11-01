import { defineStore } from "pinia"
import { ref } from "vue";

interface InputStoreEventMap {
  "top": {};
  "bottom": {};
  "left": {};
  "right": {};
}

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

export const useInputStore = defineStore("input", () => {
  let resolvers = withResolvers<string>();
  let pressedButtons = new Set<string>();

  // NOTE: キーの検知
  addEventListener("keydown", evt => {
    resolvers.resolve(evt.key);
    resolvers = withResolvers<string>();
  });

  // NOTE: ゲームパッドの検知
  function frame() {
    const gamepads = navigator.getGamepads();
    const gamepad = gamepads.find(g => g?.buttons.some(b => !b.touched)) ?? null;
    if (gamepad) {
      // NOTE: ボタンごとに押下状況を取得し、新規押下ならイベントを発火
      for (let i = 0; i < gamepad.buttons.length; i++) {
        const button = gamepad.buttons[i];
        const id = `${gamepad.id} / ${i}`;

        if (button.touched) {
          if (!pressedButtons.has(id)) {
            resolvers.resolve(id);
            resolvers = withResolvers<string>();
            pressedButtons.add(id);
          }
        } else {
          pressedButtons.delete(id);
        }
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  return {
    async wait(): Promise<string> {
      return resolvers.promise;
    }
  };
});
