@main def fizzBuzz(): Unit =
  for
    i <- 1 to 100
  do
    println:
      (i % 3, i % 5) match
        case (0, 0) => "FizzBuzz"
        case (0, _) => "Fizz"
        case (_, 0) => "Buzz"
        case (_, _) => i
