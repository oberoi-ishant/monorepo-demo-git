import React from 'react';
import Utils from '@monorepo-demo/app-utils';

console.log('Utils', Utils.currencyFormat);

class MyPage extends React.Component {

  getSubscriptionAmount () {
    return Utils.currencyFormat({
      number: 99,
      format: 'en-IN',
      currency: 'INR'
    });
  }

  render () {
    return (
      <div>
        <div class="mypage-heading__box">
          <h3 class="mypage-heading__text heading-secondary">
            <span class="mypage-heading__span">A few more...</span>
          </h3>
        </div>
        <h3 class="u-margin-bottom-medium">Read at: { this.props.parent }</h3>
        <p class="text u-margin-bottom-medium">
          "Chaos isn’t a pit. Chaos is a ladder" - Lord Baelish
        </p>
        <p class="text u-margin-bottom-medium">
        "The night is dark and full of terrors" - Melisandre
        </p>
        <p class="text u-margin-bottom-medium">
        "Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you" - Tyrion Lannister
        </p>
        <p class="subscription">
          Subscribe: { this.getSubscriptionAmount() } / year
        </p>
      </div>
    );
  }
}

export default MyPage;
