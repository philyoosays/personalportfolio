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
import apologetics from './screencaps/apologetics_hub.png';
import restaurantPOS from './screencaps/restaurantPOS.png';
import helios from './screencaps/helios.png';

export default class MainBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navselection: 'projects',
      projects:[
        {
          name: 'Point of Sales System - Retail',
          desc: 'A retail POS with modern bells and whistles. The system keeps track of payroll, inventory, and other expenses to be a one-stop shop for all the software needs of a retail business. Additional features are all modular and easy to add on.',
          tech: 'This app has a React Front-end with a Node.js backend.',
          highlights: [
            'JSON web tokens',
            'PostgreSQL',
            'React and React-Router',
            'QR code based inventory management',
            'real-time reporting for P/L',
            'Peripheral support'
          ],
          link: 'Will not be hosted on-line',
          github: '',
          thumb: restaurantPOS,
          note: 'This is built as a sellable product so the Github repo is private.',
          zoom: true,
          heroku: false,
        },
        {
          name: 'Apologetics Hub',
          desc: 'Geared toward non-profits who\'s supporter-base need to defend themselves using accurate assertions or need to disprove an in-correct opposing view, this site is a template for such non-profits to supply their supporters with an easy to search hub for the true-ness or false-ness of a claim.',
          tech: 'Written with React with a Node/Express backend with PostgreSQL for data storage. JSON Web Tokens for auth into an admin section with is basically a content management control panel.',
          highlights: [
            'JSON Web Tokens',
            'React.js',
            'React-Router',
            'Node.js/Express.js',
            'PostgreSQL',
            'WYSIWYG editor'
          ],
          link: 'https://apologetics-hub.herokuapp.com/',
          github: 'https://github.com/philyoosays/apologetics_hub',
          thumb: apologetics,
          note: '***This is something I may want to sell so I might make the git repo private.',
          zoom: true,
          heroku: true,
        },
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
          heroku: false,
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
          heroku: false,
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
          heroku: true,
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
          heroku: false,
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
          heroku: false,
        }
      ],
      inprogress: [
        {
          name: 'Point of Sales System - Restaurant',
          desc: 'A restaurant POS with modern bells and whistles. The system will provide multiple options for managing the flow in the restaurant. Additional features are all modular and easy to add on.',
          tech: 'This app has multiple front-end UIs all written in React. There will a customer facing view for self ordering, a wait staff/hostess/kitechen facing view for order processing, an owner facing view to display real-time restaurant data, a web-based ordering system, and a React-Native mobile app for mobile ordering. Websockets are utilized to keep all the open instances synced in real-time as well as internet-sourced orders.',
          highlights: [
            'multiple Node servers all working together and keeping each other synced',
            'JSON web tokens',
            'Websockets',
            'PostgreSQL',
            'React and React-Router',
            'QR code based inventory management',
            'Hostess view which integrates reservations, walk-ins, and auto combines to form a waitlist',
            'Text message notifications for the waitlist',
            'real-time reporting for P/L'
          ],
          link: 'Still in development and will not be hosted on-line',
          github: '',
          thumb: restaurantPOS,
          note: 'This is being built with selling it in mind so the Github repo is private.',
          zoom: true,
          heroku: false,
        },
        {
          name: 'Helios',
          desc: 'A voice and text prompted simulated AI that can do nearly everything Amazon\'s Alexa can do, but it has an additional section that tries to determine user intent, context, and purpose of the heard speech. This allows it to respond back with memories and experiences and can tell you stories. You can interrupt him, ask a question about a detail of a story, get your answer and then Helios will pick up where it left off.',
          tech: 'Speech Recognition and Speech sythesis are the major parts. It keeps records of the things it says or are spoken to, and adds them into its bank of memories. In the end, the Helios System will comprise of multiple computers all working with each other, each with a specific purpose to provide a robust home management system.',
          highlights: [
            'Speech Recognition',
            'Speech Synthesis',
            'multiple languages',
            'accepts voice and text commands',
            'has a personality',
            'Downloadable content for purchase',
          ],
          link: 'Still under development and will not be hosted on-line for the time being',
          github: 'https://github.com/philyoosays/helios-react',
          thumb: helios,
          note: 'Currently closed the third iteration, and have begun planning the 4th iteration.',
          zoom: false,
          heroku: false,
        },
        {
          name: 'B2Devs',
          desc: 'I want to find small businesses and non-profits that can\'t afford a developer, and I want to amass a list of newbie devs that need experience and something to put on a resume and connect them together. The devs get real experience, the businesses get work they couldn\'t afford done.',
          tech: 'This is a React app that will eventually have a React Native build for mobile, database solution has not been selected yet but I\'m leaning towards MongoDB just for the practice. Back-end will be in Node.js/Express.js. HOWEVER, since I only have two views done, I\'m giving serious thought to just switching to Angular, just for the practice.',
          highlights: [
            'currently React.js',
            'possibly Angular.js instead',
            'JSON Web Tokens',
            'possibly MongoDB',
            'React Native post-MVP',
          ],
          link: 'Stopped development to work on the POS',
          github: 'https://github.com/philyoosays/b2devs',
          thumb: noImage,
          note: '***Really considering a switch to Angular or VUE',
          zoom: false,
          heroku: false,
        },
        {
          name: 'Psych Meds MobileApp',
          desc: 'When starting new medication, one thing that many people often do is go online to find other people\'s experiences on the same drug. This mobile app provides a list of medications and users can anonymously share what their experiences were na dread about what someone else went through. (This app was very recently conceived so nothing is really built yet)',
          tech: 'React Native, with a Node.js/Express.js backend. Started with a PostgreSQL database, but will move to MongoDB for this project. JSON Web Tokens for auth.',
          highlights: [
            'React Native',
            '3rd Party API',
            'MongoDB',
            'Node.js/Express.js',
          ],
          link: 'Recently conceptualized, will begin development soon.',
          github: 'https://github.com/philyoosays/med-reviews-mobileapp.git',
          thumb: noImage,
          note: 'This app was very recently conceived so nothing is really built yet',
          zoom: false,
          heroku: false,
        },
        {
          name: 'Constituent Email Widget',
          desc: 'A widget allowing non-profits to easily email their constituents while also collecting constituent information for relationship building and prospecting.\n\rClients will be able to create new custom campaigns through the admin cpanel, and download constituent data as CSVs.',
          tech: 'Written in React with a Node.js/Express.js backend with PostgreSQL for data storage. JSON Web Tokens for auth. Users can download campaign data in CSV format.',
          highlights: [
            'JSON Web Tokens',
            'React.js',
            'Node.js/Express.js',
            'PostgreSQL',
            '3rd Party API',
            'CSV data downloads'
          ],
          link: 'https://emailwidget.herokuapp.com/form/1',
          github: 'https://github.com/philyoosays/emailwidget',
          thumb: emailwidget,
          note: '***Currently working to solve the one-click email (from clients own email) send of template email. Modern email security-wise, this is impossible but I am working on the work-arounds needed to make this work.',
          zoom: true,
          heroku: true,
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
          heroku: false,
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
