function solution(a, b) {
    const arr = new Array(Math.abs(b-a)+1).fill(0).map((_, i) => a <= b ? a+i : b+i);
    return arr.reduce((acc, cur) => acc + cur);
}