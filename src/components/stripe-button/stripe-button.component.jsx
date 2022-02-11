import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = token => {
    console.log(token);
    alert('Payment Successful')
}

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51KRAt2A0utDOxzcdGk8xdoeutoJRQwBqnspQ1Ok1epha4GJXz9NtGEz5UVrv0oQ5jsL7fGKJ6dJ3hEbhZCgonsLP00P36HOmGL';

    return (
        <StripeCheckout
           label='Pay Now'
           name='CRWN Clothing Ltd.'
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`Your total is $${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;