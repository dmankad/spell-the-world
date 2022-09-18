import { Button, TextField, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import React, { useEffect, useState } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { createWordListItem as createWordListItemMutation, deleteWordListItem as deleteWordListItemMutation } from '../graphql/mutations';
import { Link } from 'react-router-dom';
import { listWordListItems } from '../graphql/queries';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import ReactAudioPlayer from 'react-audio-player';
import { createGuess, createAttempt } from '../graphql/mutations'

export default function WLGame(props) {

  const [WordListItems, setWordListItems] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState([]);
  const [currentWord, setCurrentWord] = useState([]);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [voiceUrl, setVoiceUrl] = useState([]);
  const [keyboard, setKeyboard] = useState([]);
  const [audioPlayer, setAudioPlayer] = useState([]);
  const [keyPlayer, setKeyPlayer] = useState([]);
  const [lastLetter, setLastLetter] = useState([]);
  const [letterUrl, setLetterUrl] = useState([]);
  const [lastPressedTime, setLastPressedTime] = useState([]);
  const [gameState, setGameState] = useState([]);
  const [wrongs, setWrongs] = useState([]);
  const [currentAttemptId, setCurrentAttemptId] = useState([]);
  const [currentDefinition, setCurrentDefinition] = useState([]);

  const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  useEffect(() => {
    fetchWordListItems();
    console.log("Fetching...")
    setWrongs(0);
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
      setCurrentAttemptId("X");
      setCurrentWord(WordListItems[currentWordIndex]);
  }, [WordListItems])

  useEffect(() => {
      setCurrentWord(WordListItems[currentWordIndex]);
  }, [currentWordIndex])

  useEffect(()=> {
    if(currentWord) {
      setVoiceUrl("https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/"+currentWord.id+".mp3");
      updateDef();
    }
  }, [currentWord])

  useEffect(()=> {
    console.log("Pressed a letter. " + lastLetter)
    if(lastLetter && keyPlayer.audioEl && keyPlayer.audioEl.current) {
      var newUrl = "https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/"+lastLetter+".mp3";
      if(keyPlayer.audioEl.current.src == newUrl) {
        keyPlayer.audioEl.current.play()
      }
      else {
        setLetterUrl(newUrl)
      }
    }
  }, [lastPressedTime])

  async function updateDef() {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+currentWord.word)
      .then((response) => response.json())
      .then((data) => setCurrentDefinition(data[0].meanings[0].definitions[0].definition));
  }

  async function recAttempt() {
    try {
      const newAttempt = await API.graphql(graphqlOperation(createAttempt, {
        input: {
          'user':props.user,
          'dateStarted':new Date(),
          'wordlistitemID':currentWord.id
        } }))
      setCurrentAttemptId(newAttempt.data.createAttempt.id);
      console.log("Current Attempt: " + currentAttemptId)
      return currentAttemptId;
    } catch (err) {
      console.log('error creating Attempt:', err)
    }
  }
  async function recGuess() {
    console.log("Guess AttemptId "+ currentAttemptId);
    if(currentAttemptId=="X") {
      await recAttempt();
      await recGuessWork()
    }
    else {
      await recGuessWork();
    }
  }
  async function recGuessWork() {
    try {
      const newGuess = await API.graphql(graphqlOperation(createGuess, {
        input: {
          'attemptID':currentAttemptId,
          'dateGuessed':new Date(),
          'word':currentWord.word.toUpperCase(),
          'user':props.user,
          'guess':currentGuess.toUpperCase()
        } }))
    } catch (err) {
      console.log('error creating Guess:', err)
    }
  }

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
    keyboard.clearInput();
    setGameState("MENU");
    props.callback("GameOver");
  }

  function playword() {
      var newUrl = "https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/"+currentWord.id+".mp3";
      if(audioPlayer.audioEl.current.src == newUrl) {
        audioPlayer.audioEl.current.play()
      }
      else {
        setVoiceUrl(newUrl)
      }
  }

  function playletter(letter) {
    var newUrl = "https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/"+letter+".mp3";
    if(keyPlayer.audioEl.current.src == newUrl) {
      keyPlayer.audioEl.current.play()
    }
    else {
      keyPlayer.audioEl.current.src = newUrl
      keyPlayer.audioEl.current.play()
    }
  }

  async function spellword() {
      playword();
      await delay(1000);
      var chars=currentWord.word.split('');
      console.log(chars);
      for(var i=0; i<chars.length; i++) {
        await delay(1200);
        playletter(chars[i]);
      }
  }

  function submitGuess() {
    console.log("CurrentGuess="+currentGuess);
    console.log("CurrentWord="+currentWord.word);

    recGuess();
    if(currentGuess.toUpperCase() == currentWord.word.toUpperCase()) {
      console.log("Got it!");
      setWrongs(0);
      setCurrentAttemptId("X");
      var newUrl = "https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/right.mp3";
      if(keyPlayer.audioEl.current.src == newUrl) {
        keyPlayer.audioEl.current.play()
      }
      else {
        setLetterUrl(newUrl)
      }
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
      var newUrl = "https://spelltheworld1b170859-staging.s3.us-west-2.amazonaws.com/wrong.mp3";
      setWrongs(wrongs+1);
      if(keyPlayer.audioEl.current.src == newUrl) {
        keyPlayer.audioEl.current.play()
      }
      else {
        setLetterUrl(newUrl)
      }
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
    <button onClick={spellword} className={wrongs>=3?"":"hidden"}>Spell Word</button>

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
      ref={(element) => { setKeyPlayer(element) }}
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
      <Text
        id="currentDefinition"
        className="definition"
      >Definition: {currentDefinition}</Text>
      <Text
        id="currentDefinition"
        className="definition"
      >Definition: {props.user}</Text>
    </div>


  )
}
