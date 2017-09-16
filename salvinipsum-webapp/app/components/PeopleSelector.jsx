import React from 'react'
import classNames from 'classnames'

class PeopleSelector extends React.Component {

  constructor (props) {
    super(props)

  }

  render () {
    const componentClass = classNames(
      'peopleSelector'
    )

    if (this.props.people != null && !this.props.isLoading) {
      return (
        <div className={componentClass}>
          {this.props.people.map((person, key) => {
            const style = {backgroundImage: 'url(' + person.picture_url + ')'}
            const singleClass = classNames(
              'person',
              {'active': person.selected}
            )
            return (
              <div className={singleClass} key={key} style={style} onClick={this.props.sendSelection.bind(this, person.key)}>
                <span className='name'>{person.name}</span>
              </div>
            )
          })}
        </div>
      )
    } else if (this.props.isLoading) {
      return (
        <div className={componentClass}>
          <div className='loading'>
            Sto caricando i profili, se ci metto tanto è perchè il mio programmatore usa un server economico...
          </div>
        </div>
      )
    } else {
      return (
        <div className={componentClass}>
          <div className='message'>
            Non ci sono profili disponibili :(
          </div>
        </div>
      )
    }
  }

}

export default PeopleSelector
