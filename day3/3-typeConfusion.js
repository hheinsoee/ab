// Run:  node typeConfusion.js
// JavaScript က type ကို သူ့ဘာသာ ပြောင်းလိုက်တတ် — သတိထား!

// + — string ပါရင် စာသား ဆက်
console.log("5" + 5);   // "55"

// - * / — ဂဏန်းအဖြစ် ပြောင်းတွက်
console.log("5" - 2);   // 3
console.log("5" * 2);   // 10

// == — type မစစ်ဘူး (မသုံးနဲ့)
console.log(5 == "5");  // true  😱

// === — type ပါ စစ် (ဒါကို သုံး)
console.log(5 === "5"); // false ✅

// null vs undefined
console.log(null == undefined);  // true
console.log(null === undefined); // false

// NaN က ကိုယ့်ကိုယ်ကိုတောင် မညီ
console.log(NaN === NaN);        // false
console.log(Number.isNaN(NaN));  // true ← NaN စစ်ရင် ဒါသုံး

// typeof null
console.log(typeof null);        // "object" ← bug
