const express = require("express");
const app = express();
app.use(express.json());

// Create an empty array to store restaurant data
const restaurants = [{ name: "Uchi", style: "Asian", price: "$$$$" }];

// Routes go here

app.delete("/delete_restaurant/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("this is the id");
});
// Start the server
app.listen(3003, () => {
  console.log("Server is running on port 3000");
});
