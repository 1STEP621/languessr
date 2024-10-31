import { Language } from "./base";

export default class ScalaLanguage extends Language {
  public constructor() {
    super({
      displayName: "Scala",
      highlightType: "scala",
      programs: [
        `@main def helloWorld(): Unit =
  println("Hello, world!")`,
        `@main def fizzBuzz(): Unit =
  for
    i <- 1 to 100
  do
    println:
      (i % 3, i % 5) match
        case (0, 0) => "FizzBuzz"
        case (0, _) => "Fizz"
        case (_, 0) => "Buzz"
        case (_, _) => i`
      ]
    })
  }
}
