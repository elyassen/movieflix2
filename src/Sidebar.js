import React, { useEffect, useState } from "react";
import { urls_home, urls_movies, urls_tv } from "./url";
import { addtomain } from "./components/MainSlice";
import { useDispatch } from "react-redux";
import "./sidebar.css";
import { setbanner } from "./components/bannerReducer";
import MovieIcon from "@mui/icons-material/Movie";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TvIcon from "@mui/icons-material/Tv";
import { useNavigate } from "react-router-dom";
import FitbitIcon from "@mui/icons-material/Fitbit";
import { Search } from "@mui/icons-material";
import { addtosearch } from "./components/searchSlice";

function Sidebar() {
  const [home, setHome] = useState([]);
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const [showuser, setShowuser] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const dataPromises = urls_home.map(async (url) => {
      const req = await fetch(url);
      const res = await req.json();
      const data = res.results;
      return data;
    });
    Promise.all(dataPromises).then((data) => {
      setHome(data);
      dispatch(addtomain(data));

      const banner = data[0];
      const idx = banner[Math.floor(Math.random() * banner.length)];
      // setBanner(idx);

      dispatch(setbanner(idx));
    });
    //
    //
    //

    const promisemovie = urls_movies.map(async (url) => {
      const req = await fetch(url);
      const res = await req.json();
      const data = res.results;

      return data;
    });
    Promise.all(promisemovie).then((data) => {
      setMovies(data);
    });

    //
    //
    //

    const promisetv = urls_tv.map(async (url) => {
      const req = await fetch(url);
      const res = await req.json();
      const data = res.results;

      return data;
    });
    Promise.all(promisetv).then((data) => setTv(data));
  }, []);

  const handlemovie = () => {
    setActive("movie");
    dispatch(addtomain(movies));
    const idx = movies[0];
    const random = idx[Math.floor(Math.random() * idx.length)];

    dispatch(setbanner(random));
    toHome();
  };
  const handlehome = () => {
    setActive("home");
    dispatch(addtomain(home));
    const idx = home[0];
    const random = idx[Math.floor(Math.random() * idx.length)];

    dispatch(setbanner(random));
    toHome();
  };
  const handletv = () => {
    setActive("tv");
    dispatch(addtomain(tv));
    const idx = tv[0];
    const random = idx[Math.floor(Math.random() * idx.length)];
    dispatch(setbanner(random));
    toHome();
  };
  const collections = () => {
    setActive("collections");
    navigate("/Collections");
  };

  const handleSearch = () => {
    const searchcomp = [home, movies, tv];
    const flatted = searchcomp.flat(Infinity);

    const unique = flatted.filter((obj, index) => {
      return index === flatted.findIndex((o) => obj.title === o.title);
    });

    dispatch(addtosearch(unique));
    navigate("/search");
    setActive("search");
  };

  const toHome = () => {
    setShowuser(false);
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="wrap-sidebar">
        <div className="sidebar-header">
          <FitbitIcon className="logo" onClick={toHome} />
        </div>
        <div className="btns">
          <HomeIcon
            disabled={active === "home"}
            className={`sidebar-btns ${active === "home" && "active"}`}
            onClick={handlehome}
          />

          <MovieIcon
            className={`sidebar-btns  ${active === "movie" && "active"}`}
            onClick={handlemovie}
          />

          <AddIcon
            className={`sidebar-btns tobehidden ${
              active === "collections" && "active"
            }`}
            onClick={collections}
          />

          <TvIcon
            className={`sidebar-btns  ${active === "tv" && "active"}`}
            onClick={handletv}
          />

          <Search
            disabled={active === "search"}
            className={`sidebar-btns  ${active === "search" && "active"}`}
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
