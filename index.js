const express = require("express");
const app = express();
app.use(express.json());

// Create an empty array to store restaurant data
let restaurants = [
  { name: "Uchi", style: "Asian", price: "$$$$" },
  { name: "Smoochi", style: "Asian", price: "$$$$" },
];

// Routes go here

// view all restaurants
app.get("/view_restaurants", (req, res) => {
  res.json(restaurants);
});
// create a restaurant
app.post("/create_restaurant", (req, res) => {
  restaurants.push(req.body);
  res.send(`Added new restaurant called ${req.body.name}`);
});

app.put("/update_restaurant", (req, res) => {
  const indexOfRestaurantToUpdate = restaurants.findIndex(
    (restaurant) => restaurant.name === req.body.name
  );
  if (indexOfRestaurantToUpdate === -1) {
    res
      .status(404)
      .send("That restaurant does not exist, please consider adding it!");
  } else {
    if (req.body.name && req.body.price && req.body.style) {
      restaurants[indexOfRestaurantToUpdate].name = req.body.nameToUpdateTo;
      restaurants[indexOfRestaurantToUpdate].price = req.body.price;
      restaurants[indexOfRestaurantToUpdate].style = req.body.style;
      res.send(
        `This is your newly updated restaurant ${restaurants[indexOfRestaurantToUpdate].name}`
      );
    } else {
      res.send("You need to provide a name and a price and a style.");
    }
  }
});

// delete a restaurant
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
