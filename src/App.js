import React, { useState, useEffect } from 'react';
import Recipe from './recipe'
import './App.css';


function App() {
  const app_id = '302c6295'
  const app_keys = '9bddd01f576cd714ff49faf47a80cbad'

  const [query, setQuery] = useState([])
  const [search, setSearch] = useState('')
  const [result, setResult] = useState([])

  async function getData() {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_keys}`)
    const resData = await response.json()
    setResult(resData.hits)
  }

  useEffect(() => {
    getData()
  }, [query])



  const changeQuery = (e) => {
    e.preventDefault()
    setQuery(search)
  }

  const changeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="App">
      <form className="searchForm">
        <input onChange={changeSearch} value={search} id="input" className="searchInput" placeholder="input your search" type="text" ></input>
        <button onClick={changeQuery} className="submitButton" type="submit">Send Request</button>
      </form>
      <div className="resultBefore" >
        {result.map((data, index) => {
          return (
            <Recipe
              key={index}
              title={data.recipe.label}
              calories={data.recipe.calories}
              image={data.recipe.image}
              ingredients={data.recipe.ingredients}
            />
          )

        })}
      </div>
    </div>
  )
}

export default App;
