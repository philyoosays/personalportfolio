import React from 'react';
import Nav from './Nav.jsx';
import Projects from './Projects';
// import Contact from './Contact';
import AboutMe from './AboutMe';
import Footer from './Footer';
import './App.css';

import noImage from './screencaps/no_image_w_large.gif';
import gastack from './screencaps/gastack.png';
import crm from './screencaps/crm.png';
import snake from './screencaps/snake.png';
import tetris from './screencaps/tetris.png';
import emailwidget from './screencaps/email_widget.png';
import minesweeper from './screencaps/minesweeper.png';

export default class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navselection: 'projects',
      projects:[
        {
          name: 'GA Stack',
          desc: 'I found that students are intimidated by Stack Overflow because usually it\'s pros talking to pros and students would never ask questions so I made a student focused internal version of Stack Overflow for General Assembly students.',
          tech: 'This site features a vector search, 16 DB tables, internal statistics tracking, a WYSIWYG editor, code snippets, comment voting, authentication and authorization, several JSON APIs for various features, EJS rendering for the front, PostgreSQL, and Node.js/Express.js on the back',
          highlights: [
            'Full vector text search',
            'WYSIWYG editor',
            'Code snippets',
            'Internal stats tracking',
            'Comment voting',
            'PostgreSQL',
            'Node.js/Express.js',
            'Sessions for auth',
            'EJS rendering',
            '3rd Party JSON APIs'
          ],
          link: 'http://gastack.com',
          github: 'https://github.com/philyoosays/gastack',
          thumb: gastack,
          note: '',
          zoom: true,
        },
        {
          name: 'WebSockets Game',
          desc: 'A multiplayer game where everyone gets a set of buttons but everyone has different buttons. Everyone gets an instruction to complete in 10 seconds but the instruction is likely not for your own buttons. So you need to communicate with the other players to complete each instruction.',
          tech: 'This was written in React Native, Node/Express, and uses Websockets for client to server communication.',
          highlights: [
            'React Native',
            'WebSockets',
            'Node.js',
            'Express.js'
          ],
          link: '',
          github: 'https://github.com/philyoosays/socketsgame',
          thumb: noImage,
          note: '***Currently not deployed but all functionality is working.',
          zoom: false,
        },
        {
          name: 'Contact Resource Management (CRM) System',
          desc: 'This is a contact management system that sales teams and fundraising teams would use to track leads/donors, closed sales/donations, notes, campaigns, donor statistics, and Node.js/Express.js on the back',
          tech: 'A \'fuzzy\' search, Zillow XML API for donor intel, donor giving statistics, EJS rendering for the front, PostgreSQL, Node.js/Express.js on the back',
          highlights: [
            'Fuzzy search',
            'XML API for donor intel',
            'Contribution stats',
            'PostgreSQL',
            'Node.js/Express.js',
            'EJS rendering'
          ],
          link: 'https://crm-unit02.herokuapp.com/search',
          github: 'https://github.com/philyoosays/CRM-Basic',
          thumb: crm,
          note: '',
          zoom: true,
        },
        {
          name: 'Tetris',
          desc: 'I submitted this as a unit project while attending General Assembly in order to try to challenge myself. It\'s just a replica of the original-style Tetris',
          tech: 'This was written with JQuery. The main js file stores game data to the DOM and the script2.js file runs all game data virtually and just renders to the DOM',
          highlights: [
            'Collision Detection',
            'jQuery',
            'Javascript',
            'HTML',
            'CSS'
          ],
          link: 'http://philyoo-tetris.surge.sh/',
          github: 'https://github.com/philyoosays/tetris',
          thumb: tetris,
          note: '',
          zoom: false,
        },
        {
          name: 'Old-school Snake',
          desc: 'Just because I thought it\'d be fun.',
          tech: 'Simple game written with JQuery.',
          highlights: [
            'jQuery',
            'Javascript',
            'HTML',
            'CSS'
          ],
          link: 'http://philyoo-snake.surge.sh/',
          github: 'https://github.com/philyoosays/snake',
          thumb: snake,
          note: '',
          zoom: false,
        }
      ],
    inprogress: [
      {
        name: 'Constituent Email Widget',
        desc: 'A widget allowing non-profits to easily email their constituents while also collecting constituent information for relationship building and prospecting.',
        tech: 'Written in React with a Node.js/Express.js backend with PostgreSQL for data storage. JSON Web Tokens for auth.',
        highlights: [
          'JSON Web Tokens',
          'React.js',
          'Node.js/Express.js',
          'PostgreSQL',
          '3rd Party API',
        ],
        link: 'https://emailwidget.herokuapp.com/form/1',
        github: 'https://github.com/philyoosays/emailwidget',
        thumb: emailwidget,
        note: '***Currently working to solve the one-click email (from clients own email) send of template email. Modern email security-wise, this is impossible but I am working on the work-arounds needed to make this work.',
        zoom: false,
      },
      {
        name: 'Minesweeper',
        desc: 'Old-school Minesweeper. I made this because someone I know who was making minesweeper had a hard time solving the "click on whitespace clears adjacent whitespace" issue and I thought it\'d be a fun challenge',
        tech: 'Written in vanilla JS. I solved the whitespace issue by adding an onClick function to empty spaces which clicks the spaces adjacent to it if they are also whitespaces.',
        highlights: [
          'Vanilla Javascript',
          'HTML',
          'CSS'
        ],
        link: 'http://philyoo-minesweeper.surge.sh/',
        github: 'https://github.com/philyoosays/minesweeper',
        thumb: minesweeper,
        note: '***Most function is done, I just need to add scoring, flags, game reset, and other ancillary things to put a bow on top.',
        zoom: false,
      }
    ],
      mouseX: 0,
      mouseY: 0
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
      mouseY: e.clientY
    })
  }

  render() {
    const toShow = this.state.navselection === 'projects' ?
      <Projects
        projects={this.state.projects}
        makeZoom={this.zoomMaker}
      /> : this.state.navselection === 'inprogress' ?
        <Projects
          projects={this.state.inprogress}
        /> : this.state.navselection === 'about' ?
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
