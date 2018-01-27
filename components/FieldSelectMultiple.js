import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash';
import {ControlLabel, FormGroup} from 'react-bootstrap';
import SelectMultiple from 'react-select';

// value es el order de cada posible parent question
const getOptions = possibleParentQuestions => map(possibleParentQuestions, ppq => ({value: ppq.order, text: ppq.name})
);

const FieldSelectMultiple = ({
    input, label, placeholder, options
}) => (
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
    input: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.shape({}),
    options: PropTypes.shape({}).isRequired
};

FieldSelectMultiple.defaultProps = {
    placeholder: '[No tiene]'
};

export default FieldSelectMultiple;
