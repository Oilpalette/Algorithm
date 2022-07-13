function solution(n, m) {
    var answer = [];
    
    const findGcd = function(a, b){
     return a%b ? findGcd(b, a%b) : b
    }
    
    answer[0] = findGcd(m, n);
    answer[1] = n * m / answer[0];
    
    return answer;
}