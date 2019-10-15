import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacterList] = useState([]);

  useEffect(() => {
    const getCharacter = () => {
      axios
        .get('https://rickandmortyapi.com/documentation')
        .then(response => {
          setCharacterList(response.data);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
    };
    getCharacter();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>
        {characters.map(character => (
          <CharacterDetails key={character.id} character={character} />
        ))}
      </h2>
    </section>
    /* //TODO: `array.map()` over your state here! */
  );
}

function CharacterDetails({ character }) {
  const { name, status, species, gender, id } = character;

  return (
    <div className="character-card">
      <Link to={`/characters/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div className="character-status">Status:{status}</div>
      <div className="character-species">species:{species}</div>
      <div className="character-gender">gender:{gender}</div>
    </div>
  );
}
