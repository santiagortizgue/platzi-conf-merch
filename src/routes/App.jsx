import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Checkout from '../containers/Checkout/Checkout';
import Information from '../containers/Information/Information';
import Payment from '../containers/Payment/Payment';
import Success from '../containers/Success/Success';
import NotFound from '../containers/NotFound/NotFound';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import Layout from '../components/Layout/Layout';

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState.state).length;

  return (
    <>
    {isEmpty > 0 ? (<AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/checkout/information" component={Information} />
            <Route exact path="/checkout/payment" component={Payment} />
            <Route exact path="/checkout/success" component={Success} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>) : <h1>Cargando...</h1>}
    
    </>
  );
};

export default App;
