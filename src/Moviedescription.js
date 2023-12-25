import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./moviedes.css";
import { useDispatch } from "react-redux";
import {
  ADD_TO_COLLECTIONS,
  REMOVE_FROM_COLLECTIONS,
} from "./components/collectionSlice";
import { Avatar } from "@mui/material";

function Moviedescription() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const movie = useSelector((state) => state.moviedes);
  const baseurl = "https://image.tmdb.org/t/p/original/";
  console.log(movie);
  const credits = movie[0];
  const description = movie[1];

  const cast_it = credits.cast;
  console.log(cast_it);
  const dispatch = useDispatch();

  const handledispatch = () => {
    setBool(false);
    dispatch(ADD_TO_COLLECTIONS(description));
  };

  const [bool, setBool] = useState(true);

  const removedispatch = () => {
    const id = description.id;
    dispatch(REMOVE_FROM_COLLECTIONS(id));
    setBool(true);
  };

  return (
    <div className="moviedes-wrap">
      <img
        className="banner-img-collections"
        src={`${baseurl}${description.backdrop_path}`}
        alt=""
      />
      <div className="moviedes-info">
        <img
          className="moviedes-poster-path"
          src={`${baseurl}${description?.poster_path}`}
          alt=""
        />
        <div className="info-movie">
          <h1 className="title-moviedes">{description.title}</h1>
          <p className="description-overview">{description?.overview}</p>
          <div className="button-flex">
            <div>
              {bool ? (
                <button className="movie-des-btn" onClick={handledispatch}>
                  Add to Collections
                </button>
              ) : (
                <button className="movie-des-btn" onClick={removedispatch}>
                  Remove from Collections
                </button>
              )}
            </div>
            <button className="movie-des-btn">Watch Now</button>
          </div>
          <h4 className="cast-heading">Cast</h4>
          <div className="credits-movie-des">
            {cast_it?.map((value) => (
              <div key={value.id} className="credits">
                {value.profile_path != null ? (
                  <img
                    className="profile-img"
                    src={`${baseurl}${value?.profile_path}`}
                    alt=""
                  />
                ) : (
                  <Avatar className="profile-img avatar" />
                )}
                <p className="name-cast">{value.name.substring(0, 11)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moviedescription;
