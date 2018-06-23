import React from 'react';

export const home = 
  <div>
    <p className='upsize'>Hi! My name is 刘明宇 (Liu Mingyu - in which Liu is my surname). I am a rising junior at Nanyang Technological University with a major in Computer Science and a possible minor in Mathematics.</p>
    <p className='upsize'>I am a self-driven and curious person who always look forward to new adventures and embrace latest technologies. I aim to design and create software solutions that are high-quality, robust and beautifully-presented. Besides my interest in Computer Science, I also enjoy traveling and hiking.</p>
  </div>

export const resume = 
  <div>
    <p className='upsize'>This will be my resume!</p>
    <p>Please make a prettier & longer version!</p>
    <p>Contact me to request for an <a href='/posts'>official resume</a>.</p>
    <h1>Education</h1>
    <p>Currently a rising junior at Nanyang Technological University, Singapore.</p>
    <p>In the past, I went to the University of Waterloo for one term.</p>
    <line-break />
    <h1>Experience</h1>
    <p>Software Engineer Intern<br/><span className='small'>May 2018 - Present<br/>Sea (Shopee), Singapore</span></p>
    <p>Peer Coach<br/><span className='small'>Sept - Nov 2018<br/>SCSE-NTU, Singapore</span></p>
    <p>Teaching Assistant<br/><span className='small'>Feb - Apr 2017<br/>Saturday Kids, Singapore</span></p>
    <line-break />
    <h1>Skill Set</h1>
    <p>For programming languages, I know Java, Python, C, SQL, HTML, CSS, JavaScript.</p>
    <p>For frameworks and libraries, I have used JavaFX, Python-Flask, OpenCV, Nginx, Gunicorn, ReactJS, Redux, jQuery.</p>
    <p>As for tools, I played with Git, LaTeX, Markdown, Firebase, MySQL.</p>
  </div>

export const contact = 
  <div>
    <p>To be added</p>
  </div>

const statics = {
  home: {
    header: 'Home',
    content: home,
  },
  resume: {
    header: 'Resume',
    content: resume,
  },
  contact: {
    header: 'Contact',
    content: contact,
  },
}

export default statics;