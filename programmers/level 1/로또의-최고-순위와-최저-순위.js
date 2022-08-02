function solution(lottos, win_nums) {
    const same_nums = lottos.filter(n => win_nums.includes(n));
    const uncertain_nums = lottos.filter(n => n === 0);
    
    const max = 7 - same_nums.length - uncertain_nums.length;
    const min = 7 - same_nums.length;
    
    return [max > 6 ? 6 : max, min > 6 ? 6 : min]
}