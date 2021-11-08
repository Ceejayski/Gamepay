import { useState } from 'react';
import GameList from './components/gameList';
import Navbar from './components/navbar';
import SideBar from './components/sideBar';

function App() {
  const [gameArrType, setGameArrType] = useState({ name: 'All', type: 'index' });
  const linkClick = (string) => {
    setGameArrType(string);
  };
  return (
    <div className="App">
      <Navbar />
      <div className="container-xl">
        <div className="row">
          <div className="col-md-2">
            <SideBar clickHandler={linkClick} />
          </div>
          <div className="col-md-10">
            <GameList list={gameArrType.name} listType={gameArrType.type} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
