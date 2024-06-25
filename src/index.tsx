import React from 'react';
import {createRoot} from 'react-dom/client'
import App from './App';
import './stylesheets/main.css'
const domeNode = document.getElementById('root') as HTMLDivElement
const root = createRoot(domeNode)
root.render(<App/>)