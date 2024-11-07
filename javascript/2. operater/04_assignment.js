// 대입 연산자(중첩 연산자) : +=, -=, *=, /= ...
let a = 0;
a = a + 2;
a = a + 2;
a = a + 2;
a = a + 2;
a = a + 2;
a = a + 2;
a = a + 2;
a = a + 2;
a = a + 2;
a = a + 2;

console.log(a);
// 효율성이 떨어질 뿐 맞는 코드.

let b = 0;
b += 2; // b = b + 2;
b -= 2; // b = b - 2;
b *= 2; // b = b * 2;
b /= 2; // b = b / 2;
b %= 2; // b = b % 2;

console.log(b);
// 대입 연산자를 사용하면 효율적으로 작성할 수 있음.