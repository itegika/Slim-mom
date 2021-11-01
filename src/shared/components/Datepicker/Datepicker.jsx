import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    );
  };

  export default Datepicker;