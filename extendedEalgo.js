//Extended Euclidean Algorithm:
// Extended Euclidean algorithm also finds integer coefficients x and y such that: ax + by = gcd(a, b)
function gcdExtended(a, b, x, y) {
  // Base Case
  if (a == 0) {
    x = 0;
    y = 1;
    return b;
  }

  // To store results
  // of recursive call
  let gcd = gcdExtended(b % a, a, x, y);

  // Update x and y using
  // results of recursive
  // call
  x = y - (b / a) * x;
  y = x;

  return gcd;
}

console.log(gcdExtended());
