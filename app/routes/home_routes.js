module.exports = function (app, db) {
  // ROUTES
  app.get('/', (req, res) => {
    res.send("we are home")
  })
}; 
