# Task 1. Оценить временную сложность следующий алгоритмов:
## а)
void test1(int n)
 {
    if (n==1) 
       return;
    for (int i=1; i<=n; i++)
        for (int j=1; j<=n; j++)
            System.out.println("");
            break;
}
## б)
void test2(int n)
{
    int a = 0;
for (i = 0; i < n; i++)
    for (j = n; j > i; j--)
        a = a + i + j;    
}
## в)
void test3(int n)
{
    int i, j, a = 0;
for (i = n/2; i <=n; i++)
    for (j = 2; j <=n; j=j2)
        a=a+n/2;    
}
## г) (*)
void test4(int n)
 {
    int a = 0, i = n;
while (i > 0) {
    a += i;
    i /= 2;
}
}

**а)**
Алгоритм имеет два вложенных цикла. Внешний цикл запустится n раз, а внутренний цикл также запустится n раз на каждой итерации внешнего цикла. Таким образом, временная сложность этого алгоритма равна O(n^2).

**б)** 
Алгоритм имеет два вложенных цикла. Внешний цикл запустится n раз, а внутренний цикл будет запущен (n-1) + (n-2) + ... + 1 = n(n-1)/2 раз. Таким образом, временная сложность этого алгоритма равна O(n^2).

**в)** 
Алгоритм имеет два вложенных цикла. Внешний цикл запустится (n/2) раз, а внутренний цикл будет запущен log_2(n) раз на каждой итерации внешнего цикла. Таким образом, временная сложность этого алгоритма равна O(n log n).

**г)** Алгоритм выполняется, пока i больше 0. i уменьшается в два раза на каждой итерации, поэтому цикл выполняется log_2(n) раз. Таким образом, временная сложность этого алгоритма равна O(log n).

Таким образом, временная сложность алгоритмов test1, test2 и test3 составляет O(n^2), O(n^2) и O(n log n), соответственно, а временная сложность алгоритма test4 составляет O(log n).