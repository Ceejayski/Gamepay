import Navbar from './components/navbar';
import SideBar from './components/sideBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container-xl">
        <div className="row">
          <div className="col-md-2">
            <SideBar />
          </div>
          <div className="col-md-10">sirchi</div>
        </div>
      </div>
    </div>
  );
}

export default App;
