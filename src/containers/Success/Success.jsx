import React, { useContext } from 'react';
import Map from '../../components/Map/Map';
import AppContext from '../../context/AppContext';
import useGoogleAddress from '../../hooks/useGoogleAddress';

import './Success.css';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer[0].address);
  
  return (
    <div className="Success">
      <div className="Succes-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias</span>
        <div className="Succes-map">
          <Map data={location}/>
        </div>
      </div>
    </div>
  );
};

export default Success;
