import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
      <p className="copyright">&copy; Edouard Lacan. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a>. Hosted with ❤️ by <a href="https://github.com">Github</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
