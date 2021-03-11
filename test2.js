/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let i = 0, j = s.length - 1
  while (i < j) {
    if (!isWord(s[i])) {
      i++
    } else if (!isWord(s[j])) {
      j--
    } else {
      if (s[i].toLowerCase() !== s[j].toLowerCase()) return false
      i++
      j--
    }
  }
  return true
}

function isWord(ch) {
  const code = ch.toLowerCase().charCodeAt()
  const ca = 'a'.charCodeAt(), cz = 'z'.charCodeAt()
  const c0 = '0'.charCodeAt(), c9 = '9'.charCodeAt()
  return (code >= ca && code <= cz) || (code >= c0 && code <= c9)
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))