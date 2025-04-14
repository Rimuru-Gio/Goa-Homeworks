let word = "სიყვარული"
const translations = {
  ქართული: "სიყვარული",
  ინგლისური: "love",
  ფრანგული: "amour"
}
function translateWord() {
let langInput = document.getElementById("language").value.trim().toLowerCase()
let result = document.getElementById("result")
switch (langInput) {
    case "ქართული":
      result.innerText = `ქართული: ${translations.ქართული}`
      break
    case "ინგლისური":
      result.innerText = `ინგლისურად: ${translations.ინგლისური}`
      break
    case "ფრანგული":
      result.innerText = `ფრანგულად: ${translations.ფრანგული}`
      break
    default:
      result.innerText = "ასეთი ენა არ არსებობს. სცადეთ თავიდან."
      break
}
}
