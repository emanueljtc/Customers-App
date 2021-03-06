import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
const CustomerEdit = ( {name, dni, age} ) => {
    return (
        <div>
          <h2>Edicion del Cliente</h2>
          <form action="">
            <div>
                <label htmlFor="name">Nombre</label>
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="dni">Dni</label>
                <Field name="dni" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="age">Edad</label>
                <Field name="age" component="input" type="number" />
            </div>
          </form>
        </div>
    );
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
};
const CustomerEditForm = reduxForm({ form: 'CustomerEdit' })(CustomerEdit);
export  default connect(
    (state, props) => ({ initialValues: props })) (CustomerEditForm);
