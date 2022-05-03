const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",

  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A person of words and not deeds is like a garden full of weeds.",
  "Believe in yourself and others will too",
  "Dont worry; prosperity will knock on your door soon.",
  "You won't die today",
  "If you think you can do a thing or think you cant do a thing, youre right.",
];

let randomIndex = Math.floor(Math.random() * fortunes.length);
let randomFortunes = fortunes[randomIndex];

res.status(200).send(randomFortunes);
});

app.listen(4000, () => console.log("Server running on 4000"));
