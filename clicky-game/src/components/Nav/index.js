import React from "react";
import "./style.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="clicky">
        <a href="/clicky-game/">{props.title}</a>

      <li id="message">{props.message}</li>

      <li id="score">Current Score: {props.score}</li>

      <li id="top">Top Score: {props.topScore}</li>
      </li>
    </ul>
  </nav>
);

export default Nav;