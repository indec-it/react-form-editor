import React from 'react';
import PropTypes from 'prop-types';
import {Field, FieldArray} from 'redux-form';
import {Row, Col, Panel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import {filter, keys} from 'lodash';

import {Question} from '../model';
import {types} from '../constants';
import FieldInput from './FieldInput';
import OptionsEditor from './OptionsEditor';
import QuestionYesNo from './QuestionYesNo';
import ParentsEditor from './ParentsEditor';

const getAdditionalFields = (field, question) => {
    switch (question.type) {
        case types.YES_NO:
            return (<QuestionYesNo field={field} question={question}/>);
        default:
            return null;
    }
};

const isOptionsRequired = (field, question) => {
    switch (question.type) {
        case types.SELECT:
        case types.SELECT_SPECIAL_OPTIONS:
        case types.SELECT_MULTIPLE:
        case types.SELECT_DISABLED:
        case types.CHECKBOX:
        case types.RADIO:
            return (<FieldArray
                name={`${field}options`}
                component={OptionsEditor}
            />);
        default:
            return null;
    }
};

const getPanelHeader = (index, onRemove) => (
    <div>
        Pregunta {index + 1}
        <span className="pull-right">
            <FontAwesome onClick={onRemove} name="trash" role="button"/>
        </span>
    </div>
);

const QuestionEditor = ({questions, question, row, index, onRemove}) => {
    const possibleParentQuestions = filter(
        questions, q => q.rowOrder < row.id || (q.rowOrder === row.id && q.id < row.questions[index].id)
    );
    return (
        <Panel header={getPanelHeader(index, onRemove)} bsStyle="default">
            <Row>
                <Col sm={12}>
                    <Field
                        name={`${question}name`}
                        component={FieldInput}
                        label="Nombre de variable"
                    />
                </Col>
                <Col sm={12}>
                    <Field
                        name={`${question}text`}
                        component={FieldInput}
                        label="Texto de pregunta"
                    />
                    <Field
                        name={`${question}type`}
                        component={FieldInput}
                        label="Tipo"
                        componentClass="select"
                    >
                        <option/>
                        {keys(types).map(type => (
                            <option key={type} value={types[type]}>
                                {types[type]}
                            </option>
                        ))}
                    </Field>
                </Col>
            </Row>
            {getAdditionalFields(question, row.questions[index])}
            {isOptionsRequired(question, row.questions[index])}
            {!!possibleParentQuestions.length && <Row>
                <Col sm={12}>
                    <FieldArray
                        name={`${question}parents`}
                        question={row.questions[index]}
                        parentQuestionOptions={possibleParentQuestions}
                        component={ParentsEditor}
                    />
                </Col>
            </Row>}
        </Panel>
    );
};

QuestionEditor.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.instanceOf(Question)).isRequired,
    question: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    row: PropTypes.shape({}).isRequired
};

export default QuestionEditor;

