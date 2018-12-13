/* xxx */

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
