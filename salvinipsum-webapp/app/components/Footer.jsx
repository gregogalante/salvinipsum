import React from 'react'
import classNames from 'classnames'

import Isvg from 'react-svg-inline'

// Assets
import logo from '../assets/images/logo.svg'

class Footer extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const componentClass = classNames(
      'footer'
    )

    return (
      <footer className={componentClass}>
        <div className='container'>
          <div className='credits'>
            Made with <i className='fa fa-heart' aria-hidden='true'></i> just to laugh :D
          </div>
          <div className='links'>
            <a href="https://github.com/gregogalante/salvinipsum" target="_blank">Source code</a>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer
