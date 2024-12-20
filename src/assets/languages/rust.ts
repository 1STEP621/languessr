import { Language } from "./base";

export default class RustLanguage extends Language {
  public constructor() {
    super({
      displayName: "Rust",
      highlightType: "rust",
      programs: [
        `fn main() {
  println!("Hello, world!");
}`,
`fn main() {
  for i in 1..=100 {
    match (i % 3, i % 5) {
      (0, 0) => println!("FizzBuzz"),
      (0, _) => println!("Fizz"),
      (_, 0) => println!("Buzz"),
      (_, _) => println!("{}", i),
    }
  }
}`
      ],
      hints: [
        "Mozillaによって開発されたシステムプログラミング言語です。",
        "メモリ安全性・並行性・パフォーマンスを重視して設計されています。",
        "Rustaceanというカニがマスコットです。",
      ],
      difficulty: "normal",
    })
  }
}
