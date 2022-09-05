<<<<<<< HEAD
import './App.css';
import React, { useState } from 'react';
import { PokeCard } from './components/PokeCard';
//import API from "../config/api";
=======
import "./App.css";
import React, { useState, useEffect } from "react";
import { PokeCard } from "./components/PokeCard";
import API from "./config/api";
>>>>>>> 7db0df08d9c289467581544b5006818beecf9b19

function App() {
  const [trainer, setTrainer] = useState();
  const getTrainerId = async () => {
<<<<<<< HEAD
  //const trainerResponse = await API.get('/trainers/1'); 
  //setTrainer(trainerResponse.data);
  //console.log(trainerResponse.data);
  };
  //useEffect(() => {
  //  getTrainerId();
  //} , []);
  return (
    //<PokeCard idPokemon = {trainer && trainer.id_pokemon}></PokeCard>
    <><h1>Estoy roto</h1></>
  );
=======
    const trainerReponse = await API.get(`/trainer/2`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <>{trainer && <PokeCard idPokemon={trainer.id_pokemon}></PokeCard>}</>;
>>>>>>> 7db0df08d9c289467581544b5006818beecf9b19
}

export default App;
