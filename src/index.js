import React from 'react'
import ReactDOM  from 'react-dom/client'

import App from './App'
import './index.css'

// ReactDOM.render(<App/>, document.getElementById('root'))
const domContainer = document.getElementById('root')
const root = ReactDOM.createRoot(domContainer)
root.render(<App/>)
