import React from 'react'
import classNames from 'classnames'

import {Link} from 'react-router'

import LengthSelector from '../components/LengthSelector'

class Length extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.updateCurrentView('length')
  }

  render () {
    const componentClass = classNames(
      'length'
    )

    return (
      <main className={componentClass}>
        <div className='container'>
          <div className='guide'>
            Dopo aver selezionato i personaggi che più ti aggradano devi scegliere la lunghezza del nuovo post.
          </div>

          <LengthSelector length={this.props.store.length} sendLength={this.receiveLength.bind(this)} />

          <div className='navigation'>
            <Link className='button left' to={`/`}> <i className='fa fa-arrow-left' aria-hidden='true'></i> Indietro</Link>
            <Link className='button right' to={`/generation`}>Genera <i className='fa fa-arrow-right' aria-hidden='true'></i></Link>
          </div>
        </div>
      </main>
    )
  }

  // Riceve la selezione della lunghezza del post e la manda alla componente padre
  receiveLength (length) {
    this.props.sendLength(length)
  }

}

export default Length
