import { Language } from "./base";

export default class AiScriptLanguage extends Language {
  public constructor() {
    super({
      displayName: "AiScript",
      highlightType: null,
      programs: [
`<: "Hello, world!"`,
`for (let i, 100) {
<: if (i % 15 == 0) "FizzBuzz"
elif (i % 3 == 0) "Fizz"
elif (i % 5 == 0) "Buzz"
else i
}`
      ],
      hints: [
        "JavaScript上で動作する軽量スクリプト言語です。",
        "しゅいろによって開発されました。"
      ],
    })
  }
}
