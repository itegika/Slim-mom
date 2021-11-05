import { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Datepicker.module.scss";

import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { pickData } from "../../../../redux/calendar/summaries/summaries-operations";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setIsOpen(!isOpen);
    setStartDate(e);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    dispatch(
      pickData({
        date: "2020-12-31",
      })
    );
  };

  const formatDate = (date) => {
    let dd = date.getDate();
    if (dd < 10) dd = "0" + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = "0" + mm;
    let yyyy = date.getFullYear();
    return dd + "." + mm + "." + yyyy;
  };

  return (
    <div className={styles.DatePickerSection}>
      <span className={styles.DiaryDate}>{formatDate(startDate)}</span>

      <button onClick={handleClick} className={styles.DatePickerBtn}></button>
      {isOpen && (
        <DatePicker selected={startDate} onChange={handleChange} inline />
      )}
    </div>
  );
};

export default Datepicker;
