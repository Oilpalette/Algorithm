function solution(left, right) {
    let res = right*(right+1)/2 - (left-1)*left/2
    
    for(let i = Math.ceil(Math.sqrt(left)); i <= Math.sqrt(right); i++){
        res -= Math.pow(i, 2)*2;
    }
    
    
    return res;
}