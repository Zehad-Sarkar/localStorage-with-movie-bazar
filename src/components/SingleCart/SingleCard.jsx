import React from 'react';

const SingleCard = ({ movie, handleWatchTime }) => {
  return (
    <div className="col-md-6 ">
      <div className="movie-card card p-4 w-100 ">
        <div className="movie-poster">
          <img className="d-block m-auto p-4 w-50" src={movie.poster} alt="" />
        </div>
        <h4>Movie-name: {movie.movieName}</h4>
        <h4>
          Movie-Description:
          {movie.description}
        </h4>
        <div className="timeAndRating d-flex justify-content-around">
          <h5>WacthTime: {movie.watchTime}</h5>
          <h5>Rating: {movie.imdbRating}</h5>
        </div>
        <button
          onClick={() => handleWatchTime(movie.watchTime)}
          className="btn btn-primary d-block w-75 mx-auto mb-3"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default SingleCard;