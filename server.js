const express = require("express");
const cors = require("cors");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

require("dotenv").config();

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,
  algorightms: ["RS256"],
});
const app = express();

app.use(cors());
app.get("/public", (req, res) => {
  res.json({
    message: "HELLO",
  });
});

app.get("/private", checkJwt, (req, res) => {
  res.json({
    message: "HELLO",
  });
});

app.listen(3000);
console.log(`API at ${process.env.REACT_APP_API_URL}`);
