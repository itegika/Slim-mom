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

function App() {
  const dispatch = useDispatch();
  // const id = useSelector(getUserId);
  // const info = useSelector(getSummariesInfo);
  // const notAllowedProducts = useSelector(getnotAllowedProducts);

  // useEffect(() => {
  //   dispatch(
  //     authOperations.logIn({
  //       email: "temnaya@example.com",
  //       password: "qwerty12345",
  //     })
  //   );

  //   setTimeout(() => {
  //     dispatch(
  //       addItem({
  //         date: "2020-12-31",
  //         productId: "5d51694802b2373622ff552c",
  //         weight: 100,
  //       })
  //     );
  //   }, 5000);
  // }, [dispatch]);

  return (
    <div className="App">
      <div></div>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
