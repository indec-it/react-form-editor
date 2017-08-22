import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, FieldArray, reduxForm} from 'redux-form';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import Head from './Head';

import RowsEditor from './RowsEditor';
import FieldInput from './FieldInput';

import {Section} from '../model';

import DownloadService from '../services/download';

const onSubmit = values => DownloadService.download(values);

class SectionEditor extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    render() {
        const {handleSubmit} = this.props;
        return (
            <Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Head/>
                    <Row>
                        <Col sm={12}>
                            <h1>Form Generator</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <h2>Sección</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Field
                                name="name"
                                component={FieldInput}
                                label="Nombre de sección"
                                inputType="text"
                            />
                            <Field
                                name="label"
                                component={FieldInput}
                                label="Título en pantalla"
                                inputType="text"
                            />
                        </Col>
                    </Row>

                    <FieldArray name="rows" component={RowsEditor}/>

                    <Row>
                        <Col sm={12} className="text-right">
                            <Button type="submit" bsStyle="primary">
                                <FontAwesome name="cloud-download"/> Descargar sección
                            </Button>
                        </Col>
                    </Row>
                </form>
            </Grid>
        );
    }
}

export default reduxForm({
    form: 'sectionForm',
    initialValues: new Section()
})(SectionEditor);
