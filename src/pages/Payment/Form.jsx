import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import { Box } from "@mui/material";
import Avatar from "@material-ui/core/Avatar";
import Details from "./Details";
import PaymentMode from "./PaymentMode";
import Success from "./Success";
import PayCard from "./PayCard";
import Footer from "./Footer";
import { useAuthValue } from "../Sign-up/AuthContext";
import { useNavigate } from "react-router-dom";

import Logo from "../../Photos/bus2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent: "center",
    height: "50vw",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    iconColor: "#2E3B55",
  },
}));

function getSteps() {
  return ["Enter Details", "Payment Mode", "Payment", "Order Confirmed"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Details />;
    case 1:
      return <PaymentMode />;
    case 2:
      return <PayCard />;
    case 3:
      return <Success />;
    default:
      return "Unknown step";
  }
}

export default function Form() {
  const emailform = useRef();

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const { currentUser } = useAuthValue(); //for current user details
  const navigate = useNavigate();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleNavigationChange = () => {
    navigate("/");
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    navigate("/track");
  };

  return (
    <div className="background">
      <div
        id="radius-shape-1"
        className="position-absolute rounded-circle shadow-5-strong"
      ></div>
      <div
        id="radius-shape-2"
        className="position-absolute shadow-5-strong"
      ></div>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <AppBar position="static" style={{ background: "#2E3B55" }}>
              <Toolbar>
                <img
                  src={Logo}
                  alt="logo"
                  style={{ height: 50 }}
                  className={classes.logo}
                />
                <Typography
                  variant="h6"
                  style={{
                    flexGrow: 1,
                    textAlign: "center",
                    paddingRight: "30px",
                  }}
                >
                  Payment Gateway
                </Typography>
                <IconButton
                  edge="end"
                  color="inherit"
                  style={{ alignSelf: "end" }}
                >
                  <Avatar>AJ</Avatar>
                  <Typography
                    style={{
                      flexGrow: 1,
                      textAlign: "center",
                      paddingRight: "30px",
                      paddingLeft: "15px",
                    }}
                  >
                    {}
                  </Typography>
                </IconButton>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={6}>
            <Card
              variant="outlined"
              style={{ marginTop: "5%" }}
              className="bg-glass"
            >
              <CardContent>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={12}>
                    <AppBar
                      position="static"
                      style={{ background: "#2E3B55", alignItems: "center" }}
                    >
                      <Toolbar>
                        <img
                          src={Logo}
                          style={{ height: 30 }}
                          alt="logo"
                          className={classes.logo}
                        />
                      </Toolbar>
                    </AppBar>
                  </Grid>
                  <Grid item xs={12}>
                    <Stepper activeStep={activeStep}>
                      {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                          labelProps.optional = (
                            <Typography variant="caption">Optional</Typography>
                          );
                        }
                        if (isStepSkipped(index)) {
                          stepProps.completed = false;
                        }
                        return (
                          <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                  </Grid>
                  <Grid item xs={12}>
                    <div className={classes.actions}>
                      {activeStep === steps.length ? (
                        <React.Fragment>
                          <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              pt: 2,
                            }}
                          >
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button onClick={handleReset}>Reset</Button>
                          </Box>
                        </React.Fragment>
                      ) : (
                        <React.Fragment>
                          <Typography sx={{ mt: 2, mb: 1 }}>
                            {/* Step {activeStep + 1} */}
                            {getStepContent(activeStep)}
                            <br></br>
                          </Typography>
                          <div className=" ">
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                bottom: 0,
                                flexDirection: "row",
                                pt: 2,
                              }}
                            >
                              <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                              >
                                Back
                              </Button>
                              <Box sx={{ flex: "1 1 auto" }} />
                              {isStepOptional(activeStep) && (
                                <Button
                                  color="inherit"
                                  onClick={handleSkip}
                                  sx={{ mr: 1 }}
                                >
                                  Skip
                                </Button>
                              )}

                              <Button
                                onClick={() => {
                                  if (activeStep === steps.length - 1) {
                                    handleNext();
                                    emailform?.current.dispatchEvent(
                                      new Event("submit", {
                                        cancelable: true,
                                        bubbles: true,
                                      })
                                    );
                                  }
                                  else
                                  handleNext();
                                }}
                              >
                                {activeStep === steps.length - 1
                                  ? "Finish"
                                  : "Next"}
                              </Button>
                            </Box>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
