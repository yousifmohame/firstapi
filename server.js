const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");


dotenv.config({ path: "config.env" });
const dbConnection = require('./config/database');
const catagoryRoute = require('./routes/catagoryRoute');

// Connect with database
dbConnection();

const app = express();
//moodleware
app.use(express.json());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

// Mount Route
app.use('/api/v1/categories', catagoryRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
