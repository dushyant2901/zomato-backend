const express = require("express");
const mongoose = require("mongoose");
// const fs = require("fs");
// const Restaurant = require("../models/Restaurant");

const dbURI =
  "mongodb+srv://showsmoviepedia:3zqmZwhezDFJBQg0@restaurant.6a3ve2r.mongodb.net/?retryWrites=true&w=majority&appName=restaurant";

const makeConnection = async () => {
  await mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

// const jsonData = fs.readFileSync("data.json", "utf8");
// const resData = JSON.parse(jsonData);
// console.log("resData", resData);

// const seedDatabase = async () => {
//   try {
//     for (const data of resData) {
//       const newRes = new Restaurant({
//         name: data.name,
//         cuisine: data.cuisine,
//         address: data.address,
//         city: data.city,
//         rating: data.rating,
//         menu: data.menu,
//         review: data.review,
//       });

//       await newRes.save();
//       console.log(`Movie "${newRes.name}" seeded.`);
//     }
//     console.log("Database seeding complete.");
//   } catch (error) {
//     console.error("Error seeding database:", error);
//   } finally {
//     mongoose.disconnect();
//   }
// };
// seedDatabase();
module.exports = { makeConnection };
