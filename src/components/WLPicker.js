import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { createWordList as createWordListMutation, deleteWordList as deleteWordListMutation } from '../graphql/mutations';
import { Link } from 'react-router-dom';
import { listWordLists } from '../graphql/queries';
import WLGame from './WLGame';

export default function WLPicker(props) {

  const [WordLists, setWordLists] = useState([]);
  const [selWordList, setSelWordList] = useState([]);
  const [selWordListN, setSelWordListN] = useState([]);
  const [gameState, setGameState] = useState([]);

  useEffect(() => {
    console.log("Mounting WL Picker");
    setGameState("MENU");
    setSelWordList("X");
    fetchWordLists();
  }, [props.selGrade]);

  async function fetchWordLists() {
    if(props.selGrade) {
      const apiData = await API.graphql({ query: listWordLists });
      setWordLists(apiData.data.listWordLists.items.filter(WordList => WordList.gradeID == props.selGrade));
    }
  }

  function gameCallback(event) {
    if(event=="GameOn") {
      setGameState("ON");
      props.callback("GameOn");
    }
    if(event=="GameOver") {
      setGameState("MENU");
      setSelWordList("X");
      props.callback("GameOver");
    }
  }

  function selectWordList(id, name) {
    setSelWordList(id);
    setSelWordListN(name)
    console.log("Picked " + id);
  }

  return(
    <div className="menu-container">
    {
        WordLists.map(WordList => (
          <Button className={gameState=="ON"?"hidden":""} onClick={() => {selectWordList(WordList.id, WordList.name)}}>{WordList.name}</Button>
        ))
    }
    <WLGame selWL={selWordList} selWLName={selWordListN} callback={gameCallback} />
    </div>
  )
}
