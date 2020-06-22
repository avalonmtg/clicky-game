import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import friends from "./friends.json";


class App extends Component {
  
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    message: "",

    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleShuffle = (array) => {
    
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ friends: array});
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    else if (newScore === 15) {
      this.setState({ message: "You beat the FBI!" });
    }
    this.handleShuffle(friends);
  };
  
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      message: "Try Again!",
      clicked: []
    });
    this.handleShuffle(friends);
  };

    
  render() {
    return (
      <div className= "container-fullwidth">
        <Nav
          score={this.state.currentScore}
          topScore={this.state.topScore}
          message={this.state.message}
        />

        <Jumbotron />
            {this.state.friends.map(friends => (
             <FriendCard
                  key={friends.id}
                  handleClick={this.handleClick}
                  id={friends.id}
                  name={friends.name}
                  image={friends.image}
                />             
                ))}
                </div>);
                
            }     
          }
                        
export default App;