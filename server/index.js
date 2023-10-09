const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./src/routes");
//const {OpenAIApi, Configuration} = require("openai");



const PORT = process.env.PORT || 5001;
app.use(cors());
const url = process.env.url;

async function testing(){

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        "role": "system",
        "content": "You will be provided with statements, and your task is to paraphrase it in good and attractive english."
      },
      {
        "role": "user",
        "content": "I have 3 storey building no pet allowed rent is 300 per month."
      }
    ],    temperature: 1,
    max_tokens: 256,
  });
console.log(response.choices[0].message.content);
}
//testing()

async function connect() {
  try {
    await mongoose.connect(url);
    console.log("connected");
  } catch (e) {
    console.log(e);
  }
}
connect();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


routes(app);
app.listen(PORT, () => {
    console.log("server started");
  });