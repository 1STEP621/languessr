/**
 * `min` から `max` までの範囲の値をランダムで取得します。
 * @param min 最小値
 * @param max 最大値
 */
export function getRandomBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * `arr` をシャッフルします。
 * @param arr 対象の配列
 */
export function shuffleArray<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = getRandomBetween(0, i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * `arr` からランダムな要素を取得します。
 * @param arr 対象の配列
 */
export function pickArrayByRandom<T>(arr: T[]) {
  return arr[getRandomBetween(0, arr.length)];
}
