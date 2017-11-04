import React from 'react'
import classNames from 'classnames'

class LengthSelector extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    const componentClass = classNames(
      'lengthSelector'
    )

    return (
      <div className={componentClass}>
        <div className='line'></div>
        <div className={this.getPointerClasses(50)} onClick={this.updateLength.bind(this, 50)}>50</div>
        <div className={this.getPointerClasses(75)} onClick={this.updateLength.bind(this, 75)}>75</div>
        <div className={this.getPointerClasses(100)} onClick={this.updateLength.bind(this, 100)}>100</div>
        <div className={this.getPointerClasses(125)} onClick={this.updateLength.bind(this, 125)}>125</div>
        <div className={this.getPointerClasses(150)} onClick={this.updateLength.bind(this, 150)}>150</div>
      </div>
    )
  }

  getPointerClasses (length) {
    if(this.props.length === length) {
      return 'pointer active p-' + length
    } else {
      return 'pointer p-' + length
    }
  }

  // Aggiorna la lunghezza selezionata dall'utente
  updateLength (value) {
    // Invio selezione
    this.props.sendLength(value)
  }

}

export default LengthSelector
