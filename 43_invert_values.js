/* xxx */


// My 1st solution (fails at the final tests because of the 0 that would become -0)

function invert(array) {
  if (array.length === 0) {
    return [];
  } return array.map(x => -x);
}

// The good solution with the condition inside the map !

function invert(array) {
  if (array.length === 0) {
    return [];
  } return array.map( x => x === 0 ? 0 : -x) 
}

// And ... watch this?!

const invert = array => array.length === 0 ? [] : array.map(x => x=== 0 ? 0 : -x);


/* That's all folks! */
