import { useEffect, useState } from 'react'
import './App.css'




function App() {
  const [clicked, setClicked] = useState(true)
  const [Pokemon, setPokemon] = useState()
  const [image, setImage] = useState()

  useEffect(() =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*200-1)+1}`)
      .then(res => res.json())
      .then(data => {
        const { name } = data
        const { id } = data
        setPokemon(name)
        setImage(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`)
        console.log(id)
      })
  },[clicked])

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <>
      {Pokemon && <h1>{Pokemon}</h1> }
      {image && <img src={image} alt="pokemon" />}
      <button onClick={handleClick}>Get Random Pokemon</button>
    </>
  )
}

export default App
