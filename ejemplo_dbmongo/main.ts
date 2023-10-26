import express from "npm:express@4.18.2";
import mongoose from "npm:mongoose@7.6.3";

import getPerson from "./resolvers/getPerson.ts";
import addPerson from "./resolvers/addPerson.ts";
import updatePerson from "./resolvers/updatePerson.ts";
import deletePerson from "./resolvers/deletePerson.ts";

const MONGO_URL = "mongodb+srv://danielmarcossagradocorazon:4420@cluster0.ekwhrtt.mongodb.net/";
await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
  .get("/getPerson/:dni", getPerson)
  .post("/addPerson", addPerson)
  .put("/updatePerson/:dni", updatePerson)
  .delete("/deletePerson/:dni", deletePerson);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});