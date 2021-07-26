function solution(strings, n) {
    strings.sort((a, b) => {
        let first = a[n];
        let second = b[n];
        
        if(first === second) return (a>b) - (b>a);
        else return (first>second) - (second>first);
    });
    
    return strings;
}
