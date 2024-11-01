import { Language } from "./base";

export default class JavaScriptLanguage extends Language {
  public constructor() {
    super({
      displayName: "JavaScript",
      highlightType: "javascript",
      programs: [
        `console.log("Hello, world!");`,
        `for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}`
      ],
      hints: [
        "Webページの動的な挙動を実装するためのプログラミング言語です。",
        "クライアントサイドで動作する言語です。",
        "ECMAScriptという仕様に準拠しています。"
      ]
    })
  }
}
