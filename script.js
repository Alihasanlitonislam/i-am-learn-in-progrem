var fristname = "welcome "
var lestname = "  bangladesh  "
var fullname = fristname.trim() + " " + lestname.trim()
fullname = fullname[0].toUpperCase() + fullname.slice(1)
var index = fullname.indexOf(" ")
fullname = fullname.slice(0, index + 1) + fullname[index + 1].toUpperCase() + fullname.slice(index + 2)
console.log(fullname)