import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [characterSearch, setCharacterSearch] = useState([]);

  const searching = allcharacters => {
    setCharacterSearch(allcharacters);
  };

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results);
        setCharacterSearch(res.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <section className='character-list'>
      <Link className='links' to={'/'}>
        Home
      </Link>

      <SearchForm searching={searching} character={characters} />

      {characterSearch.map(character => (
        <CharacterCard
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          status={character.status}
        />
      ))}
    </section>
  );
}
