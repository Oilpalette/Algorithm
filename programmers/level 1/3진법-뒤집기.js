function solution(n) {
    
    function reversedTernaryConvert(num){
        let res = '';
        let val = num;
        while(val > 0){
            res += val%3;
            val = Math.floor(val/3);
        }
        return res;
    }
    
    const reversed = reversedTernaryConvert(n).split('');
    
    return reversed.reduce((acc, cur, idx) => acc + Number(cur*Math.pow(3, reversed.length-(idx+1))), 0);
}