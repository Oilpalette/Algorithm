function solution(arr1, arr2) {
    return arr1.map((v, i) => Array.isArray(v) ? solution(v, arr2[i]) : v+arr2[i]);
}