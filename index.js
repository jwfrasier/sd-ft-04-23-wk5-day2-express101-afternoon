const express = require("express");
const app = express();
app.use(express.json());

// Create an empty array to store restaurant data
let restaurants = [
  { name: "Uchi", style: "Asian", price: "$$$$" },
  { name: "Smoochi", style: "Asian", price: "$$$$" },
];

// Routes go here

app.post("/create_restaurant", (req, res) => {
  restaurants.push({ name: "Taco Bell", stle: "fast food", price: "$$" });
});

app.post("/delete_restaurant", (req, res) => {
  const filteredRestaurants = restaurants.filter(
    (resta) => resta.name !== req.body.name
  );
  restaurants = filteredRestaurants;
  res.send(restaurants);
});
// Start the server
app.listen(3003, () => {
  console.log("Server is running on port 3000");
});
