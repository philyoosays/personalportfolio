import React from 'react'
import Nav from './Nav.jsx'
import Projects from './Projects'
import Contact from './Contact'
import AboutMe from './AboutMe'
import Footer from './Footer'
import './App.css'

import gastack from './screencaps/gastack.png'
import crm from './screencaps/crm.png'
import snake from './screencaps/snake.png'
import tetris from './screencaps/tetris.png'

export default class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navselection: 'nothing',
      projects:[
        {
          name: 'GA Stack',
          desc: 'I found that students are intimidated by Stack Overflow because usually it\'s pros talking to pros and students would never ask questions so I made a student focused internal version of Stack Overflow for General Assembly students.',
          tech: 'This site features a vector-based search, WYSIWYG editor, code snippets, comment voting, authentication and authorization. It is EJS rendering for the front, PostgreSQL, Node.js/Express.js on the back.',
          link: 'http://gastack.com',
          github: 'https://github.com/',
          thumb: gastack,
        },
        {
          name: 'Contact Resource Management (CRM) System',
          desc: 'This is a contact management system that sales teams and fundraising teams would use to track leads/donors, closed sales/donations, notes, campaigns, and donor statistics.',
          tech: 'This site features a vector-based search, WYSIWYG editor, code snippets, comment voting, authentication and authorization. It is EJS rendering for the front, PostgreSQL, Node.js/Express.js on the back.',
          link: 'https://crm-unit02.herokuapp.com/search',
          github: 'https://github.com/philyoosays/CRM-Basic',
          thumb: crm,
        },
        {
          name: 'Tetris',
          desc: 'I submitted this as a unit project while attending General Assembly in order to try to challenge myself. It\'s just a replica of the original-style Tetris',
          tech: 'This was written with JQuery. The main js file stores game data to the DOM but the script2.js file runs all game data virtually and just renders to the DOM.',
          link: 'http://philyoo-tetris.surge.sh/',
          github: 'https://github.com/philyoosays/tetris',
          thumb: tetris,
        },
        {
          name: 'Old-school Snake',
          desc: 'Just because I thought it\'d be fun.',
          tech: 'Simple game written with JQuery.',
          link: 'http://philyoo-snake.surge.sh/',
          github: 'https://github.com/philyoosays/snake',
          thumb: snake,
        }
      ],
      mouseX: 0,
      mouseY: 0,
      pageX: 0,
      pageY: 0
    }
    this.changeNavSelection = this.changeNavSelection.bind(this)
    this.zoomMaker = this.zoomMaker.bind(this)
  }

  changeNavSelection(newState) {
    this.setState({
      navselection: newState
    })
  }

  zoomMaker(e) {
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
      pageX: e.pageX,
      pageY: e.pageY
    })
  }

  render() {
    const toShow = this.state.navselection === 'projects' ?
      <Projects
        projects={this.state.projects}
        makeZoom={this.zoomMaker}
      /> : this.state.navselection === 'contact' ?
        <Contact /> : this.state.navselection === 'about' ?
          <AboutMe /> : ''
    return(
      <div>
        <div>
          <Nav selected={this.state.navselection} changeNav={this.changeNavSelection}/>
        </div>
        <div>
          {toShow}
        </div>
        <Footer nav={this.state.navselection} />
      </div>
    );
  }
}
