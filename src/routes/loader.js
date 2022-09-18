import { Button } from '@aws-amplify/ui-react';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useState } from 'react';
import { createWordListItem } from '../graphql/mutations'

export default function Loader() {

const [status, setStatus] = useState([]);

async function loadFunc() {
  var wordListId = "a3b86458-8bd3-479f-a58a-77e0b2373eae";
  var wordList = ["bright",
    "fight",
    "flight",
    "fright",
    "high",
    "light",
    "meat",
    "might",
    "night",
    "right",
    "talks",
    "than",
    "tight",
    "writes"];

    for(var i=0; i<wordList.length; i++) {
      try {
        await API.graphql(graphqlOperation(createWordListItem, {input: {'word':wordList[i],'wordlistID':wordListId} }))
      } catch (err) {
        console.log('error creating WordListItem:', err)
        setStatus(err);
      }
    }

    setStatus("Loaded: " + wordList.length);
}

  return (
    <div>
      <h2>{status}</h2>
      <Button onClick={loadFunc}>Load me up!</Button>
    </div>
  )
}
