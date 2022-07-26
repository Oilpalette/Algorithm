function solution(d, budget) {
    let execution = budget;
    const sorted = d.sort((a, b) => a-b);
    
    for(let i = 0; i < sorted.length; i++){
        execution -= sorted[i];
        
        if(execution < 0){
            return i;
        }
    }

    return d.length;
}