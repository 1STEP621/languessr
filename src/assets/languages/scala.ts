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
        case (_, _) => i`,
`def bubbleSort(seq: IndexedSeq[Int], index: Int = 0): IndexedSeq[Int] =
  if index == seq.length - 1 then
    seq
  else
    val (newSeq, newIndex) =
      if seq(index) > seq(index + 1) then
        val newSeq =
          seq
            .updated(index, seq(index + 1))
            .updated(index + 1, seq(index))
        val newIndex = if index == 0 then 0 else index - 1
        ( newSeq, newIndex )
      else
        ( seq, index + 1 )
    bubbleSort(newSeq, newIndex)`,
`import math.{ sqrt, floor }

def enumerateDivisors(x: Int, i: Int = 1, result: Seq[Int] = Seq()): Seq[Int] =
  if (i > floor(sqrt(x))) then
    result.sorted
  else
    val newResult =
      x % i match
        case 0 => result :+ i :+ x / i
        case _ => result
    enumerateDivisors(x, i + 1, newResult)`
      ],
      hints: [
        "JVM上で動作するオブジェクト指向・関数型プログラミング言語です。",
        "Javaとの相互運用性が高く、Javaのライブラリを利用することができます。",
        "Scalable Languageという名前が示すように、大規模なシステムにも適しています。",
      ],
      difficulty: "normal",
    })
  }
}
