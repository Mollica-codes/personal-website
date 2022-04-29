import React from 'react';

function Intro() {

    return (
        <div id="intro" className="intro">
            <div className="tree">
                <div className="leaf-1"></div>
                <div className="leaf-2"></div>
                <div className="leaf-3"></div>
                <div className="branch">
                    <div className="sm-branch-1"></div>
                    <div className="sm-branch-2"></div>
                </div>
                <div className="swing">
                    <div className="swing-seat"></div>
                </div>
            </div>
            <div className="intro-text">
                <h1 className="intro-header">Hello I'm Chris!</h1>
                <p className="intro-subheader">Software Developer</p>
            </div>
        </div>
    );
}

export default Intro;