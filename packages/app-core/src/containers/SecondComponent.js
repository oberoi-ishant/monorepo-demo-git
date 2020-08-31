import React from 'react';

export default class SecondComponent extends React.Component {
  constructor(props) {
    super(props);
    this.appOrComponentRef = null;
  }

  getElement({ elemName }) {
    let packOne = document.getElementById(elemName);
    if (!packOne) {
      packOne = document.createElement('div');
      packOne.id = elemName;
      const rootApp = document.getElementById('app');
      rootApp.appendChild(packOne);
    }
    return packOne;
  }

  loadAppOrComponent({ componentName, appName, props }) {
    import('@monorepo-demo/app-components')
      .then(module => {
        this.appOrComponentRef = module;
        const element = componentName
          ? this.getElement({ elemName: componentName })
          : this.getElement({ elemName: appName });
        this.appOrComponentRef.mountFn({
          element,
          componentName,
          appName,
          props
        });
    });
  }


  unloadAppOrComponent(name) {
    const elem = this.getElement({elemName: name});
    if (this.appOrComponentRef) {
      this.appOrComponentRef.unMountFn(elem);
    }
  }

  render () {
    return (
      <div>
        <div>Welcome to react</div>
        <button onClick={ () => this.loadAppOrComponent({ appName:    'lodash-pack-one' }) }>App</button>
        <button onClick={ () => this.unloadAppOrComponent('lodash-pack-one') }>UnMount App</button>
        <div>
           I am SecondComponent
        </div>
      </div>
    );
  }
}
