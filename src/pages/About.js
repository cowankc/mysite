import React from "react";
import "./pages.css"
import me from "../images/me.jpg"

function About() {
        return (
            <div>
                <div className="pure-g center">
                    <div className="welcome-container l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-1">
                        <div className="bio-head">
                            <h1 className="bio-title l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-2">
                                My Bio
                            </h1>
                            <img src={me} 
                            alt="me" 
                            height="200px" 
                            width="auto" 
                            className="bioPic l-box pure-u-1 pure-u-md-1-1 pure-u-lg-1-3"/>
                        </div>
                        <div>
                            <h2>Coding Skills</h2>
                            <ul>
                                <li>Able to use CSS, Pure.css, and Bootsrtap for Front End styling</li>
                                <li>Skilled at building JavaScipt applications as well as libraries like jQuery and Ract.js</li>
                                <li>Knowledgable in working with both MySQL and MongoDB databases</li>
                                <li>Experienced with using Node.js and Express for working on server-side applications</li>
                            </ul>
                            <h2>Personal Skills</h2>
                            <ul>
                                <li>Prefer to plan ahead and work out details before starting projects</li>
                                <li>Enjoy working with others and helping them succeed</li>
                                <li>Value organization and communication in work enviroment</li>
                                <li>Believe in keeping a positive attitude even in stressful situations</li>
                            </ul>
                            <h2>Background Info</h2>
                            <ul>
                                <li>Grew up in New Hampshre</li>
                                <li>Graduated cum laude from the University of New Hampshire with a bachelors in History</li>
                                <li>Worked in high management positions for two seperate companies</li>
                                <li>Certified Full Stack Web Developer from The University of Texas </li>
                            </ul>
                            <h2>Hobbies and interests</h2>
                            <ul>
                                <li>Practicing my coding skilss and working on my own projects</li>
                                <li>Playing basketball, hiking on the trails, and skiing</li>
                                <li>Nerding out with video games and movies</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default About;