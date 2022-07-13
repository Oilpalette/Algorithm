function solution(n) {
    const x = Math.sqrt(n)
    return x%1 ? -1 : (x+1)**2;
}