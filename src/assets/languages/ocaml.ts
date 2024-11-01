import { Language } from "./base";

export default class OCamlLanguage extends Language {
  public constructor() {
    super({
      displayName: "OCaml",
      highlightType: "ocaml",
      programs: [
`let () =
  print_endline "Hello, World!"`,
`let fizzbuzz n =
  if n mod 3 = 0 && n mod 5 = 0 then "FizzBuzz"
  else if n mod 3 = 0 then "Fizz"
  else if n mod 5 = 0 then "Buzz"
  else string_of_int n

let () =
  for i = 1 to 100 do
    print_endline (fizzbuzz i)
  done`,
`let fizzbuzz n =
  if n mod 3 = 0 && n mod 5 = 0 then "FizzBuzz"
  else if n mod 3 = 0 then "Fizz"
  else if n mod 5 = 0 then "Buzz"
  else string_of_int n

let () =
  for i = 1 to 100 do
    print_endline (fizzbuzz i)
  done`,
`let bubble_sort arr =
  let n = Array.length arr in
  let sorted = Array.copy arr in
  let rec sort () =
    let swapped = ref false in
    for i = 0 to n - 2 do
      if sorted.(i) > sorted.(i + 1) then begin
        let temp = sorted.(i) in
        sorted.(i) <- sorted.(i + 1);
        sorted.(i + 1) <- temp;
        swapped := true
      end
    done;
    if !swapped then sort ()
  in
  sort ();
  sorted`,
`let is_prime n =
  if n < 2 then false
  else
    let rec check i =
      i * i > n || (n mod i <> 0 && check (i + 1))
    in
    check 2

let primes n =
  let rec aux acc i =
    if List.length acc >= n then acc
    else if is_prime i then aux (i :: acc) (i + 1)
    else aux acc (i + 1)
  in
  List.rev (aux [] 2)`
      ],
      hints: [
        "関数型プログラミング言語の一つです。",
        "静的型付け言語で、型推論が得意です。",
        "関数を第一級オブジェクトとして扱います。",
      ]
    })
  }
}
