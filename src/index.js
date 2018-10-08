module.exports = function count(s, pairs) {
  let arr = [];
  let N = 0;
  let temp = 0;
  let j = 0;
  let result = [];
  for (let i = 0; i < pairs.length; i++) {
    j = 0;
    temp = (pairs[i][j] ** pairs[i][j+1]);
    arr.push(temp);
  }
  if (pairs.length === 1) {
    N = arr[0];
  } else {
    N = arr[0] * arr[1];
    for (let i = 2; i < arr.length; i++) {
      N *= arr[i];
    }
  }
  if ( N > Math.pow(10, 8) ) { return 0; }
  for (let i = 1; i <= N; i++) {
    let temp = false;
    for (let j = 0; j < s.length; j++) {
      if ( (nod(i+j, N) == 1 && s[j] == 0) || ( nod(i+j, N) != 1 && s[j] == 1) ) {
        temp = true;
        break;
      }
    }
    if (temp === false) {
      result.push(i);
    }
  }
  return (result.length % 1000000007);
  function nod(n, m) {
    if (m > 0) {
      let k = n % m;
      return nod(m, k);
    } else {
      return Math.abs(n);
    }
  }
}