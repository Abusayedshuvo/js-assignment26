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
