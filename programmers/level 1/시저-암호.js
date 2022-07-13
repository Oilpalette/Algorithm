function solution(s, n) {
    const arr = s.split('').map(v => {
        const code = v.charCodeAt(0);
        if(65<=code && code<=90){
            return String.fromCharCode(code+n > 90 ? code+n-26 : code+n);
        } else if (97<=code && code<=122){
            return String.fromCharCode(code+n > 122 ? code+n-26 : code+n);
        } else {
            return v;
        }
    });
        
    return arr.join('');
}