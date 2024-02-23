// let x = +prompt("Birinchi soni kiriting");
// let y = +prompt("Ikkinchi soni kiriting");
// let natija = 0;
// function sum(a, b) {
//   natija = a + b;
//   console.log(natija);
// }
// sum(x, y);
// string definition

// includes() - string ichidan so’ralgan stringni topolsa true qaytaradi, topolmasa false.

// const message = "JavaScript is fun";

// // check if message includes the string "Java"
// let result = message.includes("Java");
// console.log(result);

// repeat() - berigan stringni aytilgan son bo’yicha qaytarib yangi string hosil qiladi.
// const holiday = "Happy holiday!";

// // repeating the given string 3 times
// const result = holiday.repeat(3);

// console.log(result);

// charAt() - so’ralgan indexdagi elementni qaytaradi;
// const string = "Hello World!";

// // finding character at index 1
// let index1 = string.charAt(1);

// console.log("Character at index 1 is " + index1);

// substring() - ikkita qiymat (raqam) qabul qiladi va birinchisi qaysi indexdan boshlanishi ikkinchisi esa qaysi indexgacha oraliqdagi ma’lumotlarni olib beradi;
// const message = "JavaScript is fun.";

// // get the substring starting from index 0 to 10
// let result = message.substring(0, 10);
// console.log(result);

// padStart() - berilgan string boshiga biror elementlarni aytilgan son miqdoricha qo’shadi. Ya’ni bu method 2 ta parametr qabul qiladi. Birinchisi son, ikkinchi nima qo’shilishi kerakligi;
// // string definition
// let string1 = "CODE";

// // padding "*" to the start of given string
// // until the length of final padded string reaches 10
// let paddedString = string1.padStart(10, "*");

// console.log(paddedString);

// padEnd() -  berilgan string ohiriga biror elementlarni aytilgan son miqdoricha qo’shadi. Ya’ni bu method 2 ta parametr qabul qiladi. Birinchisi son, ikkinchi nima qo’shilishi kerakligi;

// let string1 = "CODE";

// // padding "*" to the end of the given string
// // until the length of final padded string reaches 10
// let paddedString = string1.padEnd(10, "*");

// console.log(paddedString);

// concat() - berilgan stringlarni bir birga qo’shib yangi string hosil qiladi;
// const message = "JavaScript is not Java";
// const index = message.indexOf("va");
// console.log("index: " + index);

// let empy = "";
// let join = empy.concat("Javascript", "is", "fun");
// console.log(join);

// split() - bu method berilgan string qiymatni bo’laklarga bo’lib array holatida qaytaradi. Va split turli xil parametrlar olishi mumkin

// const message1 = "JavaScript::is::fun";

// // divides the message string at ::
// let result = message1.split("::");
// console.log(result);

// let myNumber = promt("Enter you number");
// let randomNumber = Math.trunc(10 * Math.random()) + 1;

// if (myNumber == randomNumber) {
//   ("siz kiritgan raqam tori"));
// } else console.log("notori kiritiz");
