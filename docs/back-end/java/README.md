---
sidebarDepth: 2
---

## 基础语法

### 基本数据类型

+ **整数类型**：使用有符号整数，没有无符号数的概念

|数据类型|内存空间（位）|取值范围|
|-|:-:|-|
byte|8|$-2^7$ ~ $2^7-1$（-128 ~ 127）
short|16|$-2^{15}$ ~ $2^{15} - 1$（-32768 ~ 32767）
int|32|$-2^{31}$ ~ $2^{31} - 1$（-2147483648 ~ 2147483647），约正负 21 亿（$2*10^9$）
long|64|$-2^{63}$ ~ $2^{63} - 1$，约正负 922 亿亿（$9*10^{18}$）


+ **浮点类型**：浮点数默认为 `double`，可以用使用 `f`/`F` 后缀显式声明为 `float`，也可使用 `d`/`D` 指定为 `double`

|数据类型|内存空间（位）|取值范围|
|-|:-:|-|
float|32|约 $1.4*10^{-45}$ ~ $3.4*10^{38}$
double|64|约 $4.9*10^{-324}$ ~ $1.8*10^{308}$


+ **字符类型**：使用 16 位存储字符，并且用单引号（`''`）包围，和 C/C++ 一样将字符当作整数对待
```java
char a = 'A';
System.out.println(a == 65); // true
```

+ **布尔类型**：不能与整数类型进行转换
```java
boolean flag = true;
System.out.println(flag == 1);  // 错误：不可比较的类型
```



### 变量声明

+ 使用 `数据类型 变量名 = 值;` 的形式声明变量并赋值，也可以将声明和赋值拆分：
```java
// 声明并赋值
int a = 100;

// 先声明后赋值
int a;
a = 100;
```

+ 声明常量：附加 `final` 前缀描述
```java

```


### 类型转换

+ 隐式类型转换：不同数据类型间进行运算时，自动转换为位数较大的数据类型
```java
int a = 10;
float b = 12.0f;
System.out.println(a + b);  // 22.0
```

+ 显式类型转换：通过显式指定需要转换的类型，可能会缺失精度
```java
int a = (int)10.1;
System.out.println(a);  // 10
```



## 高级数据结构

### 字符串

:::: tabs
::: tab 创建
+ 字符串必须使用双引号（`""`）包围，用来区分字符
+ 使用 `String` 声明字符串，有几种方式创建字符串对象
+ 直接赋值
```java
String s = "Hi!";
System.out.println(s);  // Hi!
```

+ 使用构造函数
```java
// 1. 使用字符串作参数
String s = new String("Hi!");
System.out.println(s);  // Hi!

// 2. 使用字符数组作参数
char a[] = { 'H', 'i', '!' };
String s = new String(a);
System.out.println(s);  // Hi!

// 3. 可指定起始索引，[start, end)
char a[] = { 'H', 'i', '!' };
String s = new String(a, 0, 2);
System.out.println(s);  // Hi
```
:::

::: tab 字符串是对象
+ 字符串可以使用 `+` 拼接为新的字符串，但内部其实生成了新的字符串对象
```java
System.out.println("Hello " + "World" + "!");  // Hello World!
```

+ 访问字符：`charAt(i)`，访问索引为 i 的字符（不能使用数组的方式访问）
```java
String s = "Hi!";
System.out.println(s.charAt(0));  // H
```

+ 比较字符串：`equals()`/`equalsIgnoreCase()`，不能直接使用 `==` 判断
```java
String s1 = "Hi!";
String s2 = "Hi!";
String s3 = "hi!";
System.out.println(s1.equals((s2)));  // true
System.out.println(s1.equalsIgnoreCase((s3)));  // true
```
:::

