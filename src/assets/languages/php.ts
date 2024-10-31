import { Language } from "./base";

export default class PHPLanguage extends Language {
  public constructor() {
    super({
      displayName: "PHP",
      highlightType: "php",
      programs: [
        `<?php
echo "Hello, world!";
?>`,
        `<?php
for ($i = 1; $i <= 100; $i++) {
    if ($i % 3 == 0 && $i % 5 == 0) {
        echo "FizzBuzz\n";
    } elseif ($i % 3 == 0) {
        echo "Fizz\n";
    } elseif ($i % 5 == 0) {
        echo "Buzz\n";
    } else {
        echo $i . "\n";
    }
}
?>`
      ]
    })
  }
}
