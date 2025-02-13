import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import openai from "../utils/Openai";
import instances from "../utils/Constants";
import { addGptMovieResult } from "../store/gptSlice"


const Gptsearchbar = () => {

  const dispatch =useDispatch();
  const searchText = useRef(null);

  // Search movie in TMDB.
  const searchMovieTMDB = async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', instances);

    const json = await data.json();
  
    return json.results;
  }

  const handleGptSearch = async() => { 
    // Make an API call to GPT API and get Movie Results

    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Results: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

     const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
         model: 'gpt-4o-mini',
      });

      if(!gptResults?.choices){
        //TODO write error handling
      }
    
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    
    //For each movie i will search TMDB API.
    const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie)); //it returns me 5 Promises because search is a async function.

    const finalResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({movieNames: gptMovies ,movieResults: finalResults})); //added array of arrays in gptSlice

  }

  return (
    <div className="pt-[40%] md:pt-[10%] sm:pt-[25%] flex justify-center">
      <form className="w-full sm:w-1/2 md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder="search anything"
        />
        <button className="py-2 px-2 md:px-4 col-span-3 m-4 bg-red-700 text-white rounded-sm"
        onClick={handleGptSearch}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Gptsearchbar;
