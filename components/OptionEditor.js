import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import FieldInput from './FieldInput';

const OptionEditor = ({option, onRemove}) => (
    <tr className="ta-option-row">
        <td className="ta-option-value">
            <Field
                name={`${option}value`}
                component={FieldInput}
                type="number"
            />
        </td>
        <td className="ta-option-text">
            <Field
                name={`${option}text`}
                component={FieldInput}
            />
        </td>
        <td>
            <br/>
            <Button onClick={onRemove} bsStyle="danger">
                <FontAwesome name="trash"/>
            </Button>
        </td>
    </tr>
);

OptionEditor.propTypes = {
    onRemove: PropTypes.func.isRequired,
    option: PropTypes.shape({}).isRequired
};

export default OptionEditor;
