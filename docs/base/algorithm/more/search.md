## 概述

+ 二分查找的时间复杂度通常是 $O(logn)$
+ 二分查找特别适合求解 `有序序列` 相关问题，涉及有序序列时优先思考二分查找是否能解题
+ 有些问题中的 “有序” 特性不是很明显，需要细心观察
+ 本质：不断缩小查找区间，最终找出/判断目标值
+ 参考 [LeetBook-零基础学算法-二分查找](https://leetcode-cn.com/leetbook/read/learning-algorithms-with-leetcode/xsq0b7/)


## 代码剖析

+ 二分查找的代码框架比较固定，较容易理解（不需要 “死记硬背”）
+ 以下几个是需要特别注意的部分，在不同问题中会有所不同

:::: tabs
::: tab 参考例题
查找给定元素唯一且有序的数组 `nums` 中 `target` 的索引
```
示例1：nums = [1,2,3,4,5], target = 3
返回：2

示例1：nums = [1,2,4,5], target = 3
返回：-1
```
:::

::: tab 取中间数
+ 两种方式选择 `mid` 变量，通常选择方式 2，因为它能保证在用其他语言实现时不会溢出
+ 特别提示：在 Java/JavaScript 中，由于 `>>>` 的特性（高位补 0），使用方式 1 并不会溢出
```js
// 方式 1
const mid = Math.floor((l + r) / 2);
const mid = (l + r) >>> 1;

// 方式 2
const mid = l + Math.floor((r - l) / 2);
const mid = l + ((r - l) >>> 1);
```
:::

::: tab 循环终止
+ 一般来说，找到目标时即可提前返回结果：
```js
if (nums[m] === target) return true;
```

+ 对于外循环的控制，以退出循环时，区间中剩余几个元素来区分
+ 剩余 0 个元素
```js{4,8}
function search(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l <= r) {
    const m = l + ((r - l) >>> 1);
    if (nums[m] === target) return m;
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  // 所有情况都在循环中判断完毕，循环结束说明没有找到结果
  return -1;
}
```

+ 剩余 1 个元素，`常用写法`
```js{4,8}
function search(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    const m = l + ((r - l) >>> 1);
    if (nums[m] === target) return m;
    if (nums[m] > target) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  // 最终剩下 1 个元素，额外判断是否等于 target
  return nums[l] === target ? l : -1;
}
```

+ 剩余 2 个元素
```js{4,8}
function search(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l + 1 < r) {
    const m = l + ((r - l) >>> 1);
    if (nums[m] === target) return m;
    if (nums[m] > target) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  // 最终剩下 2 个元素，均要判断是否等于 target
  if (nums[l] === target) return l;
  if (nums[r] === target) return r;
  return -1;
}
```
:::

::: tab 向下取整 VS 向上取整
+ 向下取整：`l + Math.floor((r - l) / 2)`，`常用写法`
```js
function search(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    const m = l + ((r - l) >>> 1);
    if (nums[m] === target) return m;
    if (nums[m] > target) {
      r = m;      // 不做 -1 操作，否则最终剩余的元素是 r 而不是 l
    } else {
      l = m + 1;  // 剩余两个元素时，避免向下取整的死循环
    }
  }

  return nums[l] === target ? l : -1;
}
```

+ 向上取整：`l + Math.floor((r - l) / 2 + 1)`，仅适用于某些情况
```js

```
:::
::::




## 题型 1 - 寻找下标

> 寻找下标：在一个序列中找出某个值的位置或判断其是否存在
+ 简单二分查找：序列本身有序（或元素之间无严格顺序，可通过排序促使其有序），从而可以使用二分查找
+ 部分有序序列：如 「旋转排序数组」相关问题，也可以使用二分查找，但需要在缩小查找区间时进行分类讨论

:::: tabs
::: tab 简单二分查找
+ 问题：查找给定元素唯一且有序的数组 `nums` 中 `target` 的索引
```
输入：nums = [1,2,3,4,5], target = 3
输出：2

输入：nums = [1,2,4,5], target = 3
输出：-1
```

+ 代码：
```js
function search(nums, target) {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    const m = l + ((r - l) >>> 1);
    if (nums[m] === target) return m;
    if (nums[m] > target) {
      r = m;
    } else {
      l = m + 1;
    }
  }

  // 最终剩下 1 个元素，额外判断是否等于 target
  return nums[l] === target ? l : -1;
}
```

+ 相关问题：
  + [LeetCode-34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
  + [LeetCode-35. 搜索插入位置](https://leetcode-cn.com/problems/search-insert-position/)
  + [LeetCode-278. 第一个错误的版本](https://leetcode-cn.com/problems/first-bad-version/)
  + [LeetCode-4. 寻找两个正序数组的中位数](https://leetcode-cn.com/problems/median-of-two-sorted-arrays/submissions/)
:::

::: tab 变形的排序数组
+ 问题：[LeetCode-153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
```
输入：nums = [3,4,5,1,2]
输出：1

输入：nums = [4,5,6,7,0,1,2]
输出：0
```

+ 代码：
```js
var findMin = function(nums) {
  let l = 0, r = nums.length - 1;

  while (l < r) {
    const m = l + ((r - l) >>> 1);
    if (nums[m] < nums[r]) {
      r = m;      // 右侧是升序，转至左侧
    } else {
      l = m + 1;  // 转至左侧
    } 
  }

  return nums[l];
};
```

+ 相关问题：
  + [LeetCode-153. 寻找旋转排序数组中的最小值](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/)
  + [LeetCode-154. 寻找旋转排序数组中的最小值 II](https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/)
  + [LeetCode-33. 搜索旋转排序数组](https://leetcode-cn.com/problems/search-in-rotated-sorted-array/)
  + [LeetCode-81. 搜索旋转排序数组 II](https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/)
  + [LeetCode-852. 山脉数组的峰顶索引](https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/)
  + [LeetCode-1095. 山脉数组中查找目标值](https://leetcode-cn.com/problems/find-in-mountain-array/)
:::
::::



## 题型 2 - 寻找目标值

+ [LeetCode-69. x 的平方根](https://leetcode-cn.com/problems/sqrtx/)
```js
var mySqrt = function(x) {
  if (x < 2) return x;  // 边界：0 和 1
  let l = 0, r = x, m;

  while (l + 1 < r) {
    m = (l + r) >>> 1;
    if (m * m === x) return m;  // 恰好相等
    if (m * m < x && (m+1)*(m+1) > x) return m;  // 已经是最大
    if (m * m > x) {
      r = m;     // r 最终更新为大于结果 ans 的最小整数
    } else {
      l = m + 1; // 已经判断了 pow(m+1, 2)，此时 l*l 绝无可能越界
    }
  }

  return l;
};
```

+ [LeetCode-287. 寻找重复数](https://leetcode-cn.com/problems/sum-of-mutated-array-closest-to-target/)
+ [LeetCode-1300. 转变数组后最接近目标值的数组和](https://leetcode-cn.com/problems/find-the-duplicate-number/)



## 题型 3 - 复杂问题

+ 在更复杂的二分查找中，其 “有序” 特性看似不存在：
  + 原数组无序
  + 元素之间严格有序，即不能排序
+ 这些问题都有一个特点：其结果包含在一个区间中，而区间本身就是一个 “有序序列”
+ [LeetCode-875. 爱吃香蕉的珂珂](https://leetcode-cn.com/problems/koko-eating-bananas/)
+ [LeetCode-410. 分割数组的最大值](https://leetcode-cn.com/problems/split-array-largest-sum/)
+ [LeetCode-1011. 在 D 天内送达包裹的能力](https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/)
+ [LeetCode-1482. 制作 m 束花所需的最少天数](https://leetcode-cn.com/problems/minimum-number-of-days-to-make-m-bouquets/)
+ [LCP-12. 小张刷题计划](https://leetcode-cn.com/problems/xiao-zhang-shua-ti-ji-hua/)