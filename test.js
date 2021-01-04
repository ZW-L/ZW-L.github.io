/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
  let res = [], len = s.length

  for (let i = 0; i < len; i++) {
    let j = i
    while (s[i] === s[j + 1] && j < len) {
      j++
    }

    if (j - i >= 2) {
      res.push([i, j])
    }

    if (j > i) {
      i = j
    }
  }

  return res
};

console.log(largeGroupPositions('abc'))