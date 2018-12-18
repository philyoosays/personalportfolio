import React from 'react';

import Contact from './Contact'
import Skills from './Skills'
import './AboutMe.css';

import aeLogo from './icons/adobe_after_effects.png'
import aiLogo from './icons/adobe_illustrator.png'
import css from './icons/css.png'
import django from './icons/Django.png'
import expressLogo from './icons/expressjs.png'
import headShot from './screencaps/phil_headshot.jpg'
import html from './icons/html.png'
import jsLogo from './icons/javascript.svg'
import jQueryLogo from './icons/jquery.png'
import mongoDB from './icons/mongodb.png'
import nodeLogo from './icons/node.png'
import psLogo from './icons/adobe_photoshop.png'
import psqlLogo from './icons/PostgreSQL.png'
import prLogo from './icons/adobe_premiere.png'
import python from './icons/python.png'
import railsLogo from './icons/rails.png'
import reactLogo from './icons/react.png'
import reactNativeLogo from './icons/react_native.png'
import rubyLogo from './icons/ruby.png'
import sass from './icons/sass.png'

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
            labeltwo="JQuery"
            labelthree="React.js"
            labelfour="React Native"
            iconone={ jsLogo }
            icontwo={ jQueryLogo }
            iconthree={ reactLogo }
            iconfour={ reactNativeLogo }
          />
          <Skills
            labelone="Ruby"
            labeltwo="Rails"
            labelthree="Node.js"
            labelfour="Express.js"
            iconone={ rubyLogo }
            icontwo={ railsLogo }
            iconthree={ nodeLogo }
            iconfour={ expressLogo }
          />
          <Skills
            labelone="PostgreSQL"
            labeltwo="MongoDB"
            labelthree="Python"
            labelfour="Django"
            iconone={ psqlLogo }
            icontwo={ mongoDB }
            iconthree={ python }
            iconfour={ django }
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
