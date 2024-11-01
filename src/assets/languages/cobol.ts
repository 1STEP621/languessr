import { Language } from "./base";

export default class COBOLLanguage extends Language {
  public constructor() {
    super({
      displayName: "COBOL",
      highlightType: "cobol",
      programs: [
`       IDENTIFICATION DIVISION.
       PROGRAM-ID. HelloWorld.
       PROCEDURE DIVISION.
           DISPLAY "Hello, World!".
           STOP RUN.`,
      ],
      hints: [
        "ビジネスアプリケーション開発に使われるプログラミング言語です。",
        "古くから銀行などの信頼性が求められるシステムで使われています。",
      ]
    })
  }
}
