import { Language } from "./base";

export default class HSPLanguage extends Language {
  public constructor() {
    super({
      displayName: "HSP",
      highlightType: null,
      programs: [
`mes "Hello, World!"
stop`,
`for i, 1, 100
    if i % 15 = 0 : mes "FizzBuzz" 
    else if i % 3 = 0 : mes "Fizz" 
    else if i % 5 = 0 : mes "Buzz"
    else : mes i
next
stop`
      ],
      hints: [
        "Windows用のプログラミング言語です。",
        "ゲーム開発やアプリケーション開発に使われます。",
      ],
      difficulty: "normal",
    })
  }
}
