function solution(s) {
    const sorted = s.split('').sort((a, b) => a > b ? -1 : 1);
    return sorted.join('');
}