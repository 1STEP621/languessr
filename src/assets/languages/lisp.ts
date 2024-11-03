import { Language } from "./base";

export default class LispLanguage extends Language {
  public constructor() {
    super({
      displayName: "Lisp",
      highlightType: "lisp",
      programs: [
`(defun main ()
  (format t "Hello, World!~%"))

(main)`,
`(defun fizzbuzz (n)
  (cond
    ((and (= (mod n 3) 0) (= (mod n 5) 0)) "FizzBuzz")
    ((= (mod n 3) 0) "Fizz")
    ((= (mod n 5) 0) "Buzz")
    (t (write-to-string n))))

(defun main ()
  (dotimes (i 100)
    (format t "~a~%" (fizzbuzz (1+ i)))))

(main)`,
`(defun bubble-sort (list)
  (let ((sorted nil))
    (loop
      (setf sorted nil)
      (loop for i from 0 to (- (length list) 2)
            do (when (> (nth i list) (nth (1+ i) list))
                 (rotatef (nth i list) (nth (1+ i) list))
                 (setf sorted t)))
      (when (not sorted) (return list)))))`
      ],
      hints: [
        "関数型プログラミング言語の一つです。",
        "リスト構造を持ち、再帰的な処理が得意です。",
      ],
      difficulty: "normal",
    })
  }
}
