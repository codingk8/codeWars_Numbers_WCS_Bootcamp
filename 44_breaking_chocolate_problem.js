// ES6

const breakChocolate = (n,m) => ((n * m) - 1) <= 0 ? 0 

// ES5

function breakChocolate(n, m) {
  if(((n * m) - 1) <= 0) {
    return 0;
  } return (n * m) -1;
}

// Other condition

let breakChocolate = function(n, m) {
 return (n*m === 0) ? 0 : n * m - 1;
};

// Other

let breakChocolate = function(n, m) {
  return Math.max(0, n * m - 1);
};

