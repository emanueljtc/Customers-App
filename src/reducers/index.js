// Dependencias
import { combineReducers } from 'redux';
import { customers } from './customers';
import { reduxForm } from 'redux-form';

export default combineReducers({
    customers,
    form: reduxForm
});