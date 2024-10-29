function main(): Void {
    for (i in 1...101) {
        var result: String = "";
        if (i % 3 == 0) result += "Fizz";
        if (i % 5 == 0) result += "Buzz";
        Sys.println(result == "" ? i : result);
    }
}
