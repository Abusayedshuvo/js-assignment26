function isBestFriend(input1, input2) {
  if (typeof input1 !== "object" && typeof input2 !== "object") {
    return "Invalid";
  }
  if (input1.bestFriend === input2.roll && input2.bestFriend === input1.roll) {
    return true;
  } else {
    return false;
  }
}

const input1 = {
  name: "hashem",
  roll: 21,
  bestFriend: 1,
};
const input2 = {
  name: "kashem",
  roll: 1,
  bestFriend: 2,
};

console.log(isBestFriend(input1, input2));
