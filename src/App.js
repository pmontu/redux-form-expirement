import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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
  submit(values) {
    console.log(values);
  }
  render() {
    return <Contact onSubmit={this.submit} />;
  }
}

export default App;
