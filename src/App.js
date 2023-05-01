
import { Fragment } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Button } from '@mui/material'

import Toolbar from './components/Toolbar.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'

import ResumeSection from './components/ResumeSection.js';

import ScrollToTop from 'react-scroll-to-top';

import './assets/index.css';
import 'animate.css/animate.min.css'

import ProjectPage from './pages/ProjectsPage.js';

/*

    todo

    extract GitHubButton component

*/

const resume = {
    education : [
        {
            name : 'Sonoma State University',
            degree : 'B.S in Computer Science',
            items : [
                '3.7 GPA',
                'Cum Laude',
                'Graduated with Distinction'
            ]
        },
        {
            name : 'Santa Rosa Junior College',
            degree : '',
            items : [
                "Deans High Honor's recipient"
            ]
        }
    ],
    experience : [
        {
            name : "Chop's Teen Club",
            title : 'Technology Coordinator',
            duration : '2017-2022',
            items : [
                'Designed, developed, and deployed in-house software for program area management',
                'Developed and implemented a robust set of technical procedures',
                'Participated in leadership discussions to provide technology related perspective, feedback, and brainstorming',
                'Taught classes on introductory programming, game programming, and basic game design',
                'Mentored teens aged 12-18'
            ]
        }
    ],
    projects : [
        {
            name : "EDI: Employee Database Interface",
            id : 'edi',
            tech : [ 'C++', 'MySQL', 'Qt' ],
            repo : 'https://github.com/jhhend/EDI-EmployeeDatabaseInterface',
            desc : 'An employee management system which allows managers to schedule employees for shifts and view metrics relating to their overall productivity',
            items : [
                'Collaborated to develop an employee management system which allows managers to schedule employees for shifts and view metrics relating to their overall productivity',
                'Led front facing UI design as well as backend logic implementation and database design',
                'Successfully implemented custom built UI modules utilizing the Qt framework'
            ]
        },
        {
            name : "COVID-19 Pneumonia Severity Classification",
            id : 'covid',
            tech : [ 'Python', 'Tensorflow' ],
            repo : 'https://github.com/jhhend/xray-COVID-pneumonia',
            desc : 'Classification of the severity of pneumonia in COVID-19 patients via Tensorflow ML',
            items : [
                'Collaborated to develop a neural network to determine the severity of pneumonia in lung scans of COVID-19 positive patients',
                'Led and developed a robust preprocessing pipeline to address dataset imbalance',
                'Utilized transfer learning via Inception v3 with aided hyperparameter tuning via Keras',
                'Final model achieved 96% accuracy'
            ]            
        },
        {
            name : "Spotify Journey",
            id : 'spotify',
            tech : [ 'JavaScript', 'React', 'D3.js', 'Axios', 'MySQL', 'MUI' ],
            repo : 'https://github.com/jhhend/spotify-journey',
            desc : 'Full stack application which runs data analysis on Spotify playlists',
            items : [
                'Successful implementation of a full-stack application utilizing Spotify’s API to provide robust data visualizations regarding user’s playlists',
                'Utilized Spotify’s API in conjunction with a purpose built database to pull song/playlist data for a given user',
                'Wrote and executed a variety of efficient SQL queries to retrieve user data',
                'Displayed relevant, clear, and digestible data visualizations via D3.js'
            ]            
        },
        {
            name : "TLManager",
            td : 'tl',
            tech : [ 'Python', 'TKinter' ],
            desc : 'In-house software for use in a computer-lab environment which allows the user to perform common remote actions via PSExec',
            items : [
                'Designed, documented, and implemented in-house software for use in a computer-lab environment, still being utilized successfully today',
                'Implemented full graphical interface which allows the user to perform common remote actions via PSExec',
                'Easily adaptable to other work environments, user friendly'
            ]
        }    
    ],
    allProjects : [ ],
    skills : [
        {
            name : "Technical Skills",
            items : [
                'C/C++',
                'Javascript',
                'HTML/CSS',
                'React',
                'Python',
                'MySQL/MariaDB',
                'Git/Source Control',
                'Strong understanding of data structures and algorithms'
            ]
        },
        {
            name : "Personal Skills",
            items : [
                'Goal oriented',
                'Analytical',
                'Creative',
                'Self-motivated',
                'Strong communication skills'
            ]
        }
    ]
}

resume.allProjects = [ ...resume.projects ].concat([
    {
        name : 'Sketch: p5.js Radar Chart',
        tech : [ 'JavaScript', 'p5.js' ],
        image : './projRadarChart.gif',
        repo : 'https://github.com/jhhend/p5js-radar-chart',
        desc : 'Radar chart example in p5.js'
    },
    {
        name : 'Sketch: p5.js Game of Life',
        tech : [ 'JavaScript', 'p5.js' ],
        repo : 'https://github.com/jhhend/p5js-game-of-life',
        desc : "Conway's Game of Life implementation in p5.js"
    },
    {
        name : 'Resume/Portfolio Webpage',
        tech : [ 'JavaScript', 'React', 'MUI' ],
        desc : "Who doesn't love recursion?"
    }
]); 

function App() {
    
    return (
        <Fragment>
            <Toolbar/>

            <div id='home'/>
            <Home/>

            <div id='resume'/>
                <AnimationOnScroll animateOnce animateIn='animate__fadeIn'> <Education education={resume.education}/> </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn='animate__fadeIn'> <Experience experience={resume.experience}/> </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn='animate__fadeIn'> <Projects projects={resume.projects}/> </AnimationOnScroll>
                <AnimationOnScroll animateOnce animateIn='animate__fadeIn'> <Skills skills={resume.skills}/> </AnimationOnScroll>

            <Contact/>
            <div id='contact'/>

            <ScrollToTop smooth/>
        </Fragment>
    );

}

export default App;
