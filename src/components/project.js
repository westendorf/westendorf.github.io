import React from 'react';
import './project.css';

export default class Project extends React.Component {
    render() {
        let videoTag = this.props.videoSrc == null ? '' : <video className="project-video" src={this.props.videoSrc} />;
        return <div className="project">
            <h1 className="project-title">{this.props.title}</h1>
            <p className="project-description">{this.props.description}</p>
            {videoTag}
        </div>

    }
}