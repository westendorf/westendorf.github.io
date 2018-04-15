import React from 'react';

import Project from './project';
import ContactMeBtn from './contact-me-btn';

import './project-list.css';

/**
 * 
 */
export default class ProjectList extends React.Component {
    render() {
        return <div className="project-list">
            <Project title="Building My Portfolio Site"
                description="I just began to learn React and thought to myself, why not create my portfolio with React, ES6, and NPM tools? I have been wanting to dive into React for a while now, and this site is my first legitimate attempt." />
            <Project title="What To-Do (Android)"
                description="This is a productivity app whose MVP implementation is a basic to-do list, but will evolve as time permits. This is a personal project that I will be submitting to Google Play upon completion." />
            <ContactMeBtn />
        </div>
    }
}