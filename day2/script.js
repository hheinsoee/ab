// HTML ထဲက heading element ကို ရှာထား
const heading = document.getElementById("heading");

// HTML ထဲက button element ကို ရှာထား
const button = document.getElementById("colorBtn");

// ပြောင်းချင်တဲ့ အရောင် ၆ ရောင် စာရင်း
const colors = ["#2563eb", "#dc2626", "#16a34a", "#ea580c", "#9333ea", "#0891b2"];

// အခု ဘယ်အရောင်မှာ ရှိနေလဲ မှတ်မယ့် ကိန်း
let i = 0;

// Button click ဖြစ်တိုင်း — အောက်က code ကို run မယ်
button.addEventListener("click", () => {
    // နောက်အရောင်ကို ပြောင်း (စာရင်းအဆုံးရောက်ရင် အစကပြန်)
    i = (i + 1) % colors.length;

    // Heading ရဲ့ color ကို ပြောင်း
    heading.style.color = colors[i];
});
