import { Language } from "./base";

export default class KAGLanguage extends Language {
  public constructor() {
    super({
      displayName: "KAG",
      highlightType: null,
      programs: [
        `[eval exp="tf.i = 1"]
*loopstart|
[if exp="tf.i % 3 == 0 && tf.i % 5 == 0"]
    FizzBuzz[r]
[elsif exp="tf.i % 3 == 0"]
    Fizz[r]
[elsif exp="tf.i % 5 == 0"]
    Buzz[r]
[else]
    [emb exp="tf.i"][r]
[endif]
[eval exp="tf.i++"]
[if exp="tf.i <= 100"][jump target=*loopstart][endif]`
      ],
      hints: [
        "ノベルゲームにおいてトップクラスに使用されている言語です。",
        "非プログラマが理解しやすく、簡単に書けるように設計されています。",
        "JavaScript ライクな言語である TJS を埋め込むことができます。"
      ],
      difficulty: "hard",
    })
  }
}
