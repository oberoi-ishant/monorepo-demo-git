import React from 'react';
export default class TestComp extends React.Component {
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

  loadAppOrComponent(e, { componentName, appName, props }) {
    e.preventDefault();
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
        element.scrollIntoView({ behavior: "smooth" });
    });
  }

  unloadAppOrComponent(e, name) {
    e.preventDefault();
    const elem = this.getElement({elemName: name});
    if (this.appOrComponentRef) {
      this.appOrComponentRef.unMountFn(elem);
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  render () {
    return (
      <div class="comp-test-core">
        <h2 class="heading-secondary">Famous Quotes</h2>
        <p class="text u-margin-bottom-medium">
          "There are things out there that our little minds will never comprehend" – H.G. Tannhaus
        </p>
        <p class="text u-margin-bottom-medium">
          "If I now change my past, I will change who I am right now" — The Stranger
        </p>
        <div class="comp-test-core__btns">
          <a
            class="btn btn--green u-margin-right-medium"
            href="#" onClick={ (e) => this.loadAppOrComponent(e,
              {
                componentName: 'MyPage',
                props: {
                  name: 'MyPageComponent',
                  parent: 'Quotes Mantra'
              }})
            }>
            Get More
          </a>
          <a class="btn btn--green" href="#" onClick={ (e) => this.unloadAppOrComponent(e, 'MyPage') }>I'm done</a>
        </div>
        <section class="subapp u-margin-medium" id="MyPage"></section>
      </div>
    );
  }
}