import React from 'react';
import {createRoot} from 'react-dom/client'
import Modal from 'react-modal'
import App from './App';
import '/dist/stylesheets/main.css'
import { BrowserRouter } from 'react-router-dom';
Modal.setAppElement('#root')
const domeNode = document.getElementById('root') as HTMLDivElement
const root = createRoot(domeNode)
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)