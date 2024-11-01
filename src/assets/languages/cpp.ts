import { Language } from "./base";

export default class CppLanguage extends Language {
  public constructor() {
    super({
      displayName: "C++",
      highlightType: "c++",
      programs: [
`#include <iostream>

void main() {
  std::cout << "Hello, World!" << std::endl;
}`,
`#include <iostream>

void main() {
  for (int i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      std::cout << "FizzBuzz" << std::endl;
    } else if (i % 3 == 0) {
      std::cout << "Fizz" << std::endl;
    } else if (i % 5 == 0) {
      std::cout << "Buzz" << std::endl;
    } else {
      std::cout << i << std::endl;
    }
  }
}`
      ],
      hints: [
        "C言語の後継として開発されたプログラミング言語です。",
        "C言語との互換性が高いです。",
        "C言語の機能にオブジェクト指向プログラミングを追加した言語です。"
      ]
    })
  }
}
