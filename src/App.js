import "./App.css";
import React, { useState, useEffect } from "react";
import { PokeCard } from "./components/PokeCard";
import API from "./config/api";

function App() {
  const [trainer, setTrainer] = useState();
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/3`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
    console.log(data.trainer);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <>{trainer && <PokeCard idPokemon={trainer.id_pokemon}></PokeCard>}</>;
}

export default App;
