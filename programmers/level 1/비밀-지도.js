function solution(n, arr1, arr2) {
    
    function binary(num){
        let i = num;
        let res = (num%2).toString();
        
        while(i > 1){
            i = parseInt(i/2);
            res = i%2 + res; 
        }
        
        if(res.length < n){
            res = "0".repeat(n-res.length) + res;
        }
        
        return res;
    }
    
    const barr1 = arr1.map(v => binary(v));
    const barr2 = arr2.map(v => binary(v));
    
    return barr1.map((v, i) => {
        let map = '';
        
        for(let j = 0; j < n; j++){
            if(v[j] === "1" || barr2[i][j] === "1"){
                map += "#";
            } else {
                map += " "
            }
        }
        
        return map;
    });
}