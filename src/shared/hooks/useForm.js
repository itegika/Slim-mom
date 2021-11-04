import { useState } from "react";

const useForm = (initialState, onSubmit) => {
  const [data, setData] = useState(initialState);

  const handleChange = ({ target }) => {
    const { type, name, value } = target;
    const newValue = type === "radio" ? target.dataset.radio : value;
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
