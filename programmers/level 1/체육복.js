function solution(n, lost, reserve) {
    let num = n-lost.length;
    let check = new Array(n+1).fill(false);
    
    for(let i = lost.length-1; i >= 0; i--){
        let s = lost[i]-1;
        let l = lost[i]+1;
        if(reserve.includes(s) && !check[s]){
            num++;
            check[s] = true;
        } else if(reserve.includes(l) && !check[l]){
            num++;
            check[l] = true;
        }
    }
    
    return num;
}