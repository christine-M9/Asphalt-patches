function potholePatchCounter(S) {
    let B = S.length;
    let count = 0;

    for (let i = 0; i < B; i++) {
        if (S[i] === 'X') {
            count++;
            i += 2; 
        }
    }

    return count;
}


console.log(potholePatchCounter(".X..X"));       
console.log(potholePatchCounter("X.XXXXX.X."));   
console.log(potholePatchCounter("XX.XXX.."));      
console.log(potholePatchCounter("XXXX"));          
console.log(potholePatchCounter('.X...XX'));       
console.log(potholePatchCounter('.....')); 