import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import {find} from 'lodash';

import {operators} from '../constants';
import FieldInput from './FieldInput';

const isValueRequired = type => {
    if (!type) {
        return false;
    }
    const operator = find(operators, op => op.value === type);
    return !!operator && operator.valueRequired;
};

const ParentEditor = ({
    parentQuestion, parentQuestionOptions, parent, onRemove
}) => (
    <tr className="ta-parent-row">
        <td className="ta-parent-question-select">
            <Field
                name={`${parentQuestion}id`}
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
        <td className="ta-parent-question-condition">
            <Field
                name={`${parentQuestion}type`}
                component={FieldInput}
                componentClass="select"
            >
                <option/>
                {operators.map(operator => (
                    <option key={operator.value} value={operator.value}>
                        {operator.label}
                    </option>
                ))}
            </Field>
        </td>
        <td className="ta-parent-question-value">
            {isValueRequired(parent.type) && <Field
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
