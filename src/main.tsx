import React from 'react'

import { HelpScoutContextProvider } from '@helpscout/ui-kit'

import './index.css'

import App from './App'
import ReactDOM from 'react-dom/client'


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelpScoutContextProvider>
      <App />
    </HelpScoutContextProvider>
  </React.StrictMode>
);
