import { useState } from "react";
import wordList from "../data";
import "./MainPage.css";

export default function MainPage() {
  const [currentWord, setCurrentWord] = useState(() => {
    let randomIdx = Math.floor(Math.random() * wordList.length);
    return {
      word: wordList[randomIdx].word.toUpperCase(),
      hint: wordList[randomIdx].hint,
    };
  });
  const [userWord, setUserWord] = useState([]);

  function printWord(word) {
    console.log("you clicked on ", word);
  }

  console.log(userWord);

  function printKeyboardWord(word) {
    setUserWord((prevWords) => [...prevWords, word]);
  }

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const keyboard = alphabets.split("").map((letter, idx) => {
    return (
      <button
        onClick={() => printKeyboardWord(letter)}
        className="keyboardBtn"
        key={idx}
      >
        {letter}
      </button>
    );
  });

  let lastUserWord = userWord[userWord.length - 1];

  if (lastUserWord && currentWord.word.includes(lastUserWord)) {
    console.log(lastUserWord, "includes");
  }
  console.log("lastUserWord: ", lastUserWord);
  console.log("currentWord: ", currentWord.word);

  const showCurrentWord = currentWord.word
    .toUpperCase()
    .split("")
    .map((indvWord, idx) => (
      <button
        onClick={() => printWord(indvWord)}
        key={idx}
        className="indvWord"
      >
        {indvWord}
      </button>
    ));

  return (
    <>
      <div className="currentWordContainer">{showCurrentWord}</div>
      <p>Hint💡: {currentWord.hint}</p>
      <div className="keyboarContainer">{keyboard}</div>
    </>
  );
}
