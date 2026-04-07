const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API NAHA is working 🚀");
});

app.post("/login", (req, res) => {
  const { name } = req.body;
  res.json({ message: "Login success", user: name });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
