import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { CounterProvider, DatabaseProvider, UserProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_.AUTH_DOMAIN}
    clientId={process.env.REACT_APP_.AUTH_CLIENT}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <UserProvider>
      <DatabaseProvider>
        <CounterProvider>
          <App />
        </CounterProvider>
      </DatabaseProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

