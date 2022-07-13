function solution(n) {    
    const sieve = new Array(n+1).fill(true);
    
    for(let i = 2; i < Math.sqrt(n); i++){
        if(sieve[i]){
            let j = 2;
            while(i * j <= n){
                sieve[i*j] = false;
                j++;
            }
        }
    }
    
    return sieve.filter(v => v).length - 2;
}