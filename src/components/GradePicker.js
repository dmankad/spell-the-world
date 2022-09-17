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
  const [gameState, setGameState] = useState([]);

  useEffect(() => {
    console.log("Mounting Grade Picker");
    setGameState("MENU");
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
    if(event==="GameOn") {
      setGameState("ON");
      props.callback("GameOn");
    }
    if(event=="GameOver") {
      setGameState("MENU");
      props.callback("GameOver");
    }
    console.log("Child called their Parent! " + event);
  }

  return(
    <div className="menu-container">
    {
        Grades.map(Grade => (
          <Button className={gameState=="ON"?"hidden":""} onClick={() => {selectGrade(Grade.id)}}>{Grade.name}</Button>
        ))
    }
    <WLPicker selGrade={selGrade} callback={wlCallback} user={props.user} />

    </div>
  )
}
