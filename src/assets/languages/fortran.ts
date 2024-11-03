import { Language } from "./base";

export default class FORTRANLanguage extends Language {
  public constructor() {
    super({
      displayName: "FORTRAN",
      highlightType: "fortran-free-form",
      programs: [
`program hello
    print *, "Hello, World!"
end program hello`,
`program fizzbuzz
    implicit none
    integer :: i

    do i = 1, 100
        if (mod(i, 3) == 0 .and. mod(i, 5) == 0) then
            print *, "FizzBuzz"
        else if (mod(i, 3) == 0) then
            print *, "Fizz"
        else if (mod(i, 5) == 0) then
            print *, "Buzz"
        else
            print *, i
        end if
    end do
end program fizzbuzz`,
`program bubble_sort
    implicit none
    integer, parameter :: n = 5
    integer :: i, j, temp
    integer :: arr(n) = [5, 3, 8, 1, 2]

    do i = 1, n
        do j = 1, n - 1
            if (arr(j) > arr(j + 1)) then
                temp = arr(j)
                arr(j) = arr(j + 1)
                arr(j + 1) = temp
            end if
        end do
    end do`
      ],
      hints: [
        "数値計算が得意なプログラミング言語です。",
        "宇宙開発にも使われることがあります。",
      ],
      difficulty: "normal",
    })
  }
}
