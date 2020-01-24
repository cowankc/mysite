import React from "react";
import "./pages.css"
import Resume from "../documents/Resume.pdf"
function Welcome() {
        return (
            <div>
                <div className="pure-g center">
                    <div className="welcome-container l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1">
                        <div className="">
                            <h1 className="container-head">Welcome to My Website</h1>
                                <p className="container-subhead">
                                My name is Kevin Cowan and I am an certified full-stack web developer currently living in
                                Austin TX.  I am a motivated and resourceful worker who enjoys problem solving and working 
                                with others. I am looking forward to expanding my skill set by working with a driven team 
                                that is motivated to create quality and professional material. I am proficient in using 
                                JavaScript, React,and jQuery to build professional quality websites.
                                </p>
                                <p>
                                <a href="https://www.linkedin.com/in/kevin-cowan-728580187/" target="blank" className="pure-button pure-button-primary">Linkdin</a>
                                <a href="https://github.com/cowankc?tab=repositories" target="blank" className="pure-button pure-button-primary">Github</a>
                                <a href={Resume} target="blank" className="pure-button pure-button-primary">Resume</a>
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Welcome;
