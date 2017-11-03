import React from 'react';
import PropTypes from 'prop-types';
import {Field} from 'redux-form';
import {Col, Row} from 'react-bootstrap';

import FieldInput from './FieldInput';

const QuestionYesNo = ({field}) => (
    <div className="ta-yes-no-question">
        <Row>
            <Col className="ta-true-value" sm={4}>
                <Field
                    name={`${field}trueValue`}
                    component={FieldInput}
                    type="number"
                    label="True value"
                />
            </Col>
            <Col className="ta-false-value" sm={4}>
                <Field
                    name={`${field}falseValue`}
                    component={FieldInput}
                    type="number"
                    label="False value"
                />
            </Col>
        </Row>
        <Row>
            <Col className="ta-text-wont-answer" sm={4}>
                <Field
                    name={`${field}dkLabel`}
                    component={FieldInput}
                    label="Texto 'No sabe/No contesta'"
                />
            </Col>
            <Col className="ta-value-wont-answer" sm={4}>
                <Field
                    name={`${field}dkValue`}
                    component={FieldInput}
                    type="number"
                    label="Valor 'No sabe/No contesta'"
                />
            </Col>
        </Row>
    </div>
);

QuestionYesNo.propTypes = {
    field: PropTypes.string.isRequired
};

export default QuestionYesNo;
