import React, { useState } from "react";
import { useRef } from "react";
import {
  AppBar,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Toolbar,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import PaymentForm from "./Components/PaymentForm/PaymentForm";

const App = () => {
  const classes = useStyles();
  const formRef = useRef(null);
  const homeRef = useRef(null);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mno, setMno] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [batch, setBatch] = useState("");
  const [userData, setUserdata] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserdata({
      fname: fname,
      lname: lname,
      mno: mno,
      email: email,
      gender: gender,
      age: age,
      city: city,
      batch: batch,
    });
  };

  if (userData != null) {
    return <PaymentForm userData={userData} />;
  }

  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <img
            src="Images/logo2.png"
            className={classes.appBarLogo}
            onClick={() => {
              homeRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <div className={classes.home}>
          <div className={classes.homeDiv}>
            <Typography ref={homeRef} className={classes.title}>
              LotusRhythms
            </Typography>
            <Typography className={classes.subtitle}>
              Your Path to Wellness and Harmony!
            </Typography>
            <Button
              className={classes.homeBtn}
              onClick={() => {
                formRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Join Us
            </Button>
          </div>
        </div>
        <div className={classes.formDiv}>
          <div className={classes.desc}>
            <div>
              <Typography className={classes.yDiv}>
                Why choose LotusRhythms?
              </Typography>
              <ul type="none" className={classes.ul}>
                <li className={classes.li}>
                  <div className={classes.ySpan}>Expert Instructors</div>
                  <div>
                    Our seasoned instructors bring a wealth of knowledge and
                    experience to guide you on your yoga journey.
                  </div>
                </li>
                <li className={classes.li}>
                  <div className={classes.ySpan}>
                    Flexibility and Convenience
                  </div>
                  <div>
                    With a variety of class timings and formats, LotusRhythms
                    fits seamlessly into your busy schedule.
                  </div>
                </li>
                <li className={classes.li}>
                  <div className={classes.ySpan}>Holistic Approach</div>
                  <div>
                    Experience the benefits of yoga that extend beyond the
                    physical, fostering mental and emotional well-being.
                  </div>
                </li>
                <li className={classes.li}>
                  <div className={classes.ySpan}>Community Connection</div>
                  <div>
                    Join a supportive community of like-minded individuals,
                    fostering a sense of belonging and encouragement.
                  </div>
                </li>
              </ul>
              <hr
                style={{
                  width: "5rem",
                  height: "1.5px",
                  border: "none",
                  backgroundColor: "#CB9274",
                }}
              />
            </div>
          </div>

          <form ref={formRef} className={classes.form} onSubmit={handleSubmit}>
            <Typography className={classes.pricingHeading}>
              Embark on this journey with us @ ₹
              <span className={classes.priceSpan}>499/-</span> only.
            </Typography>
            <div className={classes.twoColDiv}>
              <input
                required
                className={classes.input}
                placeholder="First Name"
                onChange={(e) => {
                  setFname(e.target.value);
                }}
              />
              <input
                required
                className={classes.input}
                placeholder="Last Name"
                onChange={(e) => {
                  setLname(e.target.value);
                }}
              />
            </div>
            <input
              required
              className={classes.input}
              placeholder="Mobile"
              pattern="[0-9]{10}"
              title="Please enter a valid mobile number"
              onChange={(e) => {
                setMno(e.target.value);
              }}
            />
            <input
              required
              className={classes.input}
              placeholder="Email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <RadioGroup
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            >
              <FormControlLabel
                value="female"
                control={<Radio required name="gender" color="default" />}
                label={
                  <Typography className={classes.labelGender}>
                    Female
                  </Typography>
                }
              />
              <FormControlLabel
                value="male"
                control={<Radio name="gender" color="default" />}
                label={
                  <Typography className={classes.labelGender}>Male</Typography>
                }
              />
              <FormControlLabel
                value="other"
                control={<Radio name="gender" color="default" />}
                label={
                  <Typography className={classes.labelGender}>Other</Typography>
                }
              />
            </RadioGroup>
            <div className={classes.twoColDiv}>
              <input
                required
                className={classes.input}
                placeholder="Age"
                type="number"
                min={18}
                max={65}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
              <input
                required
                className={classes.input}
                placeholder="City, State"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <select
              name="batch"
              id="batch"
              className={classes.select}
              onChange={(e) => {
                setBatch(e.target.value);
              }}
              required
            >
              <option value="" selected="true" disabled="disabled">
                Choose a batch
              </option>
              <option value="6AM-7AM">6AM-7AM</option>
              <option value="7AM-8AM">7AM-8AM</option>
              <option value="8AM-9AM">8AM-9AM</option>
              <option value="5PM-6PM">5PM-6PM</option>
            </select>
            <Button type="" className={classes.submitBtn}>
              Enroll
            </Button>
          </form>
        </div>
      </div>
      <div className={classes.footer}>
        <Typography className={classes.footerTxt}>
          © LotusRhythms 2023
        </Typography>
      </div>
    </>
  );
};

export default App;
