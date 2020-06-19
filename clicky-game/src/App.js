import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
    state = {
      friends,
      score: 0,
      highScore: 0,
      clickedFriend: false 
    };

  
  
    render() {
      return (
        <Wrapper>
          <Nav
            score={this.state.score}
            highScore={this.state.highScore}
          />
          {this.state.friends.map(friend => (
            <FriendCard
              Clicked={this.state.Clicked}
              handleClick={this.handleClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </Wrapper>
      );
    }
  }

  export default App;






  

  
  