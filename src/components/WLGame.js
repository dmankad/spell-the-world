import { Button, TextField, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { createWordListItem as createWordListItemMutation, deleteWordListItem as deleteWordListItemMutation } from '../graphql/mutations';
import { Link } from 'react-router-dom';
import { listWordListItems } from '../graphql/queries';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import ReactAudioPlayer from 'react-audio-player';

export default function WLGame(props) {

  const [WordListItems, setWordListItems] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState([]);
  const [currentWord, setCurrentWord] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [voiceUrl, setVoiceUrl] = useState([]);
  const [keyboard, setKeyboard] = useState([]);
  const [audioPlayer, setAudioPlayer] = useState([]);
  const [lastLetter, setLastLetter] = useState([]);
  const [letterUrl, setLetterUrl] = useState([]);
  const [lastPressedTime, setLastPressedTime] = useState([]);
  const [gameState, setGameState] = useState([]);

  useEffect(() => {
    fetchWordListItems();
    console.log("Fetching...")
    if(props.selWL != "X") {
      props.callback("GameOn");
      setGameState("ON");
      console.log("props.selWL="+props.selWL+", GameState:"+gameState);
    }
    else {
      setGameState("OFF");
    }
  }, [props.selWL]);

  useEffect(() => {
      setCurrentWordIndex(0);
      setCurrentWord(WordListItems[currentWordIndex]);
  }, [WordListItems])

  useEffect(() => {
      setCurrentWord(WordListItems[currentWordIndex]);
  }, [currentWordIndex])

  useEffect(()=> {
    if(currentWord) {
      setVoiceUrl("https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/"+currentWord.id+".mp3")
    }
  }, [currentWord])

  useEffect(()=> {
    if(lastLetter) {
      setLetterUrl("https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/"+lastLetter+".mp3?"+(Date.now()))
    }
  }, [lastPressedTime])


  async function fetchWordListItems() {
    if(props.selWL) {
      console.log("selWL found: " + props.selWL);
      const apiData = await API.graphql({ query: listWordListItems });
      setWordListItems(apiData.data.listWordListItems.items.filter(WordListItem => WordListItem.wordlistID == props.selWL));
    }
  }

  function updateInput(event) {
    setCurrentGuess(event.target.value);
    console.log("CurrentGuess="+event.target.value);
  }

  function resetGame() {
    setCurrentGuess("");
    setGameState("MENU");
    props.callback("GameOver");
  }

  function playword() {
      setVoiceUrl("https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/"+currentWord.id+".mp3?"+(Date.now()))
  }

  function submitGuess() {
    console.log("CurrentGuess="+currentGuess);
    console.log("CurrentWord="+currentWord.word);
    if(currentGuess.toUpperCase() == currentWord.word.toUpperCase()) {
      console.log("Got it!");
      setLetterUrl("https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/right.mp3?"+(Date.now()))
      if(WordListItems.length <= (currentWordIndex+1)) {
        resetGame();
      }
      else {
        setCurrentWordIndex(currentWordIndex+1);
        setCurrentGuess("");
        keyboard.clearInput();
      }
    }
    else {
      setLetterUrl("https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/wrong.mp3?"+(Date.now()))
    }
  }

  function onKChange(input) {
    input&&console.log("Input Changed", input);
    setCurrentGuess(input);
  }

  function onKPress(button) {
    button&&console.log("Button Pressed " + button);
    if(button=="{enter}") {
      submitGuess();
    }
    else if(button.search(/[A-Z]/)==0) {
      setLastLetter(button.toLowerCase());
      setLastPressedTime(Date.now());
    }
  }

  return(
    <div className={gameState=="ON"?"game-container":"hidden"}>
    <button className="tinyboy" onClick={resetGame}>Back to Word Lists</button>



    <button onClick={playword}>Play Word</button>

    <div class="spacer">&nbsp;</div>
    <span class="score">Word List: ({props.selWLName})</span>
    <span class="score">Word {currentWordIndex}/{WordListItems.length}</span>
    <ReactAudioPlayer
      src={voiceUrl}
      autoPlay={true}
      controls={false}
      ref={(element) => { setAudioPlayer(element) }}
    />
    <ReactAudioPlayer
      src={letterUrl}
      autoPlay={true}
      controls={false}
    />
    <Text
      id="currentWordEntry"
      className="guess-entry"
    >{currentGuess}</Text>
      <div>
        <Keyboard
            keyboardRef={(r) => (setKeyboard(r))}
            onChange={(e) => onKChange(e)}
            onKeyPress={(e) => onKPress(e)}
            disableButtonHold={true}
            layout={{
              default: [
                " Q W E R T Y U I O P {bksp}",
                ' A S D F G H J K L {enter}',
                " Z X C V B N M   ",
              ],
              shift: [
                " Q W E R T Y U I O P {bksp}",
                ' A S D F G H J K L {enter}',
                " Z X C V B N M   ",
              ]
            }}
          />
      </div>
    </div>


  )
}
