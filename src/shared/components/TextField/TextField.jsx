import {generate} from "shortid";
import PropTypes from 'prop-types';
import styles from "./TextField.module.scss";

const TextField = ({label, ...field})=>{
    const id = generate();

    return (
        <div className="form-group">
            {label && <label htmlFor={id}></label>}
            <input className = {styles.formInput} 
                {...field}
                id={id}
                />
        </div>
    )
};

TextField.propTypes = {
    label: PropTypes.string,
    field: PropTypes.object,
}


export default TextField;