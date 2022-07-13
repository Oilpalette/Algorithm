function solution(s) {
    const half = s.length/2;
    return half%1 ? s[half-.5] : s.substring(half-1, half+1);
}