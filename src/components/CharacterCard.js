import React from 'react';
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Col,
  Container,
  Row
} from 'reactstrap';
const CharacterCard = props => {
  return (
    <div className='grid-view'>
      <Card body inverse style={{ background: 'rgb(100,232,2)' }}>
        <div className='character-card'>
          <h1>Name: {props.name}</h1>
          <img className='imgg' src={props.image} alt='character-pic' />
          <p>Species: {props.species}</p>
          <p>Gender: {props.gender}</p>
          <p>Status: {props.status}</p>
        </div>
      </Card>
    </div>
  );
};
export default CharacterCard;
