import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import {operators} from '../constants';
import FieldInput from './FieldInput';

const ParentEditor = ({parentQuestion, parentQuestionOptions, parent, onRemove}) => (
    <tr>
        <td>
            <Field
                name={`${parentQuestion}question`}
                component={FieldInput}
                componentClass="select"
            >
                <option/>
                {parentQuestionOptions.map(questionOption => (
                    <option key={questionOption.name} value={questionOption.name}>
                        {questionOption.name}
                    </option>
                ))}
            </Field>
        </td>
        <td>
            <Field
                name={`${parentQuestion}condition`}
                component={FieldInput}
                componentClass="select"
            >
                {operators.map(operator => (
                    <option key={operator.value} value={operator.value}>
                        {operator.label}
                    </option>
                ))}
            </Field>
        </td>
        <td>
            {parent.operator && parent.operator.valueRequired && <Field
                name={`${parentQuestion}value`}
                component={FieldInput}
                type="number"
            />}
        </td>
        <td>
            <br/>
            <Button onClick={onRemove} bsStyle="danger">
                <FontAwesome name="trash"/>
            </Button>
        </td>
    </tr>
);

ParentEditor.propTypes = {
    onRemove: PropTypes.func.isRequired,
    parentQuestion: PropTypes.shape({}).isRequired,
    parentQuestionOptions: PropTypes.shape({}).isRequired,
    parent: PropTypes.shape({}).isRequired
};

export default ParentEditor;