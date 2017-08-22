import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {Button} from 'react-bootstrap';
import {filter, keys} from 'lodash';

import {Option} from '../model';

import FieldInput from './FieldInput';
import FontAwesome from 'react-fontawesome';
import {max} from 'lodash';


const OptionEditor = ({option, index, onRemove, fromQuestion}) => (
    <tr>
        <td>
            <Field
                name={`${fromQuestion.order} - ${index} optionsValue`}
                component={FieldInput}
                inputType="number"
            />
        </td>
        <td>
            <Field
                name={`${fromQuestion.order} - ${index} optionsLabel`}
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
    index: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default OptionEditor;
