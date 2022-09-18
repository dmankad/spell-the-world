import { Amplify, API, graphqlOperation } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import * as subscriptions from '../graphql/subscriptions';
import '../index.css';


export default function Watcher() {

const [guesses, setGuesses] = useState([]);

useEffect(() => {
  // Subscribe to creation of Todo

  setGuesses([{
    id:'',
    user:'',
    word:'',
    guess:''
  }])

  const subscription = API.graphql(
    graphqlOperation(subscriptions.onCreateGuess)
  ).subscribe({
    next: ({ provider, value }) => {
        if(value.data.onCreateGuess.id!="") {
        setGuesses(oldGuesses => [...oldGuesses, {
          id:value.data.onCreateGuess.id,
          user:value.data.onCreateGuess.user,
          guess:value.data.onCreateGuess.guess,
          word:value.data.onCreateGuess.word
        }]);
      }
    },
    error: (error) => console.warn(error)
  });

  return function cleanup() {
    subscription.unsubscribe();
  };
  // Stop receiving data updates from the subscription
  //subscription.unsubscribe();

}, [])


  return (
    <div>
      <table width="80%" className="styled-table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>User</th>
                    <th>Word</th>
                    <th>Guess</th>
                    <th>Correct?</th>
                </tr>
            </thead>

            <tbody>
                {guesses.map(guess =>
                    <tr>
                        <td>{guess.id}</td>
                        <td>{guess.user}</td>
                        <td>{guess.word}</td>
                        <td>{guess.guess}</td>
                        <td>{guess.word==guess.guess?"Yes":"No"}</td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}
