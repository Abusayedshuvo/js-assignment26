const votes = ["mango", "banana", "mango", "banana", "mango"];
// const votes = [];
// const votes = ["mango", "banana", "jaker party", "no"];
// const votes = ["mango"];
// const votes = { result: "mango, banana, mango" };

function electionResult(votes) {
  let mangoCount = 0;
  let bananaCount = 0;
  if (!Array.isArray(votes)) {
    return "Invalid";
  }
  for (vote of votes) {
    if (vote === "mango") {
      mangoCount += 1;
    } else if (vote === "banana") {
      bananaCount += 1;
    }
  }

  if (mangoCount > bananaCount) {
    return "Mango";
  } else if (mangoCount < bananaCount) {
    return "Banana";
  } else if (mangoCount == bananaCount) return "Draw";
}

console.log(electionResult(votes));
