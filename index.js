const express = require("express");
const app = express();
const cors = require("cors");
const corsOption = require("./config/corsOptions");
const PORT = process.env.PORT || 3500;

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use("/register", require("./routes/register"));
app.use("/employees", require("./routes/api/employees"));

app.get("/", (req, res) => {
  res.send("hello world");
});

//port
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
