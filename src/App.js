import Navbar from "./client/Navbar";
import Routes from "./navigation/Routes"
import "./shared/styles/common.sccs";


function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes />
    </div>
  );
}

export default App;
