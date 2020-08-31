import React from 'react';
import TestComponent from './TestComponent';
import MyPage from './MyPage';

class AppContainer extends React.Component {

  render () {
    return (
      <div>
        <div>AppContainer</div>
        <TestComponent {...this.props} />
        <MyPage name="MyPage" />
      </div>
    );
  }
}

export default AppContainer;