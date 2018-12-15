/* CodeWars "Count the positives and sum the negatives"
See links & ressources in the MD file */

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


// Other solutions
function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    return [positive, negative];
}

function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce((arr, n) => {
    if (n > 0) arr[0]++;
    if (n < 0) arr[1] += n;
    return arr;
  }, [0, 0]);
}

function countPositivesSumNegatives(input) {
  return input && input.length ? input.reduce(function(p, c, i, s){
    c <= 0 ? p[1] += c : p[0] += 1;
    return p;
  }, [0, 0]) : [];
}

function countPositivesSumNegatives(input) {
    return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
}

/* That's all folks! */
