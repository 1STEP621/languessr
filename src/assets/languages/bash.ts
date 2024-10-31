import { Language } from "./base";

export default class BashLanguage extends Language {
  public constructor() {
    super({
      displayName: "Bash",
      highlightType: "bash",
      programs: [
`echo Hello, world!`,
`for ((i = 1; i <= 30; i++)); do
    if (($i % 15 == 0)); then
        echo fizzbuzz
    elif (($i % 3 == 0)); then
        echo fizz
    elif (($i % 5 == 0)); then
        echo buzz
    else
        echo $i
    fi
done`
      ]
    })
  }
}
