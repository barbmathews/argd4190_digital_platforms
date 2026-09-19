
let face = document.getElementById("face")
let faceColorOutput = document.querySelector("output[for=face-color]")
let leftEye = document.getElementById("leftEye")
let rightEye = document.getElementById("rightEye")
let mouth = document.getElementById("mouth")
let mouthScaleOutput = document.querySelector("output[for=mouth-scale]")
let word = document.getElementById("word")


let wordInput = document.getElementById("word-input")
let faceColor = document.getElementById("face-color")
let leftEyeX = document.getElementById("left-eye-x")
let leftEyeY = document.getElementById("left-eye-y")
let rightEyeX = document.getElementById("right-eye-x")
let rightEyeY = document.getElementById("right-eye-y")
let mouthScale = document.getElementById("mouth-scale")

function updateOutput(element, input) {
  element.textContent = input.value
}

function changeText(element, textInput) {
  element.textContent = textInput.value
}

function changeColor(element, colorInput) {
  element.style.backgroundColor = colorInput.value
}

function changePosition(element, xInput, yInput) {
  element.style.transform = `translate(${xInput.value}px, ${yInput.value}px)`
}

function changeScale(element, scaleInput) {
  element.style.scale = scaleInput.value
}

wordInput.addEventListener("input", function (){
  changeText(word, wordInput);
})

faceColor.addEventListener("input", function (){
  changeColor(face, faceColor)
  updateOutput(faceColorOutput, faceColor)
})

leftEyeX.addEventListener("input", function (event){
  changePosition(leftEye, leftEyeX, leftEyeY);
})
leftEyeY.addEventListener("input", function (event){
  changePosition(leftEye, leftEyeX, leftEyeY);
})

rightEyeX.addEventListener("input", function (event){
  changePosition(rightEye, rightEyeX, rightEyeY);
})
rightEyeY.addEventListener("input", function (event){
  changePosition(rightEye, rightEyeX, rightEyeY);
})

mouthScale.addEventListener("input", function (event){
  changeScale(mouth, mouthScale)
  updateOutput(mouthScaleOutput, mouthScale)
})

changePosition(leftEye, leftEyeX, leftEyeY);
changePosition(rightEye, rightEyeX, rightEyeY);
updateOutput(faceColorOutput, faceColor)
updateOutput(mouthScaleOutput, mouthScale)

