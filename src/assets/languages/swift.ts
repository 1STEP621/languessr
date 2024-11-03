import { Language } from "./base";

export default class SwiftLanguage extends Language {
  public constructor() {
    super({
      displayName: "Swift",
      highlightType: "swift",
      programs: [
        `for i in 1...100 {
    if i % 3 == 0 && i % 5 == 0 {
        print("FizzBuzz")
    } else if i % 3 == 0 {
        print("Fizz")
    } else if i % 5 == 0 {
        print("Buzz")
    } else {
        print(i)
    }
}`
      ],
      hints: [
        "Appleが開発したプログラミング言語です。",
        "iOSアプリケーションを開発するために使われます。",
        "安全性、効率性、パフォーマンスに優れています。"
      ],
      difficulty: "normal",
    })
  }
}
