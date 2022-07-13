function solution(n, m) {
    const res = [];
    const square = new Array(n).fill('*').reduce((acc, cur) => acc+cur);
    
    for(let i = 0; i < m; i++){
        res.push(square);
    }

    return res.reduce((acc, cur) => acc + '\n' + cur);
}