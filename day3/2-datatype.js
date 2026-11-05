// Run:  node datatype.js

// string — စာသား
const name = "Hein Soe";
console.log(name, typeof name);

// number — ကိန်းဂဏန်း
const age = 25;
console.log(age, typeof age);

// boolean — true / false
const isStudent = true;
console.log(isStudent, typeof isStudent);

// undefined — ဗူးရှိ, ဘာမှ မထည့်ရသေး
let phone;
console.log(phone, typeof phone);

// null — "ဘာမှမရှိ" လို့ ကိုယ်တိုင် ထည့်ထား
const car = null;
console.log(car, typeof car); // "object" ← JavaScript ရဲ့ bug

// NaN — "Not a Number" — ဂဏန်းတွက်လို့ မရတဲ့ ရလဒ်
const result = "hello" * 2;
console.log(result, typeof result); // NaN ဆိုပေမဲ့ type က "number"
