import React from 'react';
import TestComp from './TestComp';

export default class AppContainer extends React.Component {
  render () {
    return (
      <div>
        <div class="header">
          <div class="header__text-box">
            <h1 class="header__title">
              <span class="header__title--main">Monorepo</span>
              <span class="header__title--sub">Demo</span>
            </h1>
          </div>
        </div>
        <TestComp />
      </div>
    );
  }
}
