import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom'
import { listWordLists } from '../graphql/queries';


export default function WordListPage() {

  const [WordLists, setWordLists] = useState([]);

  useEffect(() => {
    fetchWordLists();
  }, []);

  async function fetchWordLists() {
    const apiData = await API.graphql({ query: listWordLists });
    setWordLists(apiData.data.listWordLists.items);
  }

  let params = useParams();
  const gradeID = params.gradeId;
  const FilteredWordLists = WordLists.filter(WordList => WordList.gradeID == gradeID);

  return (

    <div>
    {
      FilteredWordLists.map(WordList => (
        <Link to={`/wordlistitem/${WordList.id}`}> {WordList.name} </Link>
      ))
    }
    </div>

  );
}
