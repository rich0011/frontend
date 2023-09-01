import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import AppContext from './Contexts/AppContext'
import App from './App'
import './index.css'

ReactDOM.render(
    <React.StrictMode>
        <AppContext>
            <App />
        </AppContext>
    </React.StrictMode>, 
document.getElementById('root'))
