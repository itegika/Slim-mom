import Navbar from "./client/Navbar";
import Routes from "./navigation/Routes"
import "./shared/styles/common.sccs";
import Modal from "./client/Modal/Modal";

function App() {
  return (
    <div className="App">
     <Navbar />
      {/* <Routes /> */}
      <Modal />
    </div>
  );
}

export default App;
