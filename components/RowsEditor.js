import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {formValueSelector} from 'redux-form';
import {Row, Col, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import {max} from 'lodash';

import {Row as FormRow} from '../model';
import RowEditor from './RowEditor';

const getNewRow = rows => new FormRow({id: max(rows.map(row => row.id)) + 1});

const RowsEditor = ({fields, rows}) => (
    <div>
        <Row>
            <Col sm={12}>
                <h3>Filas</h3>
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                {fields.map((row, index) => (
                    <RowEditor
                        key={row.id}
                        row={row}
                        index={index}
                        onRemove={() => fields.remove(index)}
                    />
                ))}
            </Col>
        </Row>
        <Row>
            <Col sm={12}>
                <Button id="ta-add-row" onClick={() => fields.push(getNewRow(rows))} bsStyle="primary">
                    <FontAwesome name="plus"/> Agregar Fila
                </Button>
            </Col>
        </Row>
    </div>
);

RowsEditor.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    rows: PropTypes.arrayOf(PropTypes.instanceOf(FormRow)).isRequired
};

export default connect(
    state => ({
        rows: formValueSelector('sectionForm')(state, 'rows')
    })
)(RowsEditor);
