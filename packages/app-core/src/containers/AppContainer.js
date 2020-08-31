import React from 'react';
import Loader from 'react-component-lazy-load';

const DefaultComp = () => <div className="loader"></div>;
const ErrorComp = ({ loadError }) => <div>Error: { loadError.message }</div>;

import TestComp from './TestComp';

// const TestComp = Loader({
//   loader: () => import('./TestComp'),
//   DefaultComp,
//   ErrorComp,
//   delay: 2000
// });

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.appOrComponentRef = null;
  }


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



// render () {
//   return (
//     <div>
//       <div>Welcome to react</div>
//       <button onClick={ () => this.loadAppOrComponent({ appName:    'lodash-pack-one' }) }>App</button>
//       <button onClick={ () => this.unloadAppOrComponent('lodash-pack-one') }>UnMount App</button>

//       <button onClick={ () => this.loadAppOrComponent({ componentName: 'MyPage', props: { name: 'MyPageComponent' } }) }>Component MyPage</button>
//       <button onClick={ () => this.unloadAppOrComponent('MyPage') }>UnMount Component</button>

//       <button onClick={ () => this.loadAppOrComponent1({ componentName: 'TestComponent', props: { name: 'TestComp' } }) }>Component TestComp</button>
//       <div>
//         hello world brother!
//       </div>
//       <TestComp />
//     </div>
//   );
// }