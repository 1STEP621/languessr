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
      ]
    })
  }
}
