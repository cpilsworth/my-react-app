module.exports = (app) => {
    app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", `http://localhost:4502`);
    next();
  });
};