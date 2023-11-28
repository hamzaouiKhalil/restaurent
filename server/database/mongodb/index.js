const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/restaurent').then(()=>{

  console.log("database connected")
})


  // ADD your Schema here!
const foodSchema = new mongoose.Schema({
  category: String,
  foodName: String,
  price: Number,
  image: String
})
  // ADD the Model compiled from the above Schema
  const Food = new mongoose.model("food", foodSchema)

  // ADD Functions to interact with the Schema
async function getFood  (category) {
  return await Food.find({category})
}
const createFood = async (param)=>{
  await Food.create(param)
 }
 const updateFood = async(id,name)=>{
  return await Food.findByIdAndUpdate(id, name)
}

const deleteFood = async(id)=>{
  await Food.findOneAndDelete({_id: id})
}
// Don't forget to export your functions!
module.exports = {
  getFood,
  createFood,
  updateFood,
  deleteFood
};
