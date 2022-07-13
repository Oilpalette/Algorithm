function solution(num) {
    var answer = 0;
    let n = num;
    
    while(n !== 1 && answer <= 500){
        if(n%2){ n = n*3 + 1 } 
        else { n = n/2 }
        answer++;
    }
    
    return answer < 500 ? answer : -1;
}