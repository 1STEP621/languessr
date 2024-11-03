import { Language } from "./base";

export default class OokLanguage extends Language {
  public constructor() {
    super({
      displayName: "Ook!",
      highlightType: null,
      programs: [
`Ook. Ook? Ook! Ook. Ook! Ook? Ook! Ook! Ook! Ook. Ook? Ook? Ook! Ook. Ook. Ook. Ook. Ook.Ook. Ook? Ook! Ook! Ook. Ook? Ook? Ook. Ook. Ook? Ook? Ook! Ook. Ook. Ook. Ook. Ook. Ook? Ook? Ook. Ook. Ook? Ook? Ook. Ook! Ook. Ook. Ook! Ook. Ook. Ook! Ook? Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook. Ook! Ook. Ook? Ook! Ook! Ook! Ook. Ook. Ook! Ook. Ook. Ook? Ook. Ook! Ook! Ook! Ook. Ook. Ook! Ook? Ook! Ook. Ook? Ook? Ook! Ook! Ook. Ook. Ook? Ook! Ook! Ook. Ook? Ook. Ook! Ook! Ook! Ook. Ook! Ook. Ook. Ook? Ook! Ook! Ook. Ook? Ook? Ook! Ook.`
      ],
      hints: [
        "Ook., Ook!, Ook? の3つの単語だけで構成されます。",
        "Brainfuckの派生言語の一つです。"
      ],
      difficulty: "easy",
    })
  }
}
