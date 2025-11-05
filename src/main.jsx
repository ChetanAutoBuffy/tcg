import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import './index.css'

// Console Easter Egg
console.clear();
console.log(
  '%c╔════════════════════════════════════════════════════════════╗',
  'color: #2563EB; font-weight: bold; font-size: 12px; font-family: monospace;'
);
console.log(
  '%c║                                                            ║',
  'color: #2563EB; font-weight: bold; font-size: 12px; font-family: monospace;'
);
console.log(
  '%c║  ████████╗ ██████╗ ██████╗                                ║',
  'color: #2563EB; font-weight: bold; font-size: 12px; font-family: monospace;'
);
console.log(
  '%c║  ╚══██╔══╝██╔════╝██╔════╝                                ║',
  'color: #9333EA; font-weight: bold; font-size: 12px; font-family: monospace;'
);
console.log(
  '%c║     ██║   ██║     ██║  ███╗                               ║',
  'color: #9333EA; font-weight: bold; font-size: 12px; font-family: monospace;'
);
console.log(
  '%c║     ██║   ██║     ██║   ██║                               ║',
  'color: #EC4899; font-weight: bold; font-size: 12px; font-family: monospace;'
);
console.log(
  '%c║     ██║   ╚██████╗╚██████╔╝                               ║',
  'color: #EC4899; font-weight: bold; font-size: 12px; font-family: monospace;'
);
console.log(
  '%c║     ╚═╝    ╚═════╝ ╚═════╝                                ║',
  'color: #F59E0B; font-weight: bold; font-size: 12px; font-family: monospace;'
);
console.log(
  '%c║            THE CHADHA GROUP                                ║',
  'color: #FFFFFF; font-weight: bold; font-size: 14px; font-family: monospace;'
);
console.log('');
console.log('');
console.log('');
console.log(
  '%cInterested in working with us?',
  'color: #FFFFFF; font-weight: bold; font-size: 14px;'
);
console.log(
  '%c→ https://thechadhagroup.com/software',
  'color: #2563EB; font-size: 14px;'
);
console.log('');
console.log('');

// Detect DevTools
let devtools = { open: false };
const threshold = 160;
const emitEvent = () => {
  if (!devtools.open) {
    console.log(
      '%c🔍 DevTools opened! Welcome to the matrix.',
      'color: #10B981; font-weight: bold; font-size: 16px;'
    );
  }
  devtools.open = true;
};

setInterval(() => {
  if (
    window.outerWidth - window.innerWidth > threshold ||
    window.outerHeight - window.innerHeight > threshold
  ) {
    emitEvent();
  }
}, 500);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
)