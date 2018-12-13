/* See link & ressources in the MD file */

/* Ma solution */
function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2;
  } else if (operation === "-") {
    return value1 - value2;
  } else if (operation === "*") {
    return value1 * value2;
  } else if (operation === "/") {
    return value1 / value2
  } else {
    return "This operation is not known";
  }
}

/* Autres solutions, avec un switch en particulier */

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}

function basicOp(o, a, b) {
  return eval(a+o+b);
}

function basicOp(operation, value1, value2)
{
  return eval(value1 + operation + value2);
}

basicOp = (operation, value1, value2) => eval( `${value1} ${operation} ${value2}` )
