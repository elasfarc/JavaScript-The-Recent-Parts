function upper(strings, ...values) {
  console.log(strings, ...values);
  var str = "";
  for (let i = 0; i < strings.length; i++) {
    if (typeof values[i - 1] == "string") str += values[i - 1].toUpperCase();
    str += strings[i];
  }
  return str;
}

var regName = "kyle",
  twitter = "getify",
  topic = "JS Recent Parts";

console.log(
  upper`Hello ${regName} (@${twitter}), welcome to ${topic}!` ===
    "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"
);
