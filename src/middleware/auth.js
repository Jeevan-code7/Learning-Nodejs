const admin = (req, res, next) => {
  console.log("oyammoooo");
  const isToken = "xyz";
  const isAuthorized = isToken === "xyz";
  if (!isAuthorized) {
    res.status(401).send("unAuthorized access the data");
  } else {
    next();
  }
};

module.exports = { admin };
