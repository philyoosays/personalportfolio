import React from 'react';

import Contact from './Contact'
import Skills from './Skills'
import './AboutMe.css';

import aeLogo from './icons/adobe_after_effects.png'
import aiLogo from './icons/adobe_illustrator.png'
import css from './icons/css.png'
// import django from './icons/Django.png'
import expressLogo from './icons/expressjs.png'
import goLogo from './icons/goIcon.png'
import headShot from './screencaps/phil_headshot.jpg'
import html from './icons/html.png'
import jsLogo from './icons/javascript.svg'
import mongoDB from './icons/mongodb.png'
import nodeLogo from './icons/node.png'
import psLogo from './icons/adobe_photoshop.png'
import psqlLogo from './icons/PostgreSQL.png'
import prLogo from './icons/adobe_premiere.png'
import python from './icons/python.png'
import reactLogo from './icons/react.png'
import reactNativeLogo from './icons/react_native.png'
import sass from './icons/sass.png'
import tsLogo from './icons/tsLogo.png'

export default function AboutMe() {
  return(
    <div className="container">
      <section className="blurb">
        <h2 className="header">I am a Full-Stack Developer</h2>
        <img src={headShot} alt="phils-headshot" className="headshot" />
        <p className="maintext">
          I'm obsessed with puzzles and work aggressively for solutions.
        </p>
        <p className="maintext">
          I'm in NYC if you want to build something awesome together.
        </p>
        <Contact />
      </section>
      <section className="skills">
        <h3>SKILLS</h3>
          <Skills
            labelone="JavaScript"
            labeltwo="Typescript"
            labelthree="React.js"
            labelfour="Node.js"
            iconone={ jsLogo }
            icontwo={ tsLogo }
            iconthree={ reactLogo }
            iconfour={ nodeLogo }
          />
          <Skills
            labelone="Python"
            labeltwo="React Native"
            labelthree="Go Lang"
            labelfour="Express.js"
            iconone={ python }
            icontwo={ reactNativeLogo }
            iconthree={ goLogo }
            iconfour={ expressLogo }
          />
          <Skills
            labelone="PostgreSQL"
            labeltwo="MongoDB"
            labelthree=""
            labelfour=""
            iconone={ psqlLogo }
            icontwo={ mongoDB }
            iconthree=""
            iconfour=""
          />
          <Skills
            labelone="HTML"
            labeltwo="CSS"
            labelthree="Sass"
            labelfour=""
            iconone={ html }
            icontwo={ css }
            iconthree={ sass }
            iconfour=""
          />
          <Skills
            labelone="Premiere"
            labeltwo="Photoshop"
            labelthree="Illustrator"
            labelfour="After Effects"
            iconone={prLogo}
            icontwo={psLogo}
            iconthree={aiLogo}
            iconfour={aeLogo}
          />
      </section>
    </div>
  );
}
