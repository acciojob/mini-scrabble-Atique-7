//your code here
let input = document.getElementById("evaluatedText")
let count = document.getElementById("count")

input.addEventListener("input", () => {
  count.innerText = input.value.length
})
