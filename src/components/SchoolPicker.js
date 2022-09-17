import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { createSchool as createSchoolMutation, deleteSchool as deleteSchoolMutation } from '../graphql/mutations';
import { Link } from 'react-router-dom';
import { listSchools } from '../graphql/queries';
import GradePicker from './GradePicker'

export default function SchoolPicker(props) {

  const [Schools, setSchools] = useState([]);
  const [selSchool, setSelSchool] = useState([]);
  const [gameState, setGameState] = useState([]);

  useEffect(() => {
    console.log("Mounting School Picker");
    setGameState("MENU");
    fetchSchools();
  }, []);

  async function fetchSchools() {
    const apiData = await API.graphql({ query: listSchools });
    setSchools(apiData.data.listSchools.items);
  }

  function selectSchool(id) {
    setSelSchool(id);
    console.log("Picked " + id);
  }

  function gradeCallback(event, data) {
    if(event==="GameOn") {
      setGameState("ON");
    }
    if(event=="GameOver") {
      setGameState("MENU");
    }
  }

  return(
    <>
    <div className="menu-container" id="schoolPickerContainer">
    {
      Schools.map(School => (
        <Button className={gameState=="ON"?"hidden":""} onClick={() => {selectSchool(School.id)}}>{School.name}</Button>
      ))
    }
    </div>
    <GradePicker selSchool={selSchool} callback={gradeCallback} user={props.user} />
    </>
  )
}
