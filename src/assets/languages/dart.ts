import { Language } from "./base";

export default class DartLanguage extends Language {
  public constructor() {
    super({
      displayName: "Dart",
      highlightType: "dart",
      programs: [
`void main() {
  List.generate(100, (idx_) {
    var idx = idx_ + 1;
    if (idx % 3 == 0 && idx % 5 == 0) {
      return "FizzBuzz";
    } else if (idx % 3 == 0) {
      return "Fizz";
    } else if (idx % 5 == 0) {
      return "Buzz";
    } else {
      return idx;
    }
  }).forEach(print);
}`
      ],
      hints: [
        "Googleによって開発されたオブジェクト指向プログラミング言語です。",
        "もともとはJavaScriptの代替言語(AltJS)として開発されました。",
        "Flutterなどによるスマホアプリケーション開発に使われます。",
      ],
      difficulty: "normal",
    })
  }
}
