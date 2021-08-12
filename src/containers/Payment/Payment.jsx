import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../../context/AppContext';

import './Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const {cart, buyer} = state;
  const history = useHistory();

  const paypalOptions = {
    clientId: 'ATY2B2mp_Kcc-cqhvd8DxFfgXCFKUXREPZHSRkR0iMaOo6HZAnzsYW9FHhuRL4-aVw1yHcPHXnKcGZX4',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator = currentValue.price;
    const sum = cart.reduce(reducer, 0);

    return sum;
  };

  const handlePaymentSucces = (data) => {
    console.log(data);
    if(data.status === 'COMPLETED'){
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }

      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h2>Resumen del Pedido</h2>
        {cart.map((item) => (
          <div key={item.title} className="Payment-item">
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSucces(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}>
            Boton de Pago con Paypal
          </PayPalButton>
        </div>
      </div>
    </div>
  );
};

export default Payment;
