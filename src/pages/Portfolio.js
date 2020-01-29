import React, { Component } from "react";
import "./pages.css"
import LGO from "../images/LGO.png"
import Cooking from "../images/whatscookin.png"
import Burger from "../images/burger.jpg"
import Hangman from "../images/hangman.png"
import SP from "../images/SP.png"
import Trivia from "../images/trivia.png"
import RPG from "../images/rpg.png"
import RPS from "../images/rps.jpg"
import Widget from "../images/widget.png"

class Portfolio extends Component {

    state = {
        websites: [
            {
                title: "Lets Go Out",
                URL: "https://erwinangeles.github.io/LetsGoOut/",
                image: LGO,
                github: "https://github.com/cowankc/LetsGoOut",
                summary: "Lets Go Out is designed to help create a spontanious night of excitement and entertainment. It gives recommendations to users who are looking for a fun night out on the town by asking them whether they are looking for a movie or event, and if they are hungry and want to eat out. Once the user answers the questions, they are given their options which also have links for further details. For this project I worked on the front end and helped with styling the website."
            },
            {
                title: "What's Cookin",
                URL: "https://obscure-badlands-37234.herokuapp.com/",
                image: Cooking,
                github: "https://github.com/cowankc/whatsCookin",
                summary: "What's Cookin is a food service application that allows chefs to post homemade meals for other users to puchase and review. Users can log in and view meals being made in their area and can choose the ones they are interested in buying. The application uses javascript, JQuery, Materialize, Handlebars, and MySQL to run. For this project, I worked on linking the Database to the server and routing the pages of the website."
            },
            {
                title: "Memory Game",
                URL: "https://cowankc.github.io/Clicky-Game/",
                image: SP,
                github: "https://github.com/cowankc/Clicky-Game",
                summary: "This is a memory game I made where you must remember what image you clicked. There are twelve images that will change places when clicked. If you click on the same image more then once, you lose. See if you can get all 12 correct! The app was made using React, Javascript, Express, and uses CSS for styling."
            },
            {
                title: "Eat The Burger",
                URL: "https://polar-shore-96942.herokuapp.com/",
                image: Burger,
                github: "https://github.com/cowankc/burger",
                summary: "This application allows you to create a list of burgers to be recorded and eaten! First, enter a burger and submit it. It will be listed as a burger that is ready to be eaten. When you click on the burger it will then send it to the eaten burger list. If the user clicks on an eaten burger it will delete the burger from the list! I created the app using express and node to run the server, and handlebars for the front end. It uses Mysql to log all the burgers and keep track of their status."
            },
            {
                title: "Star Wars Trivia",
                URL: "https://cowankc.github.io/TriviaGame/",
                image: Trivia,
                github: "https://github.com/cowankc/TriviaGame",
                summary: "This is a Star Wars trivia game I created using JavaScript! You will be given four answers to choose from, once you choose an answer the game will tell you if you are right or wrong. You have 10 seconds to answer the question, if you don't answer it in time it will be counted as a wrong answer. The game records the number of correct and wrong answers. There are 15 questions in all, see how many you can get right!"
            },
            {
                title: "NBA Hangman",
                URL: "https://cowankc.github.io/Word-Guess-Game/",
                image: Hangman,
                github: "https://github.com/cowankc/Word-Guess-Game",
                summary: "This game is designed like a game of hangman. The user must try and figure out what the word is before they run out of guesses. The words are made up of NBA players from different eras. See how many you can get before you get tripped up! Once you get the page loaded press any key to start the game. This is one of my first JavaScript projects so hopefully you enjoy it!"
            },
            {
                title: "Giphy Search",
                URL: "https://cowankc.github.io/gif-generator/",
                image: Widget,
                github: "https://github.com/cowankc/gif-generator",
                summary: "This is a gif generator that uses the giphy api to load ten gifs. The gifs are sports themed and are loaded paused. When you click on the gif it will animate! you can search for your favorite team and add a new button to load gifs of that team. This is my first project using API's and was worked on by myself."
            },
            {
                title: "Presidential RPG",
                URL: "https://cowankc.github.io/unit-4-game/",
                image: RPG,
                github: "https://github.com/cowankc/unit-4-game",
                summary: "This is an RPG mini-game I created using jQuery. First, choose your character, then choose your opponent and simply hit the attack button to battle. Your character will deal damage first, followed by the enemy character. After every attack your character will recieve a bonus of its original attack power added on. Once you defeat all the enemies, you win the game!"
            },
            {
                title: "Rock, Paper, Scissors",
                URL: "https://cowankc.github.io/RPS-Multiplayer/",
                image: RPS,
                github: "https://github.com/cowankc/RPS-Multiplayer",
                summary: "This is a basic rock, paper, scissor game created using JavaScript and Firebase. Having it linked with firebase allows for 2 users too use the application at once and play against each other. Their score will be recorder on screen based on which decisions they choose. This is one of my first projects using firebase and was helpfully in learning how it can be applied to my future projects."
            },
        ]
    };

    render() {
        return (
            <div>
                <div className="pure-g center">
                    <h1 id="portfolio-title">Portfolio</h1>
                </div>
                <div className="pure-g center portfolio">
                    {this.state.websites.map(website => (
                        <div className="card">
                            <div className="front"><img src={website.image} alt="site pic"/></div>
                            <div className="back">
                                <div className="details">
                                    <h3>{website.title}</h3>
                                    <p>{website.summary}</p>
                                    <div className="links">
                                        <a href={website.URL} target="blank">Visit site</a>
                                        <a href={website.github} target="blank">View Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Portfolio;