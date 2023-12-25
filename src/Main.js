import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./main.css";
import { addtodes } from "./components/moviedes";
import { useNavigate } from "react-router-dom";

function Main() {
  const data = useSelector((state) => state.main);
  const ban = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThrid] = useState([]);
  const [loades, setLoades] = useState(false);
  const [bannerload, setBanneerLoad] = useState(false);

  const baseurl = "https://image.tmdb.org/t/p/original/";

  const one = data[0];
  const two = data[1];
  const three = data[2];
  useEffect(() => {
    setFirst(one);
    setLoades(false);

    setSecond(two);
    setThrid(three);
  }, [data]);

  const handleload = () => {
    setLoades(true);
  };
  const bannerLoad = () => {
    setBanneerLoad(true);
  };
  const handleclick = async (data) => {
    const id = data.id;

    const crediturl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=18ba311b1724e3c827768daed3485284`;
    const req = await fetch(crediturl);
    const res = await req.json();

    const tobedispatched = [res, data];

    dispatch(addtodes(tobedispatched));

    navigate("/moviedescription");
  };

  return (
    <div className="main">
      {ban && (
        <div className="banner-div">
          <img className="banner-img" src={`${baseurl}${ban.backdrop_path}`} />

          <div className="banner-absolute-area">
            <h5 className="title-banner">
              {ban.title && ban.title.substring(0, 15)}
            </h5>
            <p className="title-overview">
              {ban.overview && ban.overview.substring(0, 130)}...
            </p>
            <div className="banner-btns">
              <button className="banner-btn">Watch</button>
              <button className="banner-btn second-btn">Add to list</button>
            </div>
          </div>
        </div>
      )}
      <div className="first">
        <h4 className="row-title">Lastest</h4>
        <div className="first-row">
          {first?.map(
            (data) =>
              data.poster_path && (
                <div
                  onClick={() => handleclick(data)}
                  key={data.id}
                  className="first-div"
                >
                  <img
                    className="first-img"
                    src={
                      !loades
                        ? require("./images/background-img.png")
                        : `${baseurl}${data.poster_path}`
                    }
                    onLoad={handleload}
                  />

                  <p className="data-title">
                    {data.title.length < 14
                      ? data.title
                      : data.title.substring(0, 14)}
                  </p>
                </div>
              )
          )}
        </div>
      </div>
      <div className="first">
        <h4 className="row-title">Popular</h4>
        <div className="first-row">
          {third?.map((data) => (
            <div
              key={data.id}
              className="first-div"
              onClick={() => handleclick(data)}
            >
              <img
                className="first-img"
                onLoad={handleload}
                src={
                  !loades
                    ? require("./images/background-img.png")
                    : `${baseurl}${data.poster_path}`
                }
              />
              <p className="data-title">
                {data.title && data.title.substring(0, 12)}..
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="first">
        <h4 className="row-title">Trending</h4>
        <div className="first-row">
          {second?.map((data) => (
            <div
              key={data.id}
              className="first-div"
              onClick={() => handleclick(data)}
            >
              <img
                onLoad={handleload}
                className="first-img"
                src={
                  !loades
                    ? require("./images/background-img.png")
                    : `${baseurl}${data.poster_path}`
                }
              />
              <p className="data-title">
                {data.title && data.title.substring(0, 12)}..
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
