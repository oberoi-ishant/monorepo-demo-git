import React from 'react';
import { map as _map } from 'lodash';

class TestComponent extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      numbers: [1,2,3,4]
    }
  }

  myFunc () {
    return _map(this.state.numbers, (num) => num * 3).join(', ')
  }

  render () {
    return (
      <div>
        <div>Component ONE</div>
        <div>{ this.myFunc() }</div>
      </div>
    );
  }
}

export default TestComponent;