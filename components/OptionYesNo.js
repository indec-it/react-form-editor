import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import FieldInput from './FieldInput';

const OptionYesNo = ({option, onRemove}) => (
    <tr>
        <td>
            <Field
                name={`${option}name`}
                component={FieldInput}
            />
        </td>
        <td>
            <Field
                name={`${option}text`}
                component={FieldInput}
            />
        </td>
        <td>
            <Field
                name={`${option}trueValue`}
                component={FieldInput}
                type="number"
            />
        </td>
        <td>
            <Field
                name={`${option}falseValue`}
                component={FieldInput}
                type="number"
            />
        </td>
        <td>
            <Field
                name={`${option}dkLabel`}
                component={FieldInput}
            />
        </td>
        <td>
            <Field
                name={`${option}dkValue`}
                component={FieldInput}
                type="number"
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
    option: PropTypes.shape({}).isRequired,
    onRemove: PropTypes.func.isRequired
};

export default OptionYesNo;
