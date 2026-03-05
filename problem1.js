function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  let cashOutCharge = (money * 1.75) / 100;
  return cashOutCharge;
}
// console.log(cashOut(2500));

function validEmail(email) {
  if (typeof email !== "string") {
    return "Invalid";
  }

  if (
    email[0] === "-" ||
    email[0] === "_" ||
    email[0] === "+" ||
    email[0] === "@"
  ) {
    return "Invalid";
  }

  if (email.includes(" ")) {
    return "Invalid";
  }

  if (!email.includes("@")) {
    return Invalid;
  }

  if (!email.endsWith(".com")) {
    return "Invalid";
  }
  return true;
}

console.log(validEmail("abc@gmail.com"));
