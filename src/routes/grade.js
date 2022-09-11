import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { Link } from 'react-router-dom'
import { listGrades } from '../graphql/queries';


export default function GradePage() {

  const [Grades, setGrades] = useState([]);

  useEffect(() => {
    fetchGrades();
  }, []);

  async function fetchGrades() {
    const apiData = await API.graphql({ query: listGrades });
    setGrades(apiData.data.listGrades.items);
  }

  let params = useParams();
  const schoolID = params.schoolId;
  const FilteredGrades = Grades.filter(Grade => Grade.schoolID == schoolID);

  return (

    <div>
    {
      FilteredGrades.map(Grade => (
        <Link to={`/wordlist/${Grade.id}`}> {Grade.name} - {Grade.WordList}</Link>
      ))
    }
    </div>

  );
}
