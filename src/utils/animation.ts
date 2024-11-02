import { type App, type Component, createApp } from "vue";

let currentAnimation: { app: App<Element>; container: Element; } | null = null;

/**
 * 指定されたアニメーション用コンポーネントを再生します。
 * @param component コンポーネント
 */
export function playAnimation(component: Component) {
  if (currentAnimation) {
    currentAnimation.container.remove();
    currentAnimation.app.unmount();
    currentAnimation = null;
  }

  const container = document.createElement("div");
  container.ariaHidden = "true";
  const app = createApp(component, {
    onAnimationEnd: () => {
      container.remove();
      app.unmount();
    }
  });
  app.mount(container);
  document.body.appendChild(container);

  currentAnimation = { app, container };
}
