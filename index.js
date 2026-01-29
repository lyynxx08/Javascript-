function print(x){
  if (typeof document !== "undefined") {
    document.body.innerHTML += x + "<br>"
  } else {
    console.log(x)
  }
}

print(a)
var a = 10

let b = 5
const user = { name: "Alex" }

if (true) {
  var a = 20
  let b = 15
  user.name = "Sam"

  print(a)
  print(b)
}

print(a)
print(b)
print(user.name)