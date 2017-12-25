// Import dependencies
import React from 'react'
import {render} from 'react-dom'

// Import style base
import './styles/app.scss'

// Import routes
import Routes from './config/routes'

// Render application
render(<Routes />, document.getElementById('app'))
