import { Button } from '@aws-amplify/ui-react';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import React, { useEffect, useState } from 'react';
import { createWordListItem } from '../graphql/mutations'

export default function Loader() {

const [status, setStatus] = useState([]);

async function loadFunc() {
  var wordListId = "16ac25a0-f4a7-47bc-9324-5f32366dcb39";
  var wordList = ["acquire",
                  "across",
                  "action",
                  "airport",
                  "autobiography",
                  "autoaraph",
                  "barely",
                  "biography",
                  "changing",
                  "decided",
                  "deport",
                  "discontent",
                  "expensive",
                  "export",
                  "exports",
                  "famous",
                  "final",
                  "forgiven",
                  "formal",
                  "fortunate",
                  "graphic",
                  "great",
                  "greatly",
                  "hopeful",
                  "hopelessly",
                  "hoping",
                  "imagination",
                  "important",
                  "informal",
                  "inquire",
                  "introduce",
                  "lately",
                  "likely",
                  "likeness",
                  "lovely",
                  "misinformed",
                  "misjudged",
                  "misspell",
                  "mistaken",
                  "morphograph",
                  "performance",
                  "photographer",
                  "photographic",
                  "portable",
                  "porter",
                  "really",
                  "reformed",
                  "replacement",
                  "replacing",
                  "report",
                  "reported",
                  "require",
                  "requirement",
                  "reusable",
                  "should",
                  "showed",
                  "support",
                  "supported",
                  "telegraph",
                  "television",
                  "their",
                  "tracing",
                  "transform",
                  "translate",
                  "transmit",
                  "transplant",
                  "transport",
                  "transporting",
                  "uncover",
                  "uninformed",
                  "unreported",
                  "usable",
                  "usage",
                  "widest",
                  "wonderful"];

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
