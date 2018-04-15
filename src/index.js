import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import Project from './components/project';
import ProjectList from './components/project-list';

import './index.css';

export default class HomePage extends React.Component {
    render() {
        return <div>
            <Header />
            <Project title="About Me"
                description="I am an autodidact in software development with professional experience with the LAMP stack (CakePHP framework) using Amazon Web Services. I will soon submit a small Android app for publishing on the Google Play app store. I have also done personal projects or exploratory coding using C#/WPF, NASM assembly, Swift and Objective-C on iOS, and C++/C/makefile." />
            <ProjectList />
            <Footer />
        </div>
    }
}

ReactDOM.render(<HomePage />, document.getElementById('root'));