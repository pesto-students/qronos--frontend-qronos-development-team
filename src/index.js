import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { CounterProvider, DatabaseProvider, UserProvider } from './context/context';
import * as Sentry from '@sentry/react'
import { Navigate, useLocation } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
Sentry.init({
  dsn: "https://37ec3e7e72e44e77bde6de11740e8ffb@o4505013082980352.ingest.sentry.io/4505013091565568",

  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        Navigate
      ),
    }),
    new Sentry.Replay()
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT}
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
// to log results (for example: reportWebVitals(// console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

