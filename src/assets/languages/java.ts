import { Language } from "./base";

export default class JavaLanguage extends Language {
  public constructor() {
    super({
      displayName: "Java",
      highlightType: "java",
      programs: [
        `class Main {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
`,
        `class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 100; i++) {
            if (i % 15 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}`
      ],
      hints: [
          "\"30億のデバイスで走る\"というスローガンがあります。",
        "1996年にサン・マイクロシステムズ(現オラクル)によって開発されたオブジェクト指向言語です。",
      ]
    })
  }
}
