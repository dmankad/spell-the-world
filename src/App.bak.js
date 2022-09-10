import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import './App.css';
import { createSchool as createSchoolMutation, deleteSchool as deleteSchoolMutation } from './graphql/mutations';
import { listSchools } from './graphql/queries';

const initialFormState = { name: ''}

function App({ signOut }) {
  const [Schools, setSchools] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchSchools();
  }, []);

  async function fetchSchools() {
    const apiData = await API.graphql({ query: listSchools });
    setSchools(apiData.data.listSchools.items);
  }

  async function createSchool() {
    if (!formData.name) return;
    await API.graphql({ query: createSchoolMutation, variables: { input: formData } });
    setSchools([ ...Schools, formData ]);
    setFormData(initialFormState);
  }

  async function deleteSchool({ id }) {
    const newSchoolsArray = Schools.filter(School => School.id !== id);
    setSchools(newSchoolsArray);
    await API.graphql({ query: deleteSchoolMutation, variables: { input: { id } }});
  }
  return (
    <div className="App">
      <h1>My Schools App</h1>
      <input
        onChange={e => setFormData({ ...formData, 'name': e.target.value})}
        placeholder="School name"
        value={formData.name}
      />
      <button onClick={createSchool}>Create School</button>
      <div style={{marginBottom: 30}}>
        {
          Schools.map(School => (
            <div key={School.id || School.name}>
              <h2>{School.name}</h2>
              <button onClick={() => deleteSchool(School)}>Delete School</button>
            </div>
          ))
        }
      </div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default withAuthenticator(App);
