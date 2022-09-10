import { withAuthenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import { API } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import './App.css';


function App({ signOut, user }) {
  return (
    <div>
      <h1>Spell the world!</h1>
      <h2>Email:</h2><p>{user.attributes.email}</p>
      <button onClick={signOut}>Signout</button>
    </div>
  );
}

export default withAuthenticator(App);
