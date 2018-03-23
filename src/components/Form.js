import React from 'react';

export default class Form extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = (e) => {
    e.preventDefault();
    const username = e.target.elements.username.value.trim();
    const password = e.target.elements.password.value.trim();

    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="username" placeholder= "User Name"/>
          <input type="text" name="password" placeholder= "Password"/>
          <button>Sign Up!</button>
        </form>
      </div>
    );
  }
}
