const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv/config');

// Middlewares
app.use(cors())
app.use(bodyParser.json());

// import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log('Connected to DB')
  }
)

const port = 8000;
app.listen(port, () => {
  console.log(`We are live on port ${port}`)
});