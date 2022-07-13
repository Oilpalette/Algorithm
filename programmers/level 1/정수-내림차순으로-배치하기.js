function solution(n) {
    const arr = Array.from(String(n), Number).sort((a, b) => b-a);
    return Number(arr.join(''));
}