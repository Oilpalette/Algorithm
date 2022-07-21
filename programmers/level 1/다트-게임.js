function solution(dartResult) {
    //3번의 기회를 배열로 분리
    const dart = dartResult.split(/(\d{1,2}\D\W?)/).filter(v => v.length > 1);
    
    //보너스 계산 객체
    const bonusCalc = {
        "S": (n)=>Math.pow(n,1),
        "D": (n)=>Math.pow(n,2),
        "T": (n)=>Math.pow(n,3)
    }
    
    //스타상 계산을 위한, 이전 점수 저장 변수
    let prev = 0;
    
    function calc(turn){
        const sbo = turn.split(/(\d{1,2})(\D)/);
        [blank, score, bonus, opt] = sbo;
        
        let res = !opt ? 0 : opt === "*" ? prev : 0;
        const val = bonusCalc[bonus](score) * (!opt ? 1 : opt === "*" ? 2 : -1);
        
        prev = val;
        return res+val;
    }
    
    return dart.map(el => calc(el)).reduce((acc,cur) => acc+cur);
}