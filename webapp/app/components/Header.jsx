import React from 'react'
import classNames from 'classnames'

import {Link} from 'react-router'

import SVGInline from 'react-svg-inline'

// Assets
import logo from '../assets/images/logo.svg'

class Header extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const componentClass = classNames(
      'header'
    )

    return (
      <header className={componentClass}>
        <div className='container'>
          <Link className='logo' to={`/`}>
             <SVGInline svg={logo} />
          </Link>

          <ul className='story'>
            <li className={this.checkActive('people')}>1. Scegli i personaggi</li>
            <li className={this.checkActive('length')}>2. Seleziona la lunghezza</li>
            <li className={this.checkActive('generation')}>3. Genera e condividi</li>
          </ul>
        </div>
      </header>
    )
  }

  // Controlla che la view ricevuta per currentView sia uguale al valore ricevuto componentClass
  // parametro. In tal caso ritorna 'active'
  checkActive (value) {
    if(this.props.currentView === value) {
      return 'active'
    }
  }

}

export default Header
