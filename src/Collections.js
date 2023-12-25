import React, { useEffect } from "react";
import "./collectons.css";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_COLLECTIONS } from "./components/collectionSlice";
import { addtodes } from "./components/moviedes";
import { useNavigate } from "react-router-dom";

function Collections() {
  const baseurl = "https://image.tmdb.org/t/p/original/";
  const collections = useSelector((state) => state.collections);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(collections);
  const handleclick = (id) => {
    dispatch(REMOVE_FROM_COLLECTIONS(id));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handledispatchcollection = async (data) => {
    const id = data.id;

    const crediturl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=18ba311b1724e3c827768daed3485284`;
    const req = await fetch(crediturl);
    const res = await req.json();

    const tobedispatched = [res, data];

    dispatch(addtodes(tobedispatched));

    navigate("/moviedescription");
  };
  return (
    <div className="collections">
      {collections.length > 0 ? (
        <div className="collections-items">
          {collections.map((value) => (
            <div className="collections-column">
              <img
                className="collections-img"
                src={`${baseurl}${value?.poster_path}`}
                alt=""
              />
              <div className="collection-right">
                <h3>{value.title}</h3>
                <p>{value.overview.substring(0, 120)}...</p>
                <div className="right-btns">
                  <button onClick={() => handledispatchcollection(value)}>
                    watch now
                  </button>
                  <button onClick={() => handleclick(value.id)}>remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>no collections</div>
      )}
    </div>
  );
}

export default Collections;
