import React from 'react';
import PropTypes from 'prop-types';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

const FieldInput = ({
    input, label, componentClass, type, placeholder, children, min, max
}) => (
    <FormGroup controlId={input.name}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl
            componentClass={componentClass}
            type={type}
            value={input.value}
            placeholder={placeholder}
            maxLength={min}
            minLength={max}
            onChange={input.onChange}
        >
            {children}
        </FormControl>
        <FormControl.Feedback/>
    </FormGroup>
);

FieldInput.propTypes = {
    input: PropTypes.shape({
        value: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
        onChange: PropTypes.func.isRequired
    }).isRequired,
    label: PropTypes.string.isRequired,
    componentClass: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    min: PropTypes.number,
    max: PropTypes.number
};

FieldInput.defaultProps = {
    componentClass: 'input',
    type: null,
    placeholder: null,
    children: null,
    min: null,
    max: null
};

export default FieldInput;
