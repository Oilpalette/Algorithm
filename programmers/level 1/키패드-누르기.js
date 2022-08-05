function solution(numbers, hand) {
    var answer = '';
    
    const left = [1, 4, 7];
    const right = [3, 6, 9];
    const middle = [2, 5, 8, 11];
    
    let curLeft = '10';
    let curRight = '12';
    
    numbers = numbers.map((el) => el === 0 ? 11 : el);
    
    for(let i = 0; i < numbers.length; i++){
      if(left.includes(numbers[i])){
        answer += 'L';
        curLeft = numbers[i];
      } else if(right.includes(numbers[i])){
        answer += 'R';
        curRight = numbers[i];
      } else {
        let leftDistance = Math.abs(numbers[i] - curLeft);
        let rightDistance = Math.abs(curRight - numbers[i]);
          
        if(leftDistance < rightDistance){
          answer += 'L';
          curLeft = numbers[i];
        } else if(leftDistance > rightDistance){
          answer += 'R';
          curRight = numbers[i];
        } else {
          if(hand === 'left'){
            answer += 'L';
            curLeft = numbers[i];
          } else {
            answer += 'R';
            curRight = numbers[i];
          }
        }
      }
    }
    
    
    return answer;
}