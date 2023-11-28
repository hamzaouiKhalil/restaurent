const express = require("express");
const cors = require("cors");
const {getFood, createFood, updateFood,deleteFood} = require("./database/mongodb/index.js")

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/:name", async (req, res) => {
  const food = await getFood(req.params.name)
  res.status(201).send(food) 
});
app.post("/", async (req,res)=>{
  console.log(req.body)
  await createFood(req.body)
  res.status(202).send("added")
})
app.put("/", async (req,res)=>{
  console.log(req.body)
 await updateFood(req.body._id, {price: req.body.price})
  res.status(203).send("updated")
})
app.delete("/:id", async (req,res)=>{
  await deleteFood(req.params.id)
  res.send("deleted")
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
