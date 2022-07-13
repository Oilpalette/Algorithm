function solution(n){
    const arr = new Array(n).fill('');
    return arr.map((v, i) => i%2 ? "박" : "수").reduce((acc, cur) => acc+cur);
}