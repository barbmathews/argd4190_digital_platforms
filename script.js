let numInt=5
let numFloat=2.5

let student= {
    name: "Barbara"
    major: "Graphic Design"
    age: "21"
}

document.getElementById("para").style.color = "purple"

let myElement = document.getElementById("para")
myElement.style.fontSize = "2rem"

let multiplier = 10
element2.style.fontSize = multiplier + "px"

function turnGreen(id){
  document.getElementById(id).style.background = "green"
}
turnGreen("box1")
turnGreen("box2")

function updateColor(id,bg){
  document.getElementById(id).style.background = bg
}
updateColor("box3", "orange")
updateColor("box4", "pink")
updateColor("box5", "chartreuse")
updateColor("box2", "aqua")

function updateStyles(id,colorValue,borderRadiusValue,scale,rotation){
  document.getElementById(id).style.background = colorValue
  document.getElementById(id).style.borderRadius = borderRadiusValue + "px"
  document.getElementById(id).style.transform = `scale(${scale}) rotate(${rotation}deg)`
}
updateStyles("box2","black", 50, 1.3)
updateStyles("box3","purple", 37, 0.44)
updateStyles("box5","orange", 22, 0.7, 65)
