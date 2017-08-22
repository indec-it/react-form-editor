import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';
import {ControlLabel, FormGroup} from 'react-bootstrap';
import SelectMultiple from 'react-select';

// value es el order de cada posible parent question
const getOptions = possibleParentQuestions => map(
    possibleParentQuestions, ppq => ({value: ppq.order, label: ppq.name})
);

const FieldSelectMultiple = ({input, label, placeholder, options}) => (
    <FormGroup controlId={input.name}>
        <ControlLabel>{label}</ControlLabel>
        <SelectMultiple
            placeholder={placeholder}
            onChange={input.onChange}
            value={input.value}
            multi
            options={getOptions(options) || ''}
        />
    </FormGroup>
    );

FieldSelectMultiple.propTypes = {
    componentClass: PropTypes.string
};

FieldSelectMultiple.defaultProps = {
    componentClass: 'input'
};

export default FieldSelectMultiple;
