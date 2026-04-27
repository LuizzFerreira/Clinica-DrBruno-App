import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from "../src/components/Navbar";
import './index.css'
import App from './App.jsx'
import Social from '../src/components/Social.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Social />
    <App />
  </StrictMode>,
)
