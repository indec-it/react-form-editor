import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import ParentEditor from './ParentEditor';

const ParentsEditor = ({fields, question, parentQuestionOptions}) => (
    <div>
        <Row>
            <Col sm={12}>
                <h4>Pregunta padre (depende de...)</h4>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Table responsive striped bordered>
                    <thead>
                        <tr>
                            <th style={{width: '30%'}}>Pregunta</th>
                            <th>Condición</th>
                            <th>Valor</th>
                            <th style={{width: '35px'}}/>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((parentQuestion, index) => (
                            <ParentEditor
                                key={parentQuestion.order}
                                parent={question.parents[index]}
                                parentQuestion={parentQuestion}
                                parentQuestionOptions={parentQuestionOptions}
                                onRemove={() => fields.remove(index)}
                            />
                        ))}
                    </tbody>
                </Table>
            </Col>
        </Row>
        <Row>
            <Col sm={12} className="text-right">
                <Button onClick={() => fields.push({})} bsStyle="default">
                    <FontAwesome name="plus"/> Agregar pregunta
                </Button>
            </Col>
        </Row>
    </div>
);

ParentsEditor.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    parentQuestionOptions: PropTypes.shape({}).isRequired,
    question: PropTypes.shape({}).isRequired
};

export default ParentsEditor;
