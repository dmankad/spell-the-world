import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './index.css';
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import './App.css';
import { createSchool as createSchoolMutation, deleteSchool as deleteSchoolMutation } from './graphql/mutations';
import { listSchools } from './graphql/queries';
import { listGrades } from './graphql/queries';
import SchoolPicker from './components/SchoolPicker'

function App({ signOut, user }) {
  return (
    <div>
      <Button onClick={signOut}>Sign out</Button>
      <SchoolPicker user={user.username}/>
    </div>
  );
}

export default withAuthenticator(App);
