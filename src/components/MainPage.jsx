import { useState } from "react";
import wordList from "../data";
export default function MainPage() {
  const [currentWord, setCurrentWord] = useState(() => {
    let randomIdx = Math.floor(Math.random() * wordList.length);
    return { word: wordList[randomIdx].word, hint: wordList[randomIdx].hint };
  });

  return (
    <>
      <h3>{currentWord.word}</h3>
      <p>{currentWord.hint}</p>
    </>
  );
}