::: tab StringBuilder
+ 用于创建可变的字符串，当字符串需要频繁改动时，效率较高
+ `append(val)`：在尾部插入，val 可以为任意类型
+ `insert(int offset, val)`：在任意位置插入，val 可为任意类型
+ `delete(int start, int end)`：删除指定区间的字符，为右不包含
```java
StringBuilder s = new StringBuilder("Hello");

s.append("World");
System.out.println(s);  // HelloWorld

s.delete(5, 10);
System.out.println(s);  // Hello

s.insert(5, "World");
System.out.println(s);  // HelloWorld
```
:::
::::



### 数组

:::: tabs
::: tab 创建和初始化
+ 创建数组需要两步：声明、`new` 分配内存（初始化），两者可以一起用
```java
// 1. 先声明后调用 new 分配内存（编译器会使用默认值初始化数组）
int arr[];
arr = new int[5]; // 每个元素默认为 0

// 2. 一条语句声明和分配内存
int arr[] = new int[5];

// 3. 声明并赋值初始化，以下两种方式是一样的
int arr[] = new int[]{1,2,3,4,5};
int arr[] = {1,2,3,4,5};
```

+ 二维数组
```java
// 方式一
int arr[][] = new int[3][];
arr[0] = new int[4];
arr[1] = new int[4];
arr[2] = new int[4];

// 方式二
int arr[][] = new int[3][4];

// 声明并初始化赋值
int arr[][] = {
  {1,2,3},
  {4,5,6},
  {7,8,9}
};
```
:::

::: tab 遍历
+ `for`/`while` 遍历
```java
int arr[] = {1,2,3,4,5};
for (int i = 0; i < arr.length; i++) {
  System.out.print(arr[i]);  // 12345
}
```

+ `foreach` 遍历
```java
int arr[] = {1,2,3,4,5};
for (int a : arr) {
  System.out.print(a);  // 12345
}
```
:::

::: tab 填充和复制
+ 填充：使用 `Arrays.fill()` 填充数组
```java
int arr[] = new int[5];
Arrays.fill(arr, 100);

// 重载：填充指定区间
Arrays.fill(arr, 3, 5, 100);  // 下标 3～4 被填充为 100
```

+ 复制：
```java
// copyOf()：复制并指定新数组的长度
int arr[] = {1,2,3,4,5};
int arr2[] = Arrays.copyOf(arr, 10);  // {1,2,3,4,5,0,0,0,0,0}

// copyOfRange()：复制指定区间
int arr[] = {1,2,3,4,5};
int arr2[] = Arrays.copyOfRange(arr, 0, 3); // {1,2,3}
```
:::

::: tab 排序
+ 使用 `Arrays.sort()` 排序数组
```java
int arr[] = {5,4,3,2,1};
Arrays.sort(arr); // {1,2,3,4,5}
```
:::
::::



### 集合

+ 集合（又称容器）：和数组类似，但是集合是可变的
+ `List`/`Set` 都实现了 Collection 接口

:::: tabs
::: tab Collection 接口常用方法
+ `add()`：添加元素
+ `remove()`：删除元素
+ `isEmpty()`：判断集合是否为空
+ `size()`：返回集合的元素分数
+ `iterator()`：返回集合的迭代器
```java

```
:::

::: tab List
+ 允许添加相同元素
+ 通过 `get()` 获取元素，`add()` 添加元素
+ 两种实现方式：
  + `ArrayList`：可变数组，允许保存所有数据类型的元素；随机访问效率高
  + `LinkedList`：链表；插入、删除效率高
```java
import java.util.List;
import java.util.ArrayList;

class Test {
  public static void main(String args[]) {
    List<Integer> arr = new ArrayList<>();
    arr.add(1);
    arr.add(2);
    arr.add(3);
    for (int a : arr) {
      System.out.print(a);  // 123
    }
    
    System.out.println();
    arr.remove(1);  // 删除索引为 1 的元素
    for (int a : arr) {
      System.out.print(a);  // 13
    }
  }
}
```
:::

::: tab Set
+ 相同元素只会被保存 1 次
+ 两种实现方式：
  + `HashSet`：无序哈希表，允许存储 `null`
  + `TreeSet`：有序（递增）哈希表（还实现了 `SortedSet` 接口）

