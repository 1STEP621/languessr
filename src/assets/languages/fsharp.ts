import { Language } from "./base";

export default class FSharpLanguage extends Language {
  public constructor() {
    super({
      displayName: "F#",
      highlightType: "fsharp",
      programs: [
`[<EntryPoint>]
let main argv =
    printfn "Hello, World!"
    0`,
`let fizzBuzz n =
    match (n % 3, n % 5) with
    | (0, 0) -> "FizzBuzz"
    | (0, _) -> "Fizz"
    | (_, 0) -> "Buzz"
    | _ -> string n

[<EntryPoint>]
let main argv =
    for i in 1 .. 100 do
        printfn "%s" (fizzBuzz i)
    0`,
`let bubbleSort (arr: int[]) =
    let n = arr.Length
    let mutable sorted = arr
    for _ in 0 .. n - 1 do
        for j in 0 .. n - 2 do
            if sorted.[j] > sorted.[j + 1] then
                let temp = sorted.[j]
                sorted.[j] <- sorted.[j + 1]
                sorted.[j + 1] <- temp
    sorted`
      ],
      hints: [
        ".NET Framework上で動作する関数型プログラミング言語です。",
        "Microsoftによって開発されました。",
        "C#との相互運用性を持ちます。",
      ]
    })
  }
}
