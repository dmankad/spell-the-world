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

  useEffect(() => {
    console.log("Mounting WL Picker");
    setSelWordList("X");
    fetchWordLists();
  }, [props.selGrade]);

  async function fetchWordLists() {
    if(props.selGrade) {
      const apiData = await API.graphql({ query: listWordLists });
      setWordLists(apiData.data.listWordLists.items.filter(WordList => WordList.gradeID == props.selGrade));
    }
  }

  function selectWordList(id) {
    setSelWordList(id);
    console.log("Picked " + id);
  }

  return(
    <div className="container">
    {
        WordLists.map(WordList => (
          <Button onClick={() => {selectWordList(WordList.id)}}>{WordList.name}</Button>
        ))
    }
    <WLGame selWL={selWordList} />
    </div>
  )
}
