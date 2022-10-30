import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import App from './App';
import { HotelProvider } from './context/hotelContext';
import { MapProvider } from './context/mapContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <HotelProvider>
        <MapProvider>
          <App />
        </MapProvider>
      </HotelProvider>
    </Router>
  </React.StrictMode>
);
