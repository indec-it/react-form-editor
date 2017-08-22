import React from 'react';
import PropTypes from 'prop-types';
import {Field, FieldArray} from 'redux-form';
import {Row, Col, Panel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import {filter, keys} from 'lodash';

import {Question} from '../model';
import {types} from '../constants';
import FieldInput from './FieldInput';
import FieldSelectMultiple from './FieldSelectMultiple';
import OptionsEditor from './OptionsEditor';
import OptionsYesNo from './OptionsYesNo';

const isOptionsRequired = question => {
    switch (question.type) {
        case types.SELECT:
        case types.SELECT_SPECIAL_OPTIONS:
        case types.SELECT_MULTIPLE:
        case types.SELECT_DISABLED:
        case types.CHECKBOX:
        case types.RADIO:
            return <FieldArray name={`${question.order}options`} fromQuestion={question} component={OptionsEditor}/>;
        case types.YES_NO:
            return (<FieldArray
                name={`${question.order}optionsYesNo`}
                fromQuestion={question}
                component={OptionsYesNo}
            />);
        default:
            return null;
    }
};


const QuestionEditor = ({questions, question, row, index, onRemove}) => {
    const possibleParentQuestions = filter(
        questions, (q, i) => q.rowOrder < row.order || q.rowOrder === row.order && q.order < row.questions[index].order
    );
    return (
        <Panel
            header={
                <div>
                    Pregunta {index + 1}
                    <span className="pull-right">
                        <FontAwesome onClick={onRemove} name="trash" role="button"/>
                    </span>
                </div>
            }
            bsStyle="default"
        >
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
                        name={`${question}label`}
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
            {isOptionsRequired(row.questions[index])}
            <Row>
                <Col sm={12}>
                    <Field
                        name={`${question}parent`}
                        component={FieldSelectMultiple}
                        label="Pregunta padre (depende de...)"
                        options={possibleParentQuestions}
                        placeholder="[No tiene]"
                    />
                </Col>
            </Row>
        </Panel>
    );
};

QuestionEditor.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.instanceOf(Question)),
    question: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

export default QuestionEditor;

