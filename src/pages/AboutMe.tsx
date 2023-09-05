import { CSSProperties } from 'react';
// import { InputLabel } from 'yoo-lib/dist/components';
// import { useLocation } from 'react-router-dom';
// import analytics from '../utils/analytics';

import aeLogo from '../icons/adobe_after_effects.png'
import aiLogo from '../icons/adobe_illustrator.png'
import bashLogo from '../icons/bash-logo.png'
import circleciLogo from '../icons/circleci-logo.png';
// import css from '../icons/css.png'
// import django from '../icons/Django.png'
import dockerLogo from '../icons/docker-logo.png';
// import expressLogo from '../icons/expressjs.png'
import gitlabciLogo from '../icons/gitlab-ci.png';
import goLogo from '../icons/goIcon.png'
// import html from '../icons/html.png'
import mongoDB from '../icons/mongodb.png'
import nodeLogo from '../icons/node.png';
import npmLogo from '../icons/npm-logo.png';
import psLogo from '../icons/adobe_photoshop.png'
import psqlLogo from '../icons/psql-logo.png';
import prLogo from '../icons/adobe_premiere.png'
import python from '../icons/python.png'
import raspberryPiLogo from '../icons/rpi-logo.png'
import reactLogo from '../icons/react.png'
import reactNativeLogo from '../icons/react_native.png'
import sass from '../icons/sass.png'
import tsLogo from '../icons/tsLogo.png'

import './styles/aboutme.scss';

export namespace Type {
    export interface Skill {
        name?: string;
        logo: string;
        scale?: string;
        styles?: CSSProperties;
    }
    export interface Props {}
}

const LINKEDIN_ICO = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>

const SKILLS: Type.Skill[] = [
    { name: 'Typescript', logo: tsLogo, styles: { position: 'relative', top: '5%' } },
    { name: 'Node.js', logo: nodeLogo, scale: '0.9' },
    { name: 'React.js', logo: reactLogo, scale: '1.7', styles: { position: 'relative', top: '20%' } },
    { name: 'Python', logo: python, scale: '0.9', styles: { position: 'relative', top: '10%' } },
    { name: 'GoLang', logo: goLogo, },
    { name: 'npm', logo: npmLogo, styles: { position: 'relative', top: '10%' } },
    { name: 'Bash Script', logo: bashLogo, },
    { name: 'Docker', logo: dockerLogo, styles: { position: 'relative', top: '9%' } },
    { name: 'Circle CI', logo: circleciLogo, styles: { position: 'relative', top: '10%' } },
    { name: 'Gitlab CI', logo: gitlabciLogo, styles: { position: 'relative', top: '10%' } },
    { name: 'Postgres', logo: psqlLogo, styles: { position: 'relative', top: '10%' } },
    { name: 'MongoDB', logo: mongoDB, scale: '1.1', styles: { position: 'relative', top: '10%' } },
    { name: 'Sass', logo: sass, styles: { position: 'relative', top: '30%', left: '5%' } },
    { name: 'React Native', logo: reactNativeLogo, scale: '1.2', styles: { position: 'relative', top: '25%' } },
    { name: 'Raspberry Pi', logo: raspberryPiLogo, scale: '0.75', styles: { position: 'relative', top: '10%' } },
    { name: 'After Effects', logo: aeLogo, styles: { position: 'relative', top: '20%' } },
    { name: 'Illustrater', logo: aiLogo, styles: { position: 'relative', top: '7%' } },
    { name: 'Photoshop', logo: psLogo, styles: { position: 'relative', top: '7%' } },
    { name: 'Premiere Pro', logo: prLogo, styles: { position: 'relative', top: '5%' } },
]

const AboutMe = (props: Type.Props) => {
    const makeSkills = () => {
        return SKILLS.map((skill, idx) => {
            const { logo, name, scale, styles } = skill;

            const renderStyles = {
                ...styles,
                ...(scale && { transform: `scale(${scale})` }),
            }
 
            return (
                <div className="aboutme-skills-skill" key={idx}>
                    <div className="aboutme-skills-imgCont">
                        <img
                            src={logo}
                            className="skill-logo"
                            key={idx}
                            style={renderStyles}
                            alt={name}
                        />
                    </div>
                    <div className="aboutme-skills-label">
                        <p className="aboutme-skills-label-text">{name}</p>
                    </div>
                </div>
            );
        });
    };
    // const location = useLocation();
    const handleLinkClick = (e: any) => {
        // analytics.click(location, { details: 'linkedin', flags: ['link'] });
    };
    return (
        <div className="aboutme">
            <div className="aboutme-text">
                <p>
                    I like solving problems, building things, and consuming information.
                </p>
                <p>
                    Primarily a Javascript/Typescript Developer.<br />
                    Full-stack with a minor preference to the back-end.<br />
                    Working on a regular basis with Python, GO, PSQL, Bash Scripting.<br />
                </p>
                <p>
                    Experience in publishing and maintaining npm packages, 
                    creating and maintaining build piplines, automated solutions, etc.
                </p>
                <p>Currently employed as a Vulnerability Analysis Engineer with NowSecure.</p>
                <p>Open to contract work.</p>
                <p>Also, I enjoying mentoring</p>
            </div>
            <div className="aboutme-link">
                <a className="aboutme-link-linkedin" href="https://www.linkedin.com/in/philyoo" onClick={handleLinkClick}>
                    {/* <InputLabel label={LINKEDIN_ICO}>
                        <p>linkedin.com/in/philyoo</p>
                    </InputLabel> */}
                    {LINKEDIN_ICO}
                    <p>linkedin.com/in/philyoo</p>
                </a>
            </div>
            <div className="aboutme-skills">
                {makeSkills()}
            </div>
        </div>
    );
}

export default AboutMe;
