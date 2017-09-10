import React from 'react'
import classNames from 'classnames'
import axios from 'axios'

// Importo componenti condiviso tra views
import Header from '../components/Header'
import Footer from '../components/Footer'

class Main extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      people: null,
      length: 50,
      post: null,
      currentView: 'people',
      apiRoot: 'https://salvinipsum-server.herokuapp.com/api'
    }

    // bind actions
    this.receiveSelection = this.receiveSelection.bind(this)
    this.receiveLength = this.receiveLength.bind(this)
    this.getPeople = this.getPeople.bind(this)
    this.getResultPost = this.getResultPost.bind(this)
    this.resetData = this.resetData.bind(this)
    this.updateCurrentView = this.updateCurrentView.bind(this)
  }

  componentDidMount () {
    this.getPeople()
  }

  render () {
    const componentClass = classNames(
      'main'
    )

    const props = {
      store: this.state,
      sendSelection: this.receiveSelection,
      sendLength: this.receiveLength,
      getPeople: this.getPeople,
      getResultPost: this.getResultPost,
      resetData: this.resetData,
      updateCurrentView: this.updateCurrentView
    }

    return (
      <div className={componentClass}>
        <Header currentView={this.state.currentView} />
        {React.cloneElement(this.props.children, props)}
        <Footer />
      </div>
    )
  }

  // Riceve la selezione di un personaggio e aggiorna lo stato dei people
  receiveSelection (key) {
    let newPeople = this.state.people
    newPeople.map((person) => {
      if(person.key === key) {
        person.selected = !person.selected
      }
    })
    // aggiorno lo stato con i nuovi personaggi aggiornati
    this.setState({people: newPeople})
  }

  // Riceve la selezione della lunghezza del post e aggiorna lo stato length
  receiveLength (length) {
    this.setState({length: length})
  }

  // Aggiorna lo stato indicante la pagina corrente
  updateCurrentView (view) {
    this.setState({currentView: view})
  }

  // Resetta i dati gestiti
  resetData () {
    this.setState({
      people: null,
      length: 50,
      post: null,
      currentView: 'people',
      apiRoot: 'https://salvinipsum-server.herokuapp.com/api'
    })
  }

  // Richiede la lista dei profili supportati e la memorizza come stato
  getPeople () {
    const main = this
    axios.get(main.state.apiRoot + '/profiles/all')
      .then(function (response) {
        main.setState ({
          people: main.generatePeopleList(response.data)
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // Richiede un post rispetto ai dati memorizzati come stato
  getResultPost () {
    if(this.state.people != null) {
      // identifico profili selezionati
      let keys = false
      this.state.people.forEach((person) => {
        if(person.selected) {
          if(!keys) {
            keys = person.key + '-'
          } else {
            keys += person.key + '-'
          }
        }
      })
      // Invio richiesta post
      if(keys) {
        const main = this
        axios.get(main.state.apiRoot + '/ipsum/text/'+keys+'/'+main.state.length)
          .then(function (response) {
            main.setState ({
              post: response.data
            })
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }
  }

  // Genera una lista di persone aggiungendo a quella fornita dalle API
  // le informazioni necessarie al funzionamento dell'interfaccia
  generatePeopleList (people) {
    people.map((person) => {
      person.selected = false
    })
    return people
  }

}

export default Main
