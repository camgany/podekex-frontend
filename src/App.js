import "./App.css";
import React, { useState, useEffect } from "react";
// import { PokeCard } from "./components/PokeCard";
import API from "./config/api";

function App() {
  const [trainer, setTrainer] = useState();
  console.log(trainer);
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/1`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <><h1>Git Action</h1></>;
}

export default App;
