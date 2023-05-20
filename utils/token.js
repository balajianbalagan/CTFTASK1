const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKey = fs.readFileSync(process.env.PRIVKEY);
const publicKey = fs.readFileSync(process.env.PUBKEY);

/**
 * Sign data into JWT with JWT env secret
 * @param {string|any} data
 * @returns {jwt.JwtPayload}
 */
const getJWT = (data) => {
  return jwt.sign({ id: data }, process.env.JWTSECRET, { algorithm: "HS256" }); // symmetric encryption, so simple secret with SHA
};

/**
 * Sign data into JWT with private key.
 * @param {string|any} data 
 * @returns {jwt.JwtPayload}
 */
const getSignedJWT = (data) => {
  return jwt.sign(
    { id: data },
    privateKey,
    {
      algorithm: "RS256", // asymmetric signing, so private key with RSA
    }
  )
}

/**
 * Verify a JWT with JWT env secret
 * @param {jwt.JwtPayload} data
 * @returns {string|any}
 */
const verifyJWT = (data) => {
  return jwt.verify(data, process.env.JWTSECRET, { algorithms: ["HS256"] });
}

/**
 * Verify a signed JWT with public key.
 * @param {jwt.JwtPayload} signedString 
 * @returns {string|any}
 */
const verifySignedJWT = (signedString) => {
  return jwt.verify(
    signedString,
    publicKey,
    {
      algorithms: ["RS256"]
    }
  );
}

module.exports = {
  getJWT,
  verifyJWT,
  getSignedJWT,
  verifySignedJWT,
};
