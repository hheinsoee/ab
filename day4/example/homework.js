// ===== Task 1 — ကိုယ့်ကိုယ်ကို object တစ်ခု =====
const me = {
    name: "Kyaw Kyaw",                          // string
    dob: 2000,                                  // number
    gender: "male",                             // string
    city: "Yangon",                             // string
    isStudent: true,                            // boolean
    email: undefined,                           // undefined — ဘာမှ မထည့်ရသေး
    car: null,                                  // null — မရှိဘူး လို့ ကိုယ်တိုင်ထည့်
    hobbies: ["football", "music", "coding"],   // array
    mother: {                                   // object
        name: "Daw Mya",
        dob: 1970
    }
}

function task1() {
    console.log(me)
}


// ===== Task 2 — Function ကို object နဲ့ ခေါ် =====
function getPersonInfo(name, dob, gender) {
    console.log(name + " was born in " + dob)
    const age = new Date().getFullYear() - dob;

    console.log(name + " is " + age + " years old.")
    if (age > 10 && !(gender === "male")) {
        console.log(name + " is allowed to Enter.")
    } else {
        console.log(name + " is NOT allowed to Enter.")
    }
}

function task2() {
    getPersonInfo(me.name, me.dob, me.gender)
}


// ===== Task 3 — Condition =====
function task3() {
    const myAge = new Date().getFullYear() - me.dob;

    if (myAge >= 18 && me.city === "Yangon") {
        console.log("Welcome")
    } else {
        console.log("Sorry")
    }
}


// ===== Part 5 — introduce + getAge =====

// 1. introduce(person) — parameter တစ်ခုတည်း (object)
function introduce(person) {
    const age = new Date().getFullYear() - person.dob;
    console.log(person.name + " is " + age + " years old and lives in " + person.city + ".")
}

// 2. return
function getAge(dob) {
    return new Date().getFullYear() - dob;
}

function showAges() {
    console.log(me.name + " is " + getAge(me.dob))
    console.log(me.mother.name + " is " + getAge(me.mother.dob))
}
