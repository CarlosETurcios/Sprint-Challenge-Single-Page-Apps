import React from 'react';
import { Route } from 'react-router-dom';
import CharacterList from './components/CharacterList';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage';
import Character from './components/Character';

export default function App() {
  return (
    <main>
      <Header />
      <div>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/" component={CharacterList} />
        <Route path="/characters/id:" component={Character} />
      </div>
    </main>
  );
}
