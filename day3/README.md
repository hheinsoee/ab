# Day 3 — Variables & Data Types

## Run

```bash
cd day3
node variable.js
node datatype.js
node typeConfusion.js
```

## `variable.js` — Industry rule

1. `const` — **default** သုံး (ပြောင်းလို့မရ)
2. `let` — ပြောင်းဖို့ လိုမှ
3. `var` — မသုံးနဲ့ (အဟောင်း)
4. **CONSTANT** — ဘယ်တော့မှ မပြောင်းမယ့် တန်ဖိုး → `UPPER_CASE` နာမည် (`MAX_STUDENTS`)

## `datatype.js`

| Type | ဥပမာ | ဘာလဲ |
|---|---|---|
| string | `"Hein Soe"` | စာသား |
| number | `25` | ကိန်းဂဏန်း |
| boolean | `true` | မှန် / မှား |
| undefined | `let phone;` | ဘာမှ မထည့်ရသေး |
| null | `null` | ဘာမှမရှိ လို့ ကိုယ်တိုင်ထည့် |
| NaN | `"hello" * 2` | ဂဏန်း မဟုတ် (type က number!) |

## `typeConfusion.js` — သတိထား

| Code | ရလဒ် |
|---|---|
| `"5" + 5` | `"55"` |
| `"5" - 2` | `3` |
| `5 == "5"` | `true` 😱 |
| `5 === "5"` | `false` ✅ |
| `NaN === NaN` | `false` |
| `typeof null` | `"object"` |

**Rule**: `==` မသုံးနဲ့ — `===` ပဲ သုံး။
