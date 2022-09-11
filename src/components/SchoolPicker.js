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

  useEffect(() => {
    console.log("Mounting School Picker");
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
    if(event==="Loaded") {
      //document.getElementById("schoolPickerContainer").style.display="none";
    }
  }

  return(
    <>
    <div className="container" id="schoolPickerContainer">
    {
      Schools.map(School => (
        <Button onClick={() => {selectSchool(School.id)}}>{School.name}</Button>
      ))
    }
    </div>
    <GradePicker selSchool={selSchool} callback={gradeCallback} />
    </>
  )
}
