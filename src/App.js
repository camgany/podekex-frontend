import './App.css';
import React, { useState } from 'react';
import { PokeCard } from './components/PokeCard';
//import API from "../config/api";

function App() {
  const [trainer, setTrainer] = useState();
  const getTrainerId = async () => {
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
}

export default App;
