import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import FieldInput from './FieldInput';

const OptionYesNo = ({index, onRemove, fromQuestion}) => (
    <tr>
        <td>
            <Field
                name={`${fromQuestion.order} - ${index}optionsName`}
                component={FieldInput}
                inputType="number"
            />
        </td>
        <td>
            <Field
                name={`${fromQuestion.order} - ${index}optionsText`}
                component={FieldInput}
                inputType="text"
            />
        </td>
        <td>
            <Field
                name={`${fromQuestion.order} - ${index}optionsDkLabel`}
                component={FieldInput}
                inputType="text"
            />
        </td>
        <td>
            <Field
                name={`${fromQuestion.order} - ${index}optionsDkValue`}
                component={FieldInput}
                inputType="text"
            />
        </td>
        <td>
            <Field
                name={`${fromQuestion.order} - ${index}optionsFalseValue`}
                component={FieldInput}
                inputType="text"
            />
        </td>
        <td>
            <Field
                name={`${fromQuestion.order} - ${index}optionsTrueValue`}
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

OptionYesNo.propTypes = {
    index: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default OptionYesNo;
