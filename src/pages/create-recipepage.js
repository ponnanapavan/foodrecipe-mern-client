import React, { useState } from 'react';
import axios from 'axios'
import userId from '../components/hooks/userId';
import { useNavigate } from 'react-router-dom';
import {useCookies} from "react-cookie"
import { BASE_URL } from '../App';
const Createrecipepage = () => {
  const [cookies,_]=useCookies(["access_token"])
  const userID=userId();
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: userID,
  });
  const navigate=useNavigate();
  function handleChange(event) {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  }

  function handleIngredient(event,idx) {
    const {  value } = event.target;
    const ingredients=recipe.ingredients;
    ingredients[idx]=value;
    setRecipe({...recipe,ingredients});
    
  }

   function addIngredient(){
      setRecipe({...recipe,ingredients:[...recipe.ingredients, ""]});// here i simply adding spaces i.e here we are trying to increase the length of the array
    
   }
    
   async function onSubmit(event){
        event.preventDefault();
        try{
          await axios.post(`${BASE_URL}/recipes`, recipe, { headers:{authorization:cookies.access_token}});// here i am passing token 
          navigate("/");

        }catch(err){
          console.error(err);
        }
   }

  return (
    <div className="max-w-lg mx-auto mt-[100px]">
  <h2 className="text-2xl font-bold mb-4">Create New Recipe</h2>
  <form onSubmit={onSubmit}>
    <div className="mb-4">
      <label htmlFor="name" className="block mb-1 font-bold text-2xl">Name</label>
      <input type="text" id="name" name="name" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
    </div>




    <div className='mb-4 flex flex-col gap-4 '>
  <label htmlFor="ingredients" className="block mb-1 font-bold text-2xl">Ingredients</label>
  {
  recipe.ingredients.map((item, indx) => 
  (
    <input key={indx} type='text' id='ingredients' name='ingredients' value={item} onChange={(event) => handleIngredient(event, indx)} className='w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500'></input>
  ))
  }
  <button onClick={addIngredient} type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Add Ingredient</button>
</div>

    

    <div className="mb-4">
      <label htmlFor="instructions" className="block mb-1 font-bold text-2xl">Instructions</label>
      <textarea id="instructions" name="instructions" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
    </div>


    <div className="mb-4">
      <label htmlFor="imageUrl" className="block mb-1 font-bold text-2xl">Image URL</label>
      <input type="text" id="imageUrl" name="imageUrl" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
    </div>

    <div className="mb-4">
      <label htmlFor="cookingTime" className="block mb-1 font-bold text-2xl">Cooking Time (minutes)</label>
      <input type="number" id="cookingTime" name="cookingTime" onChange={handleChange} className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
    </div>

    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Create Recipe</button>
  </form>
</div>
  );
};





export default Createrecipepage
