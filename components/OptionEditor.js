import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import FieldInput from './FieldInput';


const OptionEditor = ({option, onRemove}) => (
    <tr>
        <td>
            <Field
                name={`${option}value`}
                component={FieldInput}
                inputType="number"
            />
        </td>
        <td>
            <Field
                name={`${option}text`}
                component={FieldInput}
                inputType="text"
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
