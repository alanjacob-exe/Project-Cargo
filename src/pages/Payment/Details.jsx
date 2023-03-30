import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useAuthValue } from "../Sign-up/AuthContext";
import { useState,useEffect } from "react";
const useStyles = makeStyles({
  root: {
    minWidth: 400,
    margin: "20px",
    display:"block"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    width: 350,
    margin: "10px",
  },
});

export default function Details() {
  const classes = useStyles();
  const { currentUser } = useAuthValue(); //for current user details
  const bull = <span className={classes.bullet}>•</span>;
  const [address, setaddress] = useState("");
  // console.log(address);

  useEffect(() => {
    localStorage.setItem("address", address);
  }, [address]);

  useEffect(() => {
    const dummy = localStorage.getItem("address");
    console.log(dummy);
  }, [address]);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          variant="h5"
          gutterBottom
        >
          Enter Your Details
        </Typography>
        <TextField
          id="filled-basic"
          label="Username"
          variant="filled"
          value={currentUser?.email}
          className={classes.text}
        />
        <br />
        <TextField
          id="filled-basic"
          label="Address"
          variant="filled"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          multiline
          rows={4}
          className={classes.text}
        />
      </CardContent>
    </Card>
  );
}
