import React, {useState} from 'react';

export default function PokeList()
{
    const [pokeListState, setPokeListState] = useState([])
    async function handleClick()
    {
        await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
            .then(res => res.json())
            .then(res => setPokeListState(res.results))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <button onClick = {handleClick}>List Pokémon</button>
            <ol>
                {pokeListState.map((pokemon, i) => 
                (
                    <li key = {i}>{pokemon.name}</li>
                ))}
            </ol>
        </div>
    )
}