import React, { useState, useEffect } from 'react';
//import API from "../config/api";

export const MyComponent = (props) => {
  const { name, setName } = props;
  const [trainers, setTrainers] = useState({});

  useEffect(() => {
    getTrainers();
  }, []);

  setName('Wilker');
  const getTrainers = async () => {
    const trainersResponse = await API.get("/trainers");
    const { data } = trainersResponse;
    setTrainers(data.trainers)
    console.log("Testing", trainers);
  };

  return (
    <div>
      <h1>Hello World {trainers[0]?.nombre}</h1>
    </div>
  );
};
