import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';

const cursor = document.querySelector('.arrow');
const dot = document.querySelector('.dot');
window.addEventListener('mousemove', (event) => {
dot.style.transform = `translate(${event.clientX - 0}px, ${event.clientY - 0}px)`;
cursor.style.transform = `translate(${event.clientX - 15}px, ${event.clientY - 15}px)`;
});
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);