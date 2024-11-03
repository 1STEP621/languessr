import { Language } from "./base";

export default class PerlLanguage extends Language {
  public constructor() {
    super({
      displayName: "Perl",
      highlightType: "perl",
      programs: [
`for my $i (1..100) {
    if ($i % 3 == 0 && $i % 5 == 0) {
        print "FizzBuzz\\n";
    } elsif ($i % 3 == 0) {
        print "Fizz\\n";
    } elsif ($i % 5 == 0) {
        print "Buzz\\n";
    } else {
        print "$i\\n";
    }
}`,
`sub bubble_sort {
    my @arr = @_;
    my $n = @arr;

    for my $i (0..$n-1) {
        for my $j (0..$n-2) {
            if ($arr[$j] > $arr[$j + 1]) {
                @arr[$j, $j + 1] = @arr[$j + 1, $j];
            }
        }
    }
    return @arr;
}`,
`sub is_prime {
    my ($n) = @_;
    return 0 if $n < 2;
    for my $i (2..sqrt($n)) {
        return 0 if $n % $i == 0;
    }
    return 1;
}`
      ],
      hints: [
        "スクリプト言語の一つです。",
        "文字列処理が得意なプログラミング言語です。",
        "正規表現を使ったパターンマッチングが得意です。",
      ],
      difficulty: "normal",
    })
  }
}
