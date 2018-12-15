/* xxx */

// My longest solution

function f(input) {
    let c = 0;
    let d = 0;
    let aa = [];
    
    if (input == null) {
    return aa;
    } else if (input.length > 0) {
        for (let i = 0; i < input.length; i++) {
            if (Math.sign(input[i]) > 0) {
                c++;
            } else if (Math.sign(input[i]) <= 0) {
            d+=input[i];
            }
        }
        aa.push(c);
        aa.push(d);
    return aa;
    } else
    return aa;
}

f([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]);
// Should return [8, -50].

// 1st improvement


// Other solutions


/* That's all folks! */
