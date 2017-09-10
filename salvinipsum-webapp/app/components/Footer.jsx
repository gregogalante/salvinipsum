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
            Made with <i className='fa fa-heart' aria-hidden='true'></i> ciao
          </div>
          <div className='links'>
            <a href="http://51.254.212.21:8200/">Amministrazione</a>
          </div>
        </div>
      </footer>
    )
  }

}

export default Footer