+ `HashSet`：
```java
import java.util.Set;
import java.util.HashSet;

class Test {
  public static void main(String args[]) {
    Set<Integer> arr = new HashSet<>();
    arr.add(1);
    arr.add(1);
    arr.add(2);
    for (int a : arr) {
      System.out.print(a);  // 12
    }

    System.out.println();
    arr.remove(1);  // 删除 1
    for (int a : arr) {
      System.out.print(a);  // 2
    }
  }
}
```

+ `TreeSet`：增加了一系列方法
  + `comparator()`：比较器，必须手动实现
  + `first()`：返回第一个（最小）元素
  + `last()`：返回最后一个（最大）元素
  + `headSet(a)`：返回 a（不包含）之前的所有元素的新集合
  + `subSet(a, b)`：返回 a～b（不包含）间的所有元素的新集合
  + `tailSet(a)`：返回 b（包含）之后的所有元素的新集合
```java

```
:::

::: tab Map
+ 哈希映射，存储了唯一的键（每个键对应唯一值）的哈希表，包含以下通用方法：
  + `get(k)`：返回键 k 对应的值
  + `put(k, v)`：设置键值对
  + `containsKey(k)`：判断是否包含键 k
  + `containsValue(v)`：判断是否包含值 v
  + `keySet()`：返回所有键的 Set 集合
  + `values()`：返回所有值的 Collection 集合
+ Map 接口有两种实现方式：
  + `HashMap`：添加和删除效率高，键值都允许使用 `null`
  + `TreeMap`：内部映射存在一定顺序（还实现了 `SortedSet` 接口），不允许使用 `null`

+ `HashMap`：
```java
import java.util.Map;
import java.util.HashMap;

class Test {
  public static void main(String args[]) {
    Map<String, Integer> map = new HashMap<>();
    map.put("a", 1);
    map.put("b", 2);
    System.out.println(map.get("a")); // 1
    System.out.println(map.get("b")); // 2

    map.remove("a");
    System.out.println(map.containsKey("a")); // false
    System.out.println(map.get("a")); // null
  }
}
```
:::
::::

### 更多结构

:::: tabs
::: tab 栈
+ 栈（Stack）是后进先出（FILO，first-in-last-out）的结构
+ `push(val)`：入栈
+ `pop()`：出栈
+ `peek()`：检查栈顶元素
+ `isEmpty()`：检查栈是否为空
+ `search(val)`：返回位置，以 1 为基数
```java
import java.util.Stack;

class Hello {
  public static void main(String args[]) {
    Stack<Integer> s = new Stack<Integer>();
    s.push(1);
    s.push(2);
    
    System.out.println(s.peek());     // 2
    System.out.println(s.isEmpty());  // false
  }
}
```
:::

::: tab 队列
+ 队列（Queue）是先进先出（FIFO，first-in-first-out）的结构，是一个抽象类
+ `offer(val)`：入队
+ `poll()`：出队
+ `peek()`：查看队列开头元素
+ `isEmpty()`：检查队列是否为空
```java
import java.util.LinkedList;
import java.util.Queue;

class Hello {
  public static void main(String args[]) {
    Queue<Integer> q = new LinkedList<Integer>();
    q.offer(1);
    q.offer(2);
    
    System.out.println(q.peek());     // 1
    System.out.println(q.isEmpty());  // false
  }
}
```
:::

::: tab 优先队列
+ 优先队列（PriorityQueue）基于堆（Heap）实现，其入队出队遵循优先级
```java

```
:::
::::



## 面向对象

+ LeetCode 提供了接口，仅需在类中编写一个（或多个）方法即可
```java
class Solution {
  public int findTargetSumWays(int[] nums, int S) {

  }
  // 其他方法
  public helper() {

  }
}
```


## 泛型

+ 泛型类型参数是类类型（`Integer`, `String`, ...），而不是简单类型（`int`, ...）
+ 可以有多个类型个数
+ `extends`：限制泛型的类型
+ `*`：通配符，限制泛型的类型
