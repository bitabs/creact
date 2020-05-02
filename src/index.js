import React from 'react'
import { render } from 'react-dom'
import './styles/main.scss'

import App from './App'

render(<App />, document.getElementById('root'))

// if in development environment, allow hot reload for debugging purposes
if (module.hot) module.hot.accept()
