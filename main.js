// alert("XIN AHÀO");
// prompt("Mời bạn nhập vào tên:");
// var khai bao bien
// let khai bao bien
// const khai bao hang so
// var diem = 10;
// console.log(diem);
// console.log("Điểm toán của bạn là " + diem + " Toán");
//BAI TAP 1 hien thong bao len man hinh cho phép người dung nhập tên-> xuất tên dùng console.log
// let myName = prompt("Nhập tên vào đây");
// console.log("Tên của bạn là: ", myName);
// console.log("Chào mừng", myName, "đến với khóa học JS");
// console.log(typeof myName);
//BAI TAP IN RA KQ
// let a = 4,
//   b = 3,
//   kq = a * b;
// console.log("Kết quả: %s nhân với %s bằng %s", a, b, kq);
//-----------------------PHEP TOAN
// let a = 5,
//   b = 2;
// let tong = a + b;
// let hieu = a - b;
// let tich = a * b;
// let thuong = a / b;
// let thuongDu = a % b;
// console.log("PHÉP CỘNG %s + %s = %s", a, b, tong);
// console.log("PHÉP TRỪ %s - %s = %s", a, b, hieu);
// console.log("PHÉP TÍCH %s * %s = %s", a, b, tich);
// console.log("PHÉP THƯƠNG %s / %s = %s", a, b, thuong);
// console.log("PHÉP THƯƠNG DƯ %s % %s = %s", a, b, thuongDu);
// --------------DO ƯU TIÊN
//1 ()
// ---------------ÉP KIỂU DỮ LIỆU
// let numberB = 10;
// let numberA = prompt("Nhap vao 1 số");
// let tong = numberA + numberB;
// console.log("a + b = %s", numberA + numberB); //Vì nó là chuỗi + với số nên ko đúng
//---------------EP DỮ LIỆU parseInt() || parseInt() || Number() 4 && 4,5 ||
// let numberC = Number(prompt("Nhập vào NumberC"));
// let numberD = 15;
// console.log(typeof numberC);
// console.log("C + D = %s", numberC + numberD);
//------------TOAN TU GAN += || -= || *= || /= | %=||
// let m = 10;
// m += 10; // m = m + 10
// m -= 5; //m = m + 10
// m *= 5; //m = m + 10
// m /= 5; //m = m + 10
// m %= 5; //m = m + 10
// console.log(m);
//BT 3 GÁN
let numberA = 10;
console.log("Trước khi gán +=3 numberB = %s", numberA);
numberA += 3;
console.log("A = %s", numberA);
//
let numberB = 15;
console.log("Trước khi gán -=6 numberB = %s", numberB);
numberB -= 6;
console.log("B = %s", numberB);
//
let numberC = 5;
console.log("Trước khi gán *=4 numberC = %s", numberC);
numberC *= 4;
console.log("C = %s", numberC);

//
let numberD = 12;
console.log("Trước khi gán /=2 numberD = %s", numberD);
numberD /= 2;
console.log("D = %s", numberD);
//e = 5,f=2 rút gọn biểu thức e = e - (f+1)
//
let numberE = 5;
let numberF = 2;
console.log("Trước khi gán rút gọn numberE = %s", numberE);
numberE -= numberF + 1;
console.log("b = %s", numberE);
