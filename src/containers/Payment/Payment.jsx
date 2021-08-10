import React from 'react';

import './Payment.css';

const Payment = () => {

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h2>Resumen del Pedido</h2>
                
                <div className="Payment-button">
                    Boton de Pago con Paypal
                </div>
            </div>
        </div>
    );
}

export default Payment;
