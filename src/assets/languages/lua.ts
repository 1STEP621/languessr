import { Language } from "./base";

export default class LuaLanguage extends Language {
  public constructor() {
    super({
      displayName: "Lua",
      highlightType: "lua",
      programs: [
`function fizzbuzz(n)
    if n % 3 == 0 and n % 5 == 0 then
        return "FizzBuzz"
    elseif n % 3 == 0 then
        return "Fizz"
    elseif n % 5 == 0 then
        return "Buzz"
    else
        return tostring(n)
    end
end

for i = 1, 100 do
    print(fizzbuzz(i))
end`,
`function bubble_sort(arr)
    local n = #arr
    for i = 1, n do
        for j = 1, n - 1 do
            if arr[j] > arr[j + 1] then
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
            end
        end
    end
    return arr
end`,
`function is_prime(n)
    if n < 2 then return false end
    for i = 2, math.sqrt(n) do
        if n % i == 0 then return false end
    end
    return true
end

function primes(n)
    local result = {}
    local count = 0
    local i = 2
    while count < n do
        if is_prime(i) then
            table.insert(result, i)
            count = count + 1
        end
        i = i + 1
    end
    return result
end`,
      ],
      hints: [
        "スクリプト言語の一つです。",
        "汎用性が高く、組み込みスクリプトとしても使われます。",
      ]
    })
  }
}
