import React from 'react'
import { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import { listSchools } from '../graphql/queries';

export default function HomePage() {

  const [Schools, setSchools] = useState([]);

  useEffect(() => {
    fetchSchools();
  }, []);

  async function fetchSchools() {
    const apiData = await API.graphql({ query: listSchools });
    setSchools(apiData.data.listSchools.items);
  }

  return (
    <div className="container">
    {
      Schools.map(School => (
        <Link to={`/grade/${School.id}`}> {School.name} </Link>
      ))
    }
    </div>
  )
}
