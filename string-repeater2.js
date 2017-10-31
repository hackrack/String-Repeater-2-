function stringRepeater2() {
  var arr = [];
  var times = window.prompt("Please write your number")
  var userText = window.prompt("Please write your name");
  for (var i = 1; i <= times; i++) {
    arr.push(userText);
  }
  window.alert(arr.join(" "));
}
stringRepeater2();
