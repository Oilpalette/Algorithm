function solution(x) {
    const sum = Array.from(String(x), Number).reduce((acc, cur) => acc+cur);
    
    return !(x % sum)
}