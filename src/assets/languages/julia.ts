import { Language } from "./base";

export default class JuliaLanguage extends Language {
  public constructor() {
    super({
      displayName: "Julia",
      highlightType: "julia",
      programs: [
`println("Hello, World!")`,
`function fizzbuzz(n)
    if n % 3 == 0 && n % 5 == 0
        return "FizzBuzz"
    elseif n % 3 == 0
        return "Fizz"
    elseif n % 5 == 0
        return "Buzz"
    else
        return string(n)
    end
end

for i in 1:100
    println(fizzbuzz(i))
end`,
`function bubble_sort(arr)
    n = length(arr)
    sorted = copy(arr)
    for i in 1:n
        for j in 1:(n - 1)
            if sorted[j] > sorted[j + 1]
                sorted[j], sorted[j + 1] = sorted[j + 1], sorted[j]
            end
        end
    end
    return sorted
end`,
`function is_prime(n)
    if n < 2
        return false
    end
    for i in 2:floor(sqrt(n))
        if n % i == 0
            return false
        end
    end
    return true
end

function primes()
    return filter(is_prime, 2:100)
end

println(primes()[1:10])`
      ],
      hints: [
        "高性能な数値計算が得意なプログラミング言語です。",
        "MITライセンスのオープンソースプロジェクトです。",
      ],
      difficulty: "normal",
    })
  }
}
