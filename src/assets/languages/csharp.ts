import { Language } from "./base";

export default class CsharpLanguage extends Language {
  public constructor() {
    super({
      displayName: "C#",
      highlightType: "c#",
      programs: [
        `using System;

class Main {
    static void Main() {
        Console.WriteLine("Hello, world!");
    }
}`,
        `using System;

class Program {
    static void Main() {
        for (int i = 1; i <= 100; i++)
        {
            if (i % 3 == 0 && i % 5 == 0)
            {
                Console.WriteLine("FizzBuzz");
            }
            else if (i % 3 == 0)
            {
                Console.WriteLine("Fizz");
            }
            else if (i % 5 == 0)
            {
                Console.WriteLine("Buzz");
            }
            else
            {
                Console.WriteLine(i);
            }
        }
    }
}
`
      ],
      hints: [
        "Microsoftによって開発されたプログラミング言語です。",
        ".NET Framework上で動作します。",
      ],
      difficulty: "normal",
    })
  }
}
