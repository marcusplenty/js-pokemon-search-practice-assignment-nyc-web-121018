document.addEventListener('DOMContentLoaded', () => {
  const pokeContainer = document.querySelector("#pokemon-container")
  function addingPokemon(pokeObject){
    const pokemonCard = document.createElement("div")
    pokemonCard.className = "pokemon-card"
    const pokemonFrame = document.createElement("div")
    pokemonFrame.className = "pokemon-frame"
    const h1 = document.createElement("h1")
    h1.className = "center-text"
    h1.innerText = pokeObject.name
    const pokemonImage = document.createElement("div")
    pokemonImage.className = "pokemon-image"
    const theActualPic = document.createElement("img")
    theActualPic.dataset.id = `${pokeObject.id}`
    theActualPic.dataset.action = "flip"
    theActualPic.className = "toggle-sprite"
    theActualPic.src = `${pokeObject.sprites.front}`
    theActualPic.alt = `${pokeObject.sprites.back}`
    theActualPic.addEventListener('click', function(event){
      let placeholder = theActualPic.src
      theActualPic.src = theActualPic.alt
      theActualPic.alt = placeholder

    })


    pokemonImage.appendChild(theActualPic)
    pokemonFrame.appendChild(h1)
    pokemonFrame.appendChild(pokemonImage)
    pokemonCard.appendChild(pokemonFrame)
    pokeContainer.appendChild(pokemonCard)



    // const pokeImg = document.createElement("img")
    // // const pokeName = document.createElement("p")
    // pokeImg.src = pokeObject.sprites.front
    // // pokeName.innerText = pokeObject.name
    // pokeContainer.appendChild(pokeImg)
    // // pokeContainer.appendChild(pokeName)

  }

  POKEMON.forEach(function (pokemon){
    addingPokemon(pokemon)
  })

  const searchBar = document.querySelector("#pokemon-search-input")
  console.log(searchBar)
  const myCards = pokeContainer.querySelectorAll(".pokemon-card")
  console.dir(myCards[0])
  searchBar.addEventListener("input", function(event){
    myCards.forEach(function (card){

      if (card.textContent.includes(event.target.value)){
        card.hidden = false

        // pokeImg.hidden = false
      }else{
        card.hidden = true
        // myCard.hidden = true

      }

    })

  })


})
