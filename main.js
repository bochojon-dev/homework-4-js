// let n=5;
// let son;
// while
// let n = 5;
// let a;
// for (let i = 1; i <= n; i++) {
//   // i = i - 1;
//   for (let j = i; j >= 1; j--) {
//     console.log(i);
//   }
// }
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = " ";
//   for (let j = 1; j <= n; j++) {
//     row += j + " ";
//   }
//   console.log(row);
// }
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   for (let j = i; j >= 1; j--) {
//     console.log(i);
//   }
// }
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = " ";
//   for (let j = 1; j <= i; j++) {
//     row += j + " ";
//   }
//   console.log(row);
// }

// let a=29;
// let tub;
// let i
// let b=Math.ceil(Math.sqrt(n))
// while (let i=1; i<=b ;i++ ) {
//   tub=a/i ;

// }
// if (Number.isInteger) {
//   console.log(`tub son`);

// } else {
//   console.log(`tub son emas`);
// }
// let n = 33;
// let a = 0;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     a++;
//   }
// }
// if (a == 2) {
//   console.log(`toq son`);
// } else {
//   console.log(`toq son emas`);
// }
// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// UYGA VAZIFA

// FOR-------///////

// // for1
// let a = +prompt(`a butun sonini kiriting`);
// let b = +prompt(`a dan katta b butun sonini kiriting`);
// c = b + 1 - a;
// console.log(`a va b ning orasida ${c} ta son bor:`);
// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

// // for2
// let a = +prompt(`a butun sonini kiriting`);
// let b = +prompt(`a dan katta b butun sonini kiriting`);
// console.log(`quyida a va b orasidagi sonlar kamayish tartibida keltirilgan`);
// for (i = b - 1; i > a; i--) {
//   console.log(i);
// }

// // for3
// let a = +prompt(`1kg konfet narxini kiriting`);
// let sum;
// for (i = 1; i <= 10; i++) {
//   sum = i * a;
//   console.log(`${i}kg konfetning narxi: ${sum}$`);
// }

// // for4
// let a = +prompt(`1kg konfet narxini kiriting`);
// let sum;
// for (i = 1; i <= 2; i = i + 0.2) {
//   c = i.toPrecision(2);
//   b = sum = i * a;
//   d = b.toPrecision(2);
//   console.log(`${c}kg konfetning narxi: ${d}$`);
// }
// // for5
// let a = +prompt(`a butun sonini kiriting`);
// let b = +prompt(`a dan katta b butun sonini kiriting`);
// let sum = 0;
// for (i = a + 1; i < b; i++) {
//   sum += i;
// }
// console.log(`a va b orasidagi sonlar yig'indisi: ${sum}`);

// // for6
// let a = +prompt(`a butun sonini kiriting`);
// let b = +prompt(`a dan katta b butun sonini kiriting`);
// let sum = 1;
// for (i = a + 1; i < b; i++) {
//   sum *= i;
// }
// console.log(`a va b orasidagi sonlar ko'paytmasi: ${sum}`);

// // for7
// let a = +prompt(`a butun sonini kiriting`);
// let b = +prompt(`a dan katta b butun sonini kiriting`);
// let sum = 0;
// for (i = a + 1; i < b; i++) {
//   sum += i ** 2;
// }
// console.log(`a va b orasidagi sonlar kvadratlarining yig'indisi: ${sum}`);

// // for8
// let n = +prompt(`n natural sonini kiriting`);
// let sum = 0;
// for (i = 1; i <= n; i++) {
//   sum += 1 / i;
// }
// console.log(sum);

// // for9
// let n = +prompt(`n natural sonini kiriting`);
// let sum = 1;
// for (i = 1; i <= n; i++) {
//   sum *= 1 / i;
// }
// console.log(sum);

// // for10
// let n = +prompt(`n butun sonini kiriting`);
// let sum = 0;
// for (i = 1; i <= n * 2 - 1; i = i + 2) {
//   sum += i;
// }
// console.log(sum);

// WHILE ------///////////

// // while1
// let a = +prompt(`A kesma uzunligi kiriting`);
// let b = +prompt(`A dan kichik B kesma uzunligini kiriting`);
// while (a >= b) {
//   a -= b;
// }
// console.log(a);

// // while2
// let a = +prompt(`A kesma uzunligi kiriting`);
// let b = +prompt(`A dan kichik B kesma uzunligini kiriting`);
// let i = 0;
// while (a >= b) {
//   a -= b;
//   i = i + 1;
// }
// console.log(i);

// // while3
// let n = +prompt(`n sonini kiritig`);
// let son = 1;
// while (son < n) {
//   son = son * 3;
// }
// if (son == n) {
//   console.log(`3 ni darajasi`);
// } else {
//   console.log(`3 ni darajasi emas`);
// }

// // while4
// let n = +prompt(`n sonini kiriting`);
// let m = +prompt(`n dan kichik m sonini kiriting`);
// while (n >= m) {
//   n -= m;
// }
// console.log(`n sonini m ga bo'lingandagi qoldiq: ${n}`);

// // while5
// let n = +prompt(`natural son kiriting`);
// let son = 0;
// while (n > 0) {
//   let number = n % 10;
//   son = son * 10 + number;
//   n = Math.floor(n / 10);
// }
// console.log(`kiritilgan sonning raqamlari teskasi tartibda yozilgani:`, son);
