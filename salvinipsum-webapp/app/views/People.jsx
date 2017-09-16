import React from 'react'
import classNames from 'classnames'

import {Link} from 'react-router'

import PeopleSelector from '../components/PeopleSelector'

class People extends React.Component {

  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.updateCurrentView('people')
  }

  render () {
    const componentClass = classNames(
      'people'
    )

    return (
      <main className={componentClass}>
        <div className='container'>
          <div className='guide'>
            Salvinipsum è un generatore di post utilizzabili gratuitamente per ottenere visibilità e successo nel mondo dei social.
            Per iniziare seleziona uno o più personaggi da utilizzare come ispirazione per i tuoi post.
          </div>

          <PeopleSelector people={this.props.store.people} isLoading={this.props.store.loadingPeople} sendSelection={this.receiveSelection.bind(this)} />

          <div className='navigation'>
            <Link className='button right' to={`/length`}>Prosegui <i className='fa fa-arrow-right' aria-hidden='true'></i></Link>
          </div>

        </div>
      </main>
    )
  }

  // Riceve la selezione di un nuovo personaggio e aggiorna la lista
  // di personaggi selezionati
  receiveSelection(key) {
    this.props.sendSelection(key)
  }

}

export default People
