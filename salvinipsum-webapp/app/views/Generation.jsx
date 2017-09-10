import React from 'react'
import classNames from 'classnames'
import CopyToClipboard from 'react-copy-to-clipboard'

import {Link} from 'react-router'

import SVGInline from 'react-svg-inline'
import {ShareButtons, generateShareIcon} from 'react-share'

// Assets
import user from '../assets/images/user.svg'

// Social buttons
const FacebookIcon = generateShareIcon('facebook')
const {FacebookShareButton} = ShareButtons

class Generation extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      copied: false
    }
  }

  componentDidMount () {
    this.props.updateCurrentView('generation')
    this.props.getResultPost()
  }

  render () {
    const componentClass = classNames(
      'generation'
    )

    return (
      <main className={componentClass}>
        <div className='container'>
          <div className='guide'>
            Condividi il nuovo post e aspetta i risultati.
          </div>

          <div className='post'>
            <div className='icon'>
              <SVGInline svg={user} />
            </div>
            <div className='content'>
              <div className="the-generated-text">
                {this.props.store.post}
              </div>
              <div className="copy-button">
                <CopyToClipboard text={this.props.store.post}
                  onCopy={() => this.setState({copied: true})}>
                  <span className="button">Copia testo</span>
                </CopyToClipboard>
              </div>
              <FacebookShareButton url={'http://51.254.212.21:8201/'} title={'Salvinipsum - generatore di post populisti'}
                                   description={this.props.store.post} className='facebook'>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
            </div>
          </div>

          <div className='navigation'>
            <Link className='button left' to={`/length`}> <i className='fa fa-arrow-left' aria-hidden='true'></i> Indietro</Link>
            <a className='button right' onClick={this.props.getResultPost.bind(this)}>Rigenera <i className='fa fa-refresh' aria-hidden='true'></i></a>
          </div>

        </div>
      </main>
    )
  }

}

export default Generation
