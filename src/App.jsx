import { useEffect, useState } from 'react'
import './App.css'

const POKEMON_NAME = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*100-1)+1}`


function App() {
  const [Pokemon, setPokemon] = useState()
  const [image, setImage] = useState()

  useEffect(() =>{
    fetch(POKEMON_NAME)
      .then(res => res.json())
      .then(data => {
        const { name } = data
        const { id } = data
        setPokemon(name)
        setImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
        console.log(id)
      })
  },[])

  console.log(Pokemon)

  return (
    <>
      {Pokemon && <h1>{Pokemon}</h1> }
      {image && <img src={image} alt="pokemon" />}
    </>
  )
}

export default App
