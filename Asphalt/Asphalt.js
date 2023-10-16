function potholePatchCounter(S) {
    const N = S.length;
    let patches = 0;

    for (let i = 0; i < N; i++) {
        if (S[i] === 'X') {
            patches++;
            i += 2; 
        }
    }

    return patches;
}


console.log(potholePatchCounter(".X..X"));       
console.log(potholePatchCounter("X.XXXXX.X."));   
console.log(potholePatchCounter("XX.XXX.."));      
console.log(potholePatchCounter("XXXX"));          
console.log(potholePatchCounter('.X...XX'));       

