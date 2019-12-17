import React from 'react';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import { Route } from 'react-router-dom';
import { Container, Row, Card } from 'reactstrap';
import SearchForm from './components/SearchForm.js';
import CharacterCard from './components/CharacterCard.js';

export default function App() {
  return (
    <main>
      <SearchForm />
      <Header />

      <div>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/' component={CharacterList} />
      </div>
    </main>
  );
}
