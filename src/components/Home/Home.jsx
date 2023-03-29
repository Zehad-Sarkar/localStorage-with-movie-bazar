import React, { useEffect, useState } from "react";
import SingleCard from "../SingleCart/SingleCard";

const Home = ({ handleWatchTime }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <div className="">
      <div className="movie-container row">
        {movies.map((movie) => (
          <SingleCard
            movie={movie}
            handleWatchTime={handleWatchTime}
            key={movie.id}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
