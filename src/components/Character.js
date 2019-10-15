import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Character = props => {
  const [character, setCharacterList] = useState('');

  useEffect(() => {
    const id = props.match.params.id;

    axios
      .get(`https://rickandmortyapi.com/documentation${id}`)
      .then(response => {
        setCharacterList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  const { name, status, species, gender, id } = character;

  return (
    <div className="character-card">
      <Link to={`/characters/${id}`}>
        <h2>{name}</h2>
      </Link>
      <div className="character-status">
        Status:<em>{status}</em>
      </div>
      <div className="character-species">
        species:<em>{species}</em>
      </div>
      <div className="character-gender">
        gender:<em>{gender}</em>
      </div>
    </div>
  );
};

export default Character;
