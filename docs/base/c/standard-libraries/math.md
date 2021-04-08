## 简介

+ 三角函数：都接收 double 类型，并返回 double 类型
  + acos(x)
  + asin(x)
  + atan(x)
  + atan2(x)
  + cos(x)
  + cosh(x)
  + sin(x)
  + sinh(x)
  + tan(x)
  + tanh(x)

+ 其他函数

|函数|功能|
|-|-|
double exp(double x)|返回 $e^x$
double fabs(double x)|返回 x 的绝对值
double floor(double x)|返回 x 的向下取整
double log(double x)|返回 $log_ex$，即 $lnx$
double log10(double x)|返回 $log_{10}x$
double sqrt(double x)|返回 $\sqrt{x}$
double fmod(double x, double y)|返回 x mod y
double pow(double x, double y)|返回 $x^y$
double frexp(double val, int *eptr)|
double modf(double val, double *iptr)|把 val 的整数部分存到 iptr，并返回 val 的小数部分