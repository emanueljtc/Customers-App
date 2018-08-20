// Dependencias 
import React, { Component } from 'react';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import CustomersContainers from './containers/CustomersContainer';
import CustomerContainer from './containers/CustomerContainer';

class App extends Component {

  renderHome = () => <HomeContainer />;

  renderCustomersContainer = () => <CustomersContainers />;

  renderCustomerListContainer = () => <h3>Customer List Container</h3>;

  renderCustomerNewContainer = () => <CustomerContainer />;
  render() {
    return (
      <Router>
          <div>
            <Route exact path="/" component={this.renderHome} />
          <Route exact path="/customers" component={this.renderCustomersContainer} />
            <Switch>
              <Route path="/customers/new" component={this.renderCustomerNewContainer} />
              <Route path="/customers/:dni" 
                render={props => <CustomerContainer  {...props} dni={props.match.params.dni}/>} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
