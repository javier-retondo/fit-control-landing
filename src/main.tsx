import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
      <CssBaseline />
      <App />
    </ParallaxProvider>
  </StrictMode>,
);
