import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./pages/card";
import { RootState } from "./store";
import { setSearch, setWeather } from "./store/wheather/wheatherSlice";


const App = () => {
  const dispatch = useDispatch();
  const search = useSelector((state: RootState) => state.weather.search);
  const weatherData = useSelector((state: RootState) => state.weather.weather);
  const getWheater = async () => {
    const key = "7bb0bfdc15c9ea11494061dc24d7c474";
    const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
    dispatch(setWeather(data))
    console.log(data);
  }
  return (
    <div className="App">
      <div className="c-wrapper">
        <div className="c-unit">
          <h1>Weather</h1>
          <div className="c-unit-01" style={{ display: "flex" }}>
            <TextField error={weatherData.lengh === 0} className="input" fullWidth label="City Search..." id="fullWidth" onChange={(e) => dispatch(setSearch(e.target.value))} />
            <Button className="button" onClick={getWheater} variant="contained" color="inherit">Search</Button>
          </div>
          {
            weatherData.length <= 0 ? null :
              < Card />
          }
        </div>

      </div>
    </div>
  );
}

export default App;
