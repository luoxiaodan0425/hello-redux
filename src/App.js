import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { increment,decrement } from './actions';
import User from './components/User'
class App extends Component {
  render() {
    const { increment, decrement } = this.props;
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{ this.props.counter }</h1>
        <p className="text-center">
          <button onClick={ () => increment() } className="btn btn-primary mr-2">Increase</button>
          <button onClick={ () => decrement() } className="btn btn-danger my-2">Decrease</button>
        </p>
        <User />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

App.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
}

export default connect(mapStateToProps, { increment, decrement })(App);