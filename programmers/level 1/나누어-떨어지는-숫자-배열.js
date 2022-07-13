function solution(arr, divisor) {
    const res = arr.filter(v => !(v%divisor));
    return res.length > 0 ? res.sort((a, b) => a-b) : [-1];
}