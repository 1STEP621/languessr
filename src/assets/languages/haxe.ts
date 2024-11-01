import { Language } from "./base";

export default class HaxeLanguage extends Language {
  public constructor() {
    super({
      displayName: "Haxe",
      highlightType: "haxe",
      programs: [
        `function main(): Void {
    Sys.println("Hello, world!");
}`,
        `function main(): Void {
    for (i in 1...101) {
        var result: String = "";
        if (i % 3 == 0) result += "Fizz";
        if (i % 5 == 0) result += "Buzz";
        Sys.println(result == "" ? i : result);
    }
}`
      ],
      hints: [
        "JavaScriptの代替言語(AltJS)の一種で、オブジェクト指向・関数型の言語です。",
        "様々なターゲットにコンパイルできることが有名で、AVM、Java VM、独自の仮想マシンであるNeko及びHashLinkのバイトコード、JavaScript、ActionScript 3、C++、Cppia、C#、Java、PHP、Python 3、Luaに変換されます。"
      ]
    })
  }
}
