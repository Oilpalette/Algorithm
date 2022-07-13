function solution(price, money, count) {
    const sum = price * (count*(count+1)/2)
    return money-sum >= 0 ? 0 : sum-money;
}