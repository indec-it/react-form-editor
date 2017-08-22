import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';
import {Row, Col, Button, Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import {Question} from '../model';
import OptionYesNo from './OptionYesNo';
import {max} from 'lodash';


const OptionsYesNo = ({fields, fromQuestion}) => (
    <div>
        <Row>
            <Col sm={12}>
                <h4>Opciones</h4>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Table responsive striped bordered>
                    <thead>
                        <tr>
                            <th style={{width: '20%'}}>Nombre</th>
                            <th>Texto</th>
                            <th>dkLabel</th>
                            <th>dkValue</th>
                            <th>falseValue</th>
                            <th>trueValue</th>
                            <th style={{width: '35px'}}/>
                        </tr>
                    </thead>
                    <tbody>
                        {fields.map((option, index) => (
                            <OptionYesNo
                                fromQuestion={fromQuestion}
                                key={option.order}
                                option={option}
                                index={index}
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
                    <FontAwesome name="plus"/> Agregar opción
                </Button>
            </Col>
        </Row>
    </div>
);

OptionsYesNo.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({}))
};

export default OptionsYesNo;
