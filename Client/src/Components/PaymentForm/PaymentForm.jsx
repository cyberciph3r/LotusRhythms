import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Button, TextField, Typography } from "@material-ui/core";

const PaymentForm = ({ userData }) => {
  const classes = useStyles();

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCVV] = useState("");

  var backendUrl = "https://lotusrhythms.onrender.com/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const makePaymentAndEnroll = async () => {
      try {
        var response = await fetch(backendUrl + "/makePayment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            paymentData: {
              cardNumber: cardNumber,
              cardName: cardName,
              exp: exp,
              cvv: cvv,
            },
          }),
        });

        if (response.ok) {
          fetch(backendUrl + "/enrollUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userData: userData,
            }),
          }).then((res) => {
            window.location = "/enrolled";
          });
        }
      } catch (error) {
        console.log("Payment failed...", error);
      }
    };
    makePaymentAndEnroll();
  };
  return (
    <div className={classes.main}>
      <div>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.amountDiv}>
            <Typography className={classes.total}>Total Amount</Typography>
            <Typography className={classes.total}>Rs.499</Typography>
          </div>
          <TextField
            required
            id="cardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
            label="Card Number"
            variant="outlined"
            fullWidth
            inputProps={{
              pattern: "^[0-9]{16}$",
              inputMode: "numeric",
              maxLength: 16,
              title:
                "Hold on! Ensure your card number consists of exactly 16 digits without any spaces.",
            }}
            onChange={(e) => {
              setCardNumber(e.target.value);
            }}
          />

          <TextField
            label="Card Name"
            variant="outlined"
            onChange={(e) => {
              setCardName(e.target.value);
            }}
          />
          <div className={classes.twoColDiv}>
            <TextField
              id="expirationDate"
              label="Expiration"
              variant="outlined"
              fullWidth
              inputProps={{
                pattern: "^(0[1-9]|1[0-2])/[0-9]{4}$",
                maxLength: 7,
                title:
                  "Uh-oh! Your card's expiration date should be in the format MM/YYYY.",
              }}
              placeholder="MM/YYYY"
              onChange={(e) => {
                setExp(e.target.value);
              }}
              required
            />
            <TextField
              id="cvv"
              label="CVV"
              variant="outlined"
              fullWidth
              inputProps={{
                pattern: "^[0-9]{3}$",
                inputMode: "numeric",
                maxLength: 3,
                title: "Hold on! Your CVV should be a 3-digit code.",
              }}
              placeholder="123"
              onChange={(e) => {
                setCVV(e.target.value);
              }}
              required
            />
          </div>

          <Button type="submit" className={classes.payBtn}>
            Pay
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
