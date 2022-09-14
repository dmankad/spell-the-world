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

  useEffect(() => {
    fetchWordListItems();
    console.log("Fetching...")
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
  function submitGuess() {
    console.log("CurrentGuess="+currentGuess);
    console.log("CurrentWord="+currentWord.word);
    if(currentGuess.toUpperCase() == currentWord.word.toUpperCase()) {
      console.log("Got it!");
      setCurrentWordIndex(currentWordIndex+1);
      setCurrentGuess("");
      keyboard.clearInput();
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
  }

  return(
    <div className="container">
    <ReactAudioPlayer
      src={voiceUrl}
      autoPlay={true}
      controls={true}
      ref={(element) => { setAudioPlayer(element) }}
    />
    <Text
      id="currentWordEntry"
    >{currentGuess}</Text>
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


  )
}
