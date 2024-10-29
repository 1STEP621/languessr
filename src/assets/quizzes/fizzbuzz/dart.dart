void main() {
  List.generate(100, (idx_) {
    var idx = idx_ + 1;
    if (idx % 3 == 0 && idx % 5 == 0) {
      return "FizzBuzz";
    } else if (idx % 3 == 0) {
      return "Fizz";
    } else if (idx % 5 == 0) {
      return "Buzz";
    } else {
      return idx;
    }
  }).forEach(print);
}
