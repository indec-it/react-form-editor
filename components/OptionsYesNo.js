import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Button, Table} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import OptionYesNo from './OptionYesNo';


const OptionsYesNo = ({fields}) => (
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
                                key={option.order}
                                option={option}
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
    fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default OptionsYesNo;
