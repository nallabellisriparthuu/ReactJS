import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';

//creating a react element without JSX only with tag name and content and call them using {}
const myHead = (
  <h1>This is heading from myHead</h1>
)

//creating react createElement without JSX with tag name, attributes(in the we write attributes like below) and content and call them using {}
const reactElementHead = React.createElement(
  'h1',{ id: 'title', className: 'header' }, 'This is ReactJS from reactElement'
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {reactElementHead}
    {myHead}
  </StrictMode>,
)
