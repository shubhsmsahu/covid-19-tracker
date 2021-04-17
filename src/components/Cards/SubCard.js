import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
const SubCard = ({ type, Value, lastUpdate, styleClass }) => {
  return (
    <>
      <Grid
        item
        component={Card}
        xs={12}
        md={3}
        className={`card ${styleClass}`}
      >
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {type}
          </Typography>
          <Typography variant="h5">
            <CountUp start={0} end={Value} duration={2.5} separator="," />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2">
            {`Number of ${type} cases of Covid-19`}
          </Typography>
        </CardContent>
      </Grid>
    </>
  );
};

export default SubCard;
