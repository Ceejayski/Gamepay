import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import GameList from './components/gameList';
import Navbar from './components/navbar';
import SideBar from './components/sideBar';
import Footer from './components/footer';
import Game from './components/game';
import allStore from './redux/createStore';

function App() {
  const [gameArrType, setGameArrType] = useState({ name: 'All', type: 'index' });
  const linkClick = (string) => {
    setGameArrType(string);
  };
  return (
    <Provider store={allStore}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container-xl">
            <div className="row align-items-start">
              <div className="col-md-2 sticky-top">
                <SideBar clickHandler={linkClick} />
              </div>
              <div className="col-md-10">
                <Routes>
                  <Route exact path="/" element={<GameList list={gameArrType.name} listType={gameArrType.type} />} />

                  <Route path="/game/:id" element={<Game />} />
                </Routes>
              </div>
            </div>
          </div>
          <Footer />
        </div>

      </Router>
    </Provider>
  );
}

export default App;
