import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🥺": "Begging",
  "😟": "Sad",
  "🤥": "Liar",
  "😒": "Dissatisfied",
  "😡": "Angry Face",
  "😑": " Expressionless Face"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) meaning = "we dont have this in our database.";

    // console.log(meaning);
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside outt</h1>
      <input onChange={emojiChangeHandler} />

      <h2>{meaning} </h2>

      <h3></h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            style={{ fontSize: "2rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
