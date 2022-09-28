
let store = JSON.parse(localStorage.getItem("items"))||[]

store.push(data)
console.log(data)
localStorage.setItem("items", JSON.stringify(store))