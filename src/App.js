import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/UI/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/UI/Search'
import axios from 'axios'

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  //makes call to breaking bad api and returns character list.
  useEffect(() => {
    const fetchItems = async () =>{
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      //items now contains the character list in its array
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
