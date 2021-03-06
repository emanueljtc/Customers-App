import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from "./../selectors/customers";
import { Route } from 'react-router-dom';
import CustomerEdit from './../components/CustomerEdit'
import CustomersData from '../components/CustomersData';
class CustomerContainer extends Component {
  renderBody = () => (
    <Route path="/customers/:dni/edit" children={
      ( { match } ) => {
          const CustomerControl = match ? CustomerEdit : CustomersData ;
          return <CustomerControl {...this.props.customer}/> // Spread Attributes
        
      }
    } />
  )
  // <p>Datos del Cliente {this.props.customer.name}</p>
  render() {
    return (
      <div>
          <AppFrame header={`Cliente ${this.props.dni}`}
            body={this.renderBody()}>
          </AppFrame>
      </div>
    );
  }
}

CustomerContainer.propTypes = {
  dni: PropTypes.string.isRequired,
  customer: PropTypes.object.isRequired
};
CustomerContainer.defaultProps = {
  customer: {}
};
const mapStateToProps = (state, props) => ({
  customer: getCustomerByDni(state, props),
});
export default connect(mapStateToProps, null)(CustomerContainer);