import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import {Question} from '../model';
import QuestionEditor from './QuestionEditor';
import {max, defaultTo, flatMap} from 'lodash';

const getNewQuestion = (questions, row) => new Question({
    order: defaultTo(max(questions.map(question => question.order)), 0) + 1,
    rowOrder: row.order
});

const QuestionsEditor = ({fields, row, questions}) => (
    <div>
        <Row>
            <Col sm={12}>
                <h3>Preguntas</h3>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                {fields.map((question, index) => (
                    <QuestionEditor
                        key={question.order}
                        question={question}
                        index={index}
                        row={row}
                        questions={questions}
                        onRemove={() => {
                            fields.remove(index);
                        }}
                    />
                ))}
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Button onClick={() => fields.push(getNewQuestion(questions, row))} bsStyle="default">
                    <FontAwesome name="plus"/> Agregar pregunta
                </Button>
            </Col>
        </Row>
    </div>
);

QuestionEditor.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.instanceOf(Question)),
    fields: PropTypes.arrayOf(PropTypes.shape({}))
};

export default connect(
    state => ({
        questions: flatMap(formValueSelector('sectionForm')(state, 'rows'), row => row.questions)
    })
)(QuestionsEditor);
