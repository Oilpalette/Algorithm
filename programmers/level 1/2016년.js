function solution(a, b) {
    const date = new Date(2016,a-1,b).toString().split(" ");
    return date[0].toUpperCase();
}