import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Created in 2005, KDE e.u.r.l. was a web agency specialized in email marketing and content management systems. <br/><br/>Here is how it all began. <br/><br/>Couple months after leaving an independant French record label (naïve) promotion department, I realized the need for the music industry to embrace online presence in order to face what would later be called <a href="javascript:;" onClick={() => {this.props.onCloseOpen('tech')}}>digital transition</a>. Facing the rise of mp3 and the social network hatching (MySpace was big in 2005) the whole sector had to reinvent itself with a drastically new approach. </p>
          <p>After meeting Eduardo Makaroff, one of the founding member of band Gotan Project internationally know at the time, KDE accepted his challenge to accompany his young record label Mañana through this journey. And this is where the activity of the company spread from strictly tech services to <a href="javascript:;" onClick={() => {this.props.onCloseOpen('legal')}}>businesses administration</a>, contracts negotiations, rights and artists managements.</p>
          <p>
            Among its clients, KDE is proud to have served:
            <ul>
              <li> Mañana</li>
              <li> Hollie records</li>
              <li> Naïve</li>
              <li> Because</li>
              <li> Radio Nova</li>
              <li> M/M Paris</li>
              <li> Renault</li>
              <li> Millimages</li>
              <li> Loewe</li>
              <li> Syndicat de la Presse Sociale</li>
              <li> Mélanie Elbaz</li>
              <li> Vert Libre</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="tech" className={`${this.props.article === 'tech' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Tech</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>In 2005, just before launching KDE, lots of Internet users were still deep into Flash, especially in the music industry where html sounded like a silent world. Like everyone else at the time I was cultivating high <b>actionScript</b> skills interpolating objects with bouncing transitions and alpha transparency at a time when png were still very rare.</p>

          <p>As a <b>php/mysql</b> early adopter (I started php in 2000), I convinced my client that content management system where the future, as well as client relationship management and that php was the best tool to achieve those goals. Fortunately, <b>css</b> came to the rescue so that the result wouldn't be too ugly compared to those flash component, still proliferating at the time. After deploying a few homemade cms, KDE provided its clients (mostly artists) <b>WordPress</b> solutions.</p>

           <p> Before Node, there was Javascript.<br/><br/>

             Still in competition with the old flash, html had to transcend itself to compete. At this time the solution were called Javascript libraries : remember <b>MooTools</b>? Probably not. But <b>jQuery</b> lasted longer and <b>Ajax</b> of course. All those efforts aimed the same goal: provide a fancy interface without flash... As the navigators became more powerful, it was clear that the client side had won the battle against the server. And at the end of KDE activity, I'd still make e-cards for my clients like I used to make in flash in 2005 but it was already all <b>Javascript</b>.</p>

            <p>Before Symfony, ther was php.<br/><br/>

              The same story happened on the server side. Starting with php 4 back in 2005, I followed the evolution and was very satisfied with scripts like WordPress and PhpList (for mass emailings). Then, suddenly, on Twitter around 2011,  I discovered the <b>Symfony</b> framework. I've never understand the appetite for frameworks, but with my php experience I really appreciated all that Symfony was bringing to this language. So here again, I dived into it but it was already the end of KDE and I've only put a couple of Symfony app in production.</p>

          <p>During all this time, hosting was pretty simple and straightforward. It was called: <b>Linux</b> dedicated server. I started with a little bit of FTP long time ago but switched very rapidly to <b>ssh</b> (scp, rsync) and all its power.</p>

          <p>There was no version control system, nor testing, nor containers, nor cloud deployment at KDE. There was no Node.js, nor React, nor Switch, nor Rest API... But the will to use all those and the basis to get to it was already there!</p>
          <p><a href="javascript:;" onClick={() => {this.props.onCloseOpen('contact')}}>Any question?</a></p>
          {close}
        </article>

        <article id="legal" className={`${this.props.article === 'legal' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Legal services</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Beside the purely technical web services, having a record label for main customer encouraged KDE to provide legal and administration services, especially in the field of music and rights management.</p>
          <p>French commercial laws and regulations can be tricky regarding accounting, manufactured goods, social security and all types of specifications. Therefore part of the work provided by KDE was focused on those legal aspects.</p>
          <p>Among the main KDE realisation in that matter, day to day accounting and financial supervision for small businesses, annual accounting checks and balances, studio recordings organization, musicians contracting (tour/studio sessions), goods manufacturing and importation (books, clothes, records, goodies), taxe administration control, registering trademarks and companies, negotiating publishing licences and synchronization rights in France and overseas, recruiting interns and subcontractors.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>Since 2016 KDE has ceased its activity but I didn't. Now entirely dedicated to modern web infrastructures, I'll be happy to help you managing your cloud native apps 😀 <br /> Get in touch, let me know what's up!</p>
          <ul className="icons">
            <li><a href="https://www.linkedin.com/in/edouard-lacan/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            <li><a href="https://github.com/taviani" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          <form action="https://formspree.io/ed@kde.fr" method="POST">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onCloseOpen: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main