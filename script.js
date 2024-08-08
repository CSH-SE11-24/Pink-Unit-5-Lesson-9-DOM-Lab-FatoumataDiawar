console.log("Script running...")
// Task 1: Intro section
// Implement the DOM manipulation code flow such that when you click the "Click for location" button, the text below says "1300 Boynton Ave (moving soon!)"
// Make sure to add whatever IDs/classes you need to select the necessary elements

let location1 = document.querySelector("#location")

let loca = document.querySelector("#locoText")

location1.addEventListener("click", function(event){
  loca.textContent = "1300 Boynton Ave (Moving soon!)"
})


// Task 2: Our Values section
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when you click on them, the text changes to the full value
// S -> Self-awareness, C -> Consistency, O -> Ownership, R -> Resilience, E -> Excellence

let S = document.querySelector("#s")
let C = document.querySelector("#c")
let O = document.querySelector("#o")
let R = document.querySelector("#r")
let E = document.querySelector("#e")


S.addEventListener("click", function(event){
  S.textContent = "Self-awareness"
})

C.addEventListener("click", function(event){
  C.textContent = "Consistency"
})

O.addEventListener("click", function(event){
  O.textContent = "Ownership"
})

R.addEventListener("click", function(event){
  R.textContent = "Resilience"
})

E.addEventListener("click", function(event){
  E.textContent = "Excellence"
})

// Task 3: Uniform section
// Implement the DOM manipulation code flows for each of the images such that when your mouse is over the image, it displays the back image and when it is off the image, it displayes the front image
// First image: Mouse over -> joggers-front.webp, mouse off -> joggers-back.webp
// Second image: Mouse over -> sweater-front.webp, mouse off -> sweater-back.webp


let joggers = document.querySelector("#joggers")
let sweaters = document.querySelector("#sweaters")

joggers.addEventListener("mouseover", function(event){
 joggers.src = "joggers-front.webp"
})

joggers.addEventListener("mouseout", function(event){
 joggers.src = "joggers-back.webp"
})

sweaters.addEventListener("mouseover", function(event){
  sweaters.src = "sweater-front.webp"
})

sweaters.addEventListener("mouseout", function(event){
  sweaters.src = "sweater-back.webp"
})
// EXTRA CREDIT
// Implement the DOM manipulation code flows for each of the SCORE <h3> tags such that when your mouse is over them, the text color changes to #3ab54b (and back to black when it is off it)

S.addEventListener("mouseover", function(event){
  S.style.color = "#3ab54b"
})

S.addEventListener("mouseout", function(event){
  S.style.color = "black"
})

C.addEventListener("mouseover", function(event){
  C.style.color = "#3ab54b"
})

C.addEventListener("mouseout", function(event){
  C.style.color = "black"
})

O.addEventListener("mouseover", function(event){
  O.style.color = "#3ab54b"
})

O.addEventListener("mouseout", function(event){
  O.style.color = "black"
})

R.addEventListener("mouseover", function(event){
  R.style.color = "#3ab54b"
})

R.addEventListener("mouseout", function(event){
  R.style.color = "black"
})

E.addEventListener("mouseover", function(event){
  E.style.color = "#3ab54b"
})

E.addEventListener("mouseout", function(event){
  E.style.color = "black"
})



