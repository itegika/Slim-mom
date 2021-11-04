import Navbar from "./client/Navbar";
import Routes from "./navigation/Routes";
import { useSelector, useDispatch } from "react-redux";
import {
  getnotAllowedProducts,
  getSummariesInfo,
  getUserId,
} from "./redux/calendar/summaries/summaries-selectors";
import authOperations from "./redux/auth/auth-operations";
import { useEffect } from "react";
import { addItem } from "./redux/calendar/productItems/productItems-operations";
import { getDailyRateById } from "./shared/services/daily";

// import { postDay } from "./shared/services/day";
// import { getDailyRateById } from "./shared/services/daily";
import "./shared/styles/common.scss";

function App() {
  const dispatch = useDispatch();
  // const id = useSelector(getUserId);
  const info = useSelector(getSummariesInfo);
  const notAllowedProducts = useSelector(getnotAllowedProducts);
  // console.log(notAllowedProducts);
  // console.log(info);
  // dispatch(authOperations.logOut());
  useEffect(() => {
    dispatch(authOperations.CheckedIsLoginCurrentUser());
    //   getDailyRateById(
    //     {
    //       weight: 100,
    //       height: 170,
    //       age: 30,
    //       desiredWeight: 60,
    //       bloodType: 1,
    //     },
    //     "6183ccc67750a8000400aab7"
    //   );
  }, []);

  return (
    <div className="App">
      <div></div>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
