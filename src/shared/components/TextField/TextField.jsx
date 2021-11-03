import {generate} from "shortid";
import PropTypes from 'prop-types';
import styles from "./TextField.module.scss";

const TextField = ({label, ...field})=>{
    const id = generate();

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
    required:true,
    field:[],
}

TextField.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.number.isRequired,
    placeholder: PropTypes.string,
}


export default TextField;