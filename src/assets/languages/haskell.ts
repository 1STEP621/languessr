import { Language } from "./base";

export default class HaskellLanguage extends Language {
  public constructor() {
    super({
      displayName: "Haskell",
      highlightType: "haskell",
      programs: [
`main :: IO ()
main = putStrLn "Hello, World!"`,
`fizzBuzz :: Int -> String
fizzBuzz n
    | n \`mod\` 15 == 0 = "FizzBuzz"
    | n \`mod\` 3 == 0  = "Fizz"
    | n \`mod\` 5 == 0  = "Buzz"
    | otherwise       = show n

main :: IO ()
main = mapM_ (putStrLn . fizzBuzz) [1..100]`,
`bubbleSort :: Ord a => [a] -> [a]
bubbleSort xs = foldr (\_ acc -> bubble acc) xs [1..length xs]
  where
    bubble [] = []
    bubble [x] = [x]
    bubble (x:y:xs)
        | x > y     = y : bubble (x:xs)
        | otherwise = x : bubble (y:xs)`,
`isPrime :: Int -> Bool
isPrime n
    | n < 2     = False
    | otherwise = null [ x | x <- [2..isqrt n], n \`mod\` x == 0 ]
  where
    isqrt = floor . sqrt . fromIntegral

primes :: [Int]
primes = filter isPrime [2..]`
      ],
      hints: [
        "純粋関数型プログラミング言語です。",
        "関数型プログラミングの特徴である高階関数や型推論を持っています。",
      ]
    })
  }
}
