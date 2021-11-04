import Navbar from "./client/Navbar";
import Routes from "./navigation/Routes";
import { useSelector, useDispatch } from "react-redux";
// import {
//   getnotAllowedProducts,
//   getSummariesInfo,
//   getUserId,
// } from "./redux/calendar/summaries/summaries-selectors";
import authOperations from "./redux/auth/auth-operations";
import { useEffect } from "react";
import { addItem } from "./redux/calendar/productItems/productItems-operations";
// import { postDay } from "./shared/services/day";
// import { getDailyRateById } from "./shared/services/daily";
import DiaryPage from "./pages/DiaryPage";
import CalculatorPage from "./pages/CalculatorPage";

function App() {
  const dispatch = useDispatch();
  // const id = useSelector(getUserId);
  // const info = useSelector(getSummariesInfo);
  // const notAllowedProducts = useSelector(getnotAllowedProducts);

  return (
    <div className="App">
      <div></div>
      <Navbar />
      <Routes />
      {/* <CalculatorPage /> */}
      {/* <DiaryPage /> */}
    </div>
  );
}

export default App;
