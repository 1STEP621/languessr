import { Language } from "./base";

export default class DLanguage extends Language {
  public constructor() {
    super({
      displayName: "D言語",
      highlightType: "d",
      programs: [
        `import std.stdio;

void main() {
    writeln("Hello, World!");
}`,
        `import std.stdio;

void main() {
    foreach (int i; 1..101) {
        if (i % 3 == 0 && i % 5 == 0) {
            writeln("FizzBuzz");
        } else if (i % 3 == 0) {
            writeln("Fizz");
        } else if (i % 5 == 0) {
            writeln("Buzz");
        } else {
            writeln(i);
        }
    }
}`
      ],
      hints: [
        "C言語をベースにメモリ安全を目指したプログラミング言語です。",
        "強い静的型付けを持ちます。"
      ],
      difficulty: "normal",
    })
  }
}
