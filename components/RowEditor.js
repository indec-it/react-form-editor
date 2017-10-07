import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {formValueSelector, FieldArray} from 'redux-form';
import {Row, Col, Panel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import {Row as FormRow} from '../model';
import QuestionsEditor from './QuestionsEditor';

const RowEditor = ({rows, row, index, onRemove}) => (
    <Panel
        header={
            <div className={`fg-row-${index + 1} row-title`}>
                Fila {index + 1}
                <span className="pull-right">
                    <FontAwesome onClick={onRemove} name="trash" role="button"/>
                </span>
            </div>
        }
        bsStyle="primary"
    >
        <Row>
            <Col sm={12}>
                <FieldArray name={`${row}questions`} row={rows[index]} component={QuestionsEditor}/>
            </Col>
        </Row>
    </Panel>
);

RowEditor.propTypes = {
    rows: PropTypes.arrayOf(PropTypes.instanceOf(FormRow)).isRequired,
    row: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default connect(state => ({
    rows: formValueSelector('sectionForm')(state, 'rows')
}))(RowEditor);
