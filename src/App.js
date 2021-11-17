import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import GameList from './components/gameList';
import SideBar from './components/sideBar';
import Game from './components/game';
import Template from './components/container/Template';

function App() {
  const [gameArrType, setGameArrType] = useState({ name: 'All', type: 'index' });
  const linkClick = (string) => {
    setGameArrType(string);
  };
  return (
    <Router>
      <Template>
        <SideBar clickHandler={linkClick} />
        <Routes>
          <Route exact path="/" element={<GameList list={gameArrType.name} listType={gameArrType.type} />} />
          <Route path="/game/:id" element={<Game />} />
        </Routes>
      </Template>
    </Router>
  );
}

export default App;
