import {generate} from "shortid";
import PropTypes from 'prop-types';
import styles from "./TextField.module.scss";
import { placeholder } from "@babel/types";

const TextField = ({label, ...field})=>{
    const id = generate();
    if (field.required) {
        field.placeholder += " *"
    }

    return (
        <div className= {styles.formGroup}>
            {label && <label htmlFor={id}>       
                 <input className = {styles.formInput} 
                {...field}
                id={id}
                />
                </label>} 
        </div>
    )
};

TextField.defaultProps = {
    required:false,
    type: "text",
}

TextField.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
}


export default TextField;