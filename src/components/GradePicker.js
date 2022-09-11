import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import React, { useEffect, useState, setState } from 'react';
import { createGrade as createGradeMutation, deleteGrade as deleteGradeMutation } from '../graphql/mutations';
import { Link } from 'react-router-dom';
import { listGrades } from '../graphql/queries';
import WLPicker from './WLPicker'

export default function GradePicker(props) {

  const [Grades, setGrades] = useState([]);
  const [selGrade, setSelGrade] = useState([]);

  useEffect(() => {
    console.log("Mounting Grade Picker");
    setSelGrade("X");
    fetchGrades();
  }, [props.selSchool]);

  useEffect(() => {
      if(Grades.length>0) {
        props.callback("Loaded");
      }
  }, [Grades])

  async function fetchGrades() {
    if(props.selSchool !== null && props.selSchool !== "") {
      const apiData = await API.graphql({ query: listGrades });
      setGrades(apiData.data.listGrades.items.filter(Grade => Grade.schoolID == props.selSchool));
    }
  }

  function selectGrade(id) {
    setSelGrade(id);
    console.log("Picked " + id);
  }

  function wlCallback(event, data) {
    console.log("Child called their Parent! " + event);
  }

  return(
    <div className="container">
    {
        Grades.map(Grade => (
          <Button onClick={() => {selectGrade(Grade.id)}}>{Grade.name}</Button>
        ))
    }
    <WLPicker selGrade={selGrade} callback={wlCallback} />

    </div>
  )
}
