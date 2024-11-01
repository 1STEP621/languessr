import { Language } from "./base";

export default class KotlinLanguage extends Language {
  public constructor() {
    super({
      displayName: "Kotlin",
      highlightType: "kotlin",
      programs: [
`fun main() {
    println("Hello, World!")
}`,
`fun fizzBuzz(n: Int): String {
    return when {
        n % 3 == 0 && n % 5 == 0 -> "FizzBuzz"
        n % 3 == 0 -> "Fizz"
        n % 5 == 0 -> "Buzz"
        else -> n.toString()
    }
}

fun main() {
    for (i in 1..100) {
        println(fizzBuzz(i))
    }
}`,
`fun bubbleSort(arr: IntArray): IntArray {
    val sorted = arr.copyOf()
    val n = sorted.size
    for (i in 0 until n) {
        for (j in 0 until n - 1) {
            if (sorted[j] > sorted[j + 1]) {
                val temp = sorted[j]
                sorted[j] = sorted[j + 1]
                sorted[j + 1] = temp
            }
        }
    }
    return sorted
}`
      ],
      hints: [
        "Androidアプリケーション開発に使われるプログラミング言語です。",
        "JetBrainsによって開発されました。",
      ]
    })
  }
}
