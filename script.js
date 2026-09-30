
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


// create a global variable to store movie
let movies 

// fetch data and append html when the website first loads
fetch("stamps_1.json").then(response => response.json())
    .then(json => {
        console.log(json)
        movies = json
        for(let i = 0; i < movies.length; i++) {
            let movie = movies[i]
            makeMovie(movie)
        }
    })
    .catch(error => console.log("error", error))


// a function for generating movie card
function makeMovie(movie) {
    let moviesSection = document.querySelector("#movies")
    let genres = movie.genres.split(",")
    let newMovie = document.createElement("div")
    let genreList = document.createElement("p")
    
    newMovie.classList.add("card")
    newMovie.innerHTML = `
            <h2 class="movieTitle">${movie.title}</h2>
            <span>${movie.minutes} min</span>
            <div>
                <img class="movieCover" src="${movie.path}" alt="${movie.alttext}" />
            </div>
    `
    genreList.classList.add("genres")
    for(let j = 0; j < genres.length; j++) {
        genreList.innerHTML += `<span>${genres[j]}</span>`
    }
    newMovie.appendChild(genreList)
    moviesSection.appendChild(newMovie)
}

function createGenreFilter(genre) {
    document.querySelector(`[data-genre="${genre}"]`).addEventListener("click", function(event) {
        let selectedGenreFilter= event.target
        let selectedGenre = selectedGenreFilter.getAttribute("data-genre")
        let moviesSection = document.querySelector("#movies")
        moviesSection.innerHTML = "" // always empty moviesSection before re-generating filtered data
        let filters = document.querySelectorAll(".filter")
        
        for(let i = 0; i < movies.length; i++) {
                let movie = movies[i]
                let genres = movie.genres.toLowerCase().split(",") // lowercase the string before split into an array
                if (genres.includes(`${genre}`) || selectedGenre === "all") {
                    makeMovie(movie)
                }
                
        }
        // remove and set filter element style
        styleFilters(filters, selectedGenre)
    })
}
function createRatedFilter(rated) {
    document.querySelector(`[data-rated="${rated}"]`).addEventListener("click", function() {
    let moviesSection = document.querySelector("#movies")
    moviesSection.innerHTML = ""
    let filteredMovies = movies.filter(movie => movie.rated.toLowerCase() === rated);
    for(let i = 0; i < filteredMovies.length; i++) {
        makeMovie(filteredMovies[i])
    }
    let filters = document.querySelectorAll(".filter")
    styleFilters(filters, rated)
})
}




function styleFilters(filters, selected) {
    for(let i = 0; i < filters.length; i++) {
        let filter = filters[i]
        if (filter.getAttribute("data-genre")  === selected || filter.getAttribute("data-rated") === selected) {
            filter.classList.add("selected")
        } else {
            filter.classList.remove("selected")
        }
        
    }
}
