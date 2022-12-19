// gcd of a and b
function gcd(a, b) {
  if (a === 0) return b;
  return gcd(b % a, a);
}

console.log(gcd(10, 15));
console.log(gcd(30, 95));

//Big-o time complexity is O(log min(a,b))
