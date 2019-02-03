import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/KDE.svg'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <span className="icon"><img src={logo} alt="" /></span>
        </div>
        <div className="content">
            <div className="inner">
              <h1>Web agency </h1>
              <p>Focused on digital transition, KDE has been providing <br /> <a href="javascript:;" onClick={() => {props.onOpenArticle('music')}} >technical</a> and <a href="javascript:;" onClick={() => {props.onOpenArticle('legal')}} >legal</a> services mostly in the music industry</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('tech')}}>Tech</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('legal')}}>Legal</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
