import Navbar from "./client/Navbar";
import Routes from "./navigation/Routes";
import { useDispatch } from "react-redux";
import authOperations from "./redux/auth/auth-operations";
import { useEffect } from "react";


import "./shared/styles/common.scss";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authOperations.CheckedIsLoginCurrentUser());
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
