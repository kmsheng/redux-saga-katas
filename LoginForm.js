import React, {Component, PropTypes} from 'react'

export default class LoginForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      username: this.refs.usernameInput.value,
      password: this.refs.passwordInput.value
    });
  };

  render() {

    const {value, onIncrement, onDecrement, onIncrementAsync} = this.props;

    return (
      <form method="POST" onSubmit={this.handleSubmit}>
        <input ref="usernameInput" type="text" name="username" placeholder="username" value="guest1" readOnly />
        <input ref="passwordInput" type="password" name="password" value="123456" readOnly />
        <button type="submit">submit</button>
      </form>
    );
  }
}
