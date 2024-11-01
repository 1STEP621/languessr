import { Language } from "./base";

export default class RubyLanguage extends Language {
  public constructor() {
    super({
      displayName: "Ruby",
      highlightType: "ruby",
      programs: [
        `puts "Hello, World!"`,
        `(1..100).each do |i|
  if i % 3 == 0 && i % 5 == 0
    puts "FizzBuzz"
  elsif i % 3 == 0
    puts "Fizz"
  elsif i % 5 == 0
    puts "Buzz"
  else
    puts i
  end
end`
      ],
      hints: [
        "日本人のまつもとゆきひろ氏によって開発されたプログラミング言語です。",
        "ストレスなくプログラミングを楽しめるように設計されています。",
        "多様な構文が用意されており、柔軟なプログラミングが可能です。"
      ]
    })
  }
}
