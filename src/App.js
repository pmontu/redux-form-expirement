import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class Contact extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          Contact:
          <Field type="text" component="input" name="name" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

Contact = reduxForm({ form: 'contact' })(Contact);

class App extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }
  submit(values) {
    this.props.submit(values);
  }
  render() {
    return <Contact onSubmit={this.submit} />;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submit: values => dispatch({ type: 'SUBMIT', values }),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
