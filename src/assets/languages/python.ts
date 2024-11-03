import { Language } from "./base";

export default class PythonLanguage extends Language {
  public constructor() {
    super({
      displayName: "Python",
      highlightType: "python",
      programs: [
        `print("Hello, World!")`,
        `for i in range(1, 101):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    if i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)`
      ],
      hints: [
        "シンプルで読みやすいプログラミング言語です。",
        "インデントによってブロックを表現します。",
        "様々なライブラリが豊富に用意されています。"
      ],
      difficulty: "easy",
    })
  }
}
