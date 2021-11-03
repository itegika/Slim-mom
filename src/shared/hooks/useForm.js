import { useState } from "react";
import PropTypes from "prop-types";

const useForm = (initialState, onSubmit) => {
  const [data, setData] = useState(initialState);

  const handleChange = ({ target }) => {
    const { type, name, value, checked } = target;
    const newValue = type === "radio" ? checked : value;
    setData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    setData({ ...initialState });
  };

  return [data, handleChange, handleSubmit];
};

export default useForm;
