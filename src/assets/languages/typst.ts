import { Language } from "./base";

export default class TypstLanguage extends Language {
  public constructor() {
    super({
      displayName: "Typst",
      highlightType: null,
      programs: [
        `#for value in range(1, 101) [
  #if calc.rem(value, 15) == 0 [
    FizzBuzz
  ] else if calc.rem(value, 3) == 0 [
    Fizz
  ] else if calc.rem(value, 5) == 0 [
    Buzz
  ] else [
    #value
  ] #linebreak()
]`
      ]
    })
  }
}
