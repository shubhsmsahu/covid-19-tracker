import React from "react";
import { Grid } from "@material-ui/core";
import SubCard from "./SubCard";
import "./Cards.css";
const Cards = ({ global }) => {
  const { confirmed, deaths, recovered, lastUpdate } = global;
  //   console.log("cards");
  //   console.log(global);
  //   console.log(lastUpdate);
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className="container">
      <Grid container spacing={3} justify="center">
        <SubCard
          type="Infected"
          Value={confirmed.value}
          lastUpdate={lastUpdate}
          styleClass="infected"
        />
        <SubCard
          type="Recovered"
          Value={recovered.value}
          lastUpdate={lastUpdate}
          styleClass="recovered"
        />
        <SubCard
          type="deaths"
          Value={deaths.value}
          lastUpdate={lastUpdate}
          styleClass="deaths"
        />
      </Grid>
    </div>
  );
};

export default Cards;
