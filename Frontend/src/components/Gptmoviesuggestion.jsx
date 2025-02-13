import React from "react";
import { useSelector } from "react-redux";
import InnnerCards from "../utils/InnnerCards";

const Gptmoviesuggestion = () => {
  
  const gpt = useSelector((store) => store.gpt);
  const { movieNames, movieResults } = gpt;

  return (
    <div className="bg-black p-5 text-white">
      <div>
        {movieNames && movieResults && movieNames.map((i, index) => (
          <InnnerCards key={i} title={i} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  ); 
};

export default Gptmoviesuggestion;