import { Language } from "./base";

export default class CLanguage extends Language {
  public constructor() {
    super({
      displayName: "C言語",
      highlightType: "c",
      programs: [
`#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}`,
`#include <stdio.h>

int main() {
    for (int i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0)
            printf("FizzBuzz\n");
        else if (i % 3 == 0)
            printf("Fizz\n");
        else if (i % 5 == 0)
            printf("Buzz\n");
        else
            printf("%d\n", i);
    }
    return 0;
}`,
`void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}`,
`#include <stdio.h>
#include <stdbool.h>

bool isPrime(int num) {
    if (num <= 1) return false;
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}`
      ],
      hints: [
        "プログラミング言語の中でもっとも基本的な言語です。",
        "ポインタを使ったメモリ管理が必要です。",
      ]
    })
  }
}
