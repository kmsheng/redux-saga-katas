import React, {Component, PropTypes} from 'react'

export default class Counter extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
    onIncrementAsync: PropTypes.func.isRequired
  };

  render() {

    const {value, onIncrement, onDecrement, onIncrementAsync} = this.props;

    return (
      <div>
        <button onClick={onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={onIncrementAsync}>
          Increment after 1 second
        </button>
        <hr />
        <div>
          Clicked: {value} times
        </div>
      </div>
    );
  }
}
