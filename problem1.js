function cashOut(money) {
  if (typeof money !== "number" || money < 0) {
    return "Invalid";
  }
  let cashOutCharge = (money * 1.75) / 100;
  return cashOutCharge;
}
console.log(cashOut(2500));
