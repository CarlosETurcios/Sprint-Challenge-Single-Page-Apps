import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterDetails from './CharacterList';
import CharacterList from './CharacterList';

function SearchForm(props) {
  const [characters, setCharacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios

      .get('https://rickandmortyapi.com/documentation/characters')
      .then(data => {
        console.log(data);
        setCharacter(data.data.results);
      })
      .catch(error => {
        console.log("There's an error", error);
      });

    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchTerm(results);
  }, [searchTerm]);

  return (
    <section className='search-form'>
      <form>
        <label htmlFor='title'>
          <input
            id='title'
            type='text'
            name='title'
            onChange={handleChange}
            value={searchTerm}
            placeholder='Search'
          />
        </label>
      </form>
      {characters.map(char => (
        <CharacterDetails />
      ))}
    </section>
  );
}
export default SearchForm;
