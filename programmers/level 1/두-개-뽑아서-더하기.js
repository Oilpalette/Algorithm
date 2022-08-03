function solution(numbers) {
    // 주말에 코드 개선해보기
    const res = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+ 1; j < numbers.length; j++){
            res.push(numbers[i]+numbers[j]);
        }
    }
    return [...new Set(res)].sort((a,b) => a-b);
}