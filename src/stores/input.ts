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

export type KeyType = "up" | "left" | "right" | "down" | "a";

export const useInputStore = defineStore("input", () => {
  const eventTarget = new EventTarget();
  const view = useViewStore();

  let resolvers = withResolvers<string>();
  let pressedButtons = new Set<string>();
  let keys = new Map<string, KeyType>();

  function press(value: string) {
    // NOTE: Promise の解決（生のキー入力）
    resolvers.resolve(value);
    resolvers = withResolvers<string>();

    // NOTE: キーイベントを発生（整理されたキー入力）
    if (keys.get(value)) eventTarget.dispatchEvent(new Event(keys.get(value)!));
  }

  // NOTE: キーの検知
  addEventListener("keydown", evt => press(evt.key));

  // NOTE: ゲームパッドの検知
  function frame() {
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
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  return {
    async wait(): Promise<string> {
      return resolvers.promise;
    },
    keys,
    addEventListener(type: KeyType, listener: () => void, condition: { view: ViewType; }) {
      eventTarget.addEventListener(type, evt => {
        if (view.state === condition.view) {
          listener();
          evt.preventDefault();
          evt.stopPropagation();
        }
      });
    }
  };
});
