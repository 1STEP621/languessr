import { Language } from "./base";

export default class FishLanguage extends Language {
  public constructor() {
    super({
      displayName: "><> (Fish)",
      highlightType: null,
      programs: [
`"Hello, world!"0r>o:?v;
                 ^   <`,
`0v       ^ "Fizz"1<
v>1+:aa*=?v:3%1&?!/:5%?v
\0"zzuB" v;v   n?&:?&:&<
 &0~&oooo< v    ~&^?
 v      o a<`
      ],
      hints: [
        "スタックベースの難解プログラミング言語です。",
        ">, ^, <, vの4つの記号を使ってプログラムを移動する命令があるのが特徴です。",
      ]
    })
  }
}
