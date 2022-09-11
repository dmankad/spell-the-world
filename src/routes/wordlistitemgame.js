import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom'
import { listWordListItems } from '../graphql/queries';


export default function WordListItemPage() {

  const [WordListItems, setWordListItems] = useState([]);

  useEffect(() => {
    fetchWordListItems();
  }, []);

  async function fetchWordListItems() {
    const apiData = await API.graphql({ query: listWordListItems });
    setWordListItems(apiData.data.listWordListItems.items);
  }

  let params = useParams();

  return (

    <div>

    </div>

  );
}
