function solution(s) {
    var answer = '';
    
    const arr = s.split(' ');
    
    arr.map((val, idx) => {
        for(let i = 0; i < val.length; i++){
            if(i%2){
              answer += val[i].toLowerCase(); 
            } else {
              answer += val[i].toUpperCase(); 
            }
        }
        
        if(idx !== arr.length -1){
            answer += " "
        }
    })
    
    return answer;
}