import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { link } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Col,
  Container,
  Row
} from 'reactstrap';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [rmCharacter, setRmCharacter] = useState([]);
  useEffect(() => {
    const getCharacter = () => {
      axios
        .get('https://rickandmortyapi.com/api/character')
        .then(res => {
          console.log(res);
          setRmCharacter(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getCharacter();
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className='character-list'>
      <h2>
        {rmCharacter.map(character => (
          <CharacterDetails key={character.id} character={character} />
        ))}
      </h2>
    </section>
  );
}
function CharacterDetails({ character }) {
  const { name, status, species, gender, image } = character;

  return (
    <Card body inverse style={{ backgroundColor: 'green' }}>
      <div className='character-card'>
        <h2>{name}</h2>
        <img className='imgg' src={image} alt='character-pic' />
        <div className='character-status'>Status: {status}</div>
        <div className='character-species'>Species: {species}</div>
        <div className='character-gender'>Gender: {gender}</div>
      </div>
    </Card>
  );
}
