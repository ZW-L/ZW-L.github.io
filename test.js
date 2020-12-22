var totalHammingDistance = function(nums) {
  if (!nums.length) return 0
  let res = 0
  let size = nums.length
  const mapOne = new Array(31).fill(0)

  for (num of nums) {
    let i = 0
    while (num) {
      mapOne[i] += (num & 1)
      i++
      num >>>= 1
    }
  }

  for (n of mapOne) {
    res += n * (size - n)
  }

  return res
};

console.log(totalHammingDistance([4, 14, 2]))