import React from "react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import "../App.css";
import "../Style/Login.css";

//import {LockOutlinedIcon} from '@mui/icons-material/LockOutlined';

const Login = () => {
  const Formik = useFormik({
    initialValues: {
      Username: "Pavi",
      Password: "Pavithra",
    },
    validationSchema: yup.object({
      Username: yup.string().required("Please Enter Your Name!"),
      Password: yup.string().required("Please Enter Your Password!"),
    }),
  });

  const paperStyle = {
    padding: 80,
    height: "auto",
    width: 300,
    margin: "50px auto",
  };
  const avatarStyle = { backgroundColor: "#572929" };
  const btnstyle = { margin: "8px 0px" };
  const color = { backgroundColor: "#410412" };
  const navigate = useNavigate();
  // use state
  // const [Username, setUserName] = useState("");
  // const [Password, setPassword] = useState("");

  const myFun = () => {
    alert("welcome" + Formik.values.Username);
    navigate("/home");
  };

  return (
    <div className="form">
      <div style={color}>
        <Grid>
          <Paper elevation={20} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>P</Avatar>
              <h2>sign in</h2>
            </Grid>

            <Grid container spacing={0} direction="column">
              <TextField
                name="Username"
                id="outlined-basic"
                label="Username"
                value={Formik.values.Username}
                onChange={Formik.handleChange}
                // onChange={(use) => setUserName(use.target.value)}
                variant="outlined"
                fullWidth
                required
              />
              <br />
              {Formik.errors.Username ? (
                <span>{Formik.errors.Username}</span>
              ) : null}{" "}
              <br />
            </Grid>

            <Grid items xs={12}>
              <TextField
                name="Password"
                id="outlined-basic"
                label="Password"
                // value={Password}
                // onChange={(use) => setPassword(use.target.value)}
                value={Formik.values.Password}
                onChange={Formik.handleChange}
                type="password"
                fullWidth
                required
              />
              {Formik.errors.Password ? (
                <span>{Formik.errors.Password}</span>
              ) : null}
              <br />
            </Grid>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />

            <Grid item xs={12}>
              <Button
                onClick={() => myFun()}
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Typography>
              <Link href="#">Forget Password?</Link>
            </Typography>
            <Typography>
              Do You Have an Account?
              <Link href="#">sign up</Link>
            </Typography>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
