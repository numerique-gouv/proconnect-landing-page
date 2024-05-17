import React from 'react'
import ReactDOM from 'react-dom/client'
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import { Link } from 'react-router-dom';
import { Router } from './routes/Router';

declare module '@codegouvfr/react-dsfr/spa' {
  interface RegisterLink {
    Link: typeof Link;
  }
}

startReactDsfr({ defaultColorScheme: "light", Link, });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Router />
  </React.StrictMode>,
)
