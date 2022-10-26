const express = require("express");
const dbConnect = require("./mongodb");
const app = express();

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    {
      name: "max 1",
      brand: "micromax",
      price: 220,
      category: "mobile",
    },
    {
      name: "max 2",
      brand: "micromax",
      price: 320,
      category: "mobile",
    },
    {
      name: "max 3",
      brand: "micromax",
      price: 420,
      category: "mobile",
    },
  ]);

  if (result.acknowledged) {
    console.log("data inserted");
  }
};

insert();
