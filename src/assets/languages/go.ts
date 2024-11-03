import { Language } from "./base";

export default class GoLanguage extends Language {
  public constructor() {
    super({
      displayName: "Go",
      highlightType: "go",
      programs: [
`package main

import "fmt"

func main() {
    fmt.Println("Hello, world!")
}`,
`package main

import "fmt"

func main() {
    for i := 1; i <= 100; i++ {
        if i%3 == 0 && i%5 == 0 {
            fmt.Println("FizzBuzz")
        } else if i%3 == 0 {
            fmt.Println("Fizz")
        } else if i%5 == 0 {
            fmt.Println("Buzz")
        } else {
            fmt.Println(i)
        }
    }
}`
      ],
      hints: [
        "Googleによって開発されたプログラミング言語です。",
        "静的型付け・メモリ安全性・ガベージコレクションを持つ言語です。",
        "Gopherというキャラクターがマスコットです。",
      ],
      difficulty: "easy",
    })
  }
}
