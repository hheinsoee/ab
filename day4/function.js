function getPersonInfo(name, dob, gender) {
    console.log(name + " was born in " + dob)
    const age = new Date().getFullYear() - dob;

    console.log(name + " is " + age + " years old.")
    if (age > 10 && !(gender == "male")) {
        console.log(name + " is allowed to Enter.")
    } else {
        console.log(name + " is NOT allowed to Enter.")
    }

}
getPersonInfo("Kyaw kyaw", 2000, "female")


// true && true
// false || true
// true || false