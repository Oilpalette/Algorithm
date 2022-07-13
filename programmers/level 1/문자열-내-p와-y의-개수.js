function solution(s){
    const lower = s.toLowerCase();
    return [...lower.matchAll('p')].length === [...lower.matchAll('y')].length;
}