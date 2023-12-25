import React, { useEffect, useState } from "react";
import "./search.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { addtodes } from "./components/moviedes";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Search() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  const [load, setLoad] = useState(false);
  const [Input, setInput] = useState("");
  const baseurl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const searchterm = Input.toLowerCase();
    var filtered = data.filter((data) =>
      data.title?.toLowerCase().includes(searchterm)
    );
    setFilter(filtered);

    handleload();
  }, [Input]);

  const handleclick = async (data) => {
    const id = data.id;

    const crediturl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=18ba311b1724e3c827768daed3485284`;
    const req = await fetch(crediturl);
    const res = await req.json();

    const tobedispatched = [res, data];

    dispatch(addtodes(tobedispatched));

    navigate("/moviedescription");
  };

  function handleload() {
    setLoad(true);
  }
  return (
    <div className="search-wrapper">
      <div className="input-wrapper">
        <SearchOutlinedIcon />
        <input
          className="input-field"
          type="text"
          placeholder="Movies,shows and more"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        {Input !== "" ? (
          filter.length > 0 && (
            <div className="search-result-wrapper">
              {filter.map((value) => (
                <div
                  className="result"
                  key={value.id}
                  onClick={() => handleclick(value)}
                >
                  <img
                    onLoad={handleload}
                    src={
                      load
                        ? `${baseurl}${value.poster_path}`
                        : require("./images/background-img.png")
                    }
                    alt=""
                  />
                  <h3 className="title-search">{value.title}</h3>
                </div>
              ))}
            </div>
          )
        ) : (
          <h1 className="initial-s">search your fav movie</h1>
        )}
      </div>
    </div>
  );
}

export default Search;
