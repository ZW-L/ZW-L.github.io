var rotate = function(nums, k) {
  if (nums.length === 0 || nums.length === 1) return nums

  const len = nums.length
  const i = len - k % len
  nums.splice(0, 0, ...nums.splice(i))
  return nums
};

console.log(rotate([99,-1,-100,3], 2))