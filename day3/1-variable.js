// Run:  node variable.js

// Industry rule:
//   1. const ကို default သုံး
//   2. ပြောင်းဖို့ လိုမှ let
//   3. var — မသုံးနဲ့ (အဟောင်း)

// ===== const — ပြောင်းလို့မရ (default) =====
const name = "Hein Soe";
console.log("const:", name);

// name = "Aung Aung"; // ❌ TypeError: Assignment to constant variable.

// ===== let — ပြောင်းလို့ရ =====
let score = 0;
score = score + 10;
console.log("let:", score);

// ===== var — အဟောင်း, မသုံးနဲ့ =====
var oldWay = "old";
var oldWay = "again"; // ❌ နာမည်တူ ထပ်ကြေညာလို့ရနေ — bug ဖြစ်လွယ်
console.log("var:", oldWay);

// ===== CONSTANT — ဘယ်တော့မှ မပြောင်းမယ့် တန်ဖိုး =====
// နာမည်ကို UPPER_CASE နဲ့ ရေး
const MAX_STUDENTS = 30;
const TAX_RATE = 0.05;
console.log("CONSTANT:", MAX_STUDENTS, TAX_RATE);
