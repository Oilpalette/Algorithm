function solution(sizes) {
    const sorted = sizes.map((v) => v.sort((a, b) => a-b));
    const max = sorted.reduce((acc, cur) => [Math.max(acc[0],cur[0]), Math.max(acc[1], cur[1])]);

    return max[0]*max[1];
}