function solution(array, commands) {
    return commands.map((el) => {
      const sorted = array.slice(el[0]-1, el[1]).sort((a, b) => a-b);
      return sorted[el[2]-1];
    });
}