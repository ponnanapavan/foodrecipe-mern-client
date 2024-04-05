import React, { useEffect, useState } from 'react';
import axios from 'axios';
import userId from '../components/hooks/userId';
import { BASE_URL } from '../App';
const Savedrecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const userID = userId();

  useEffect(() => {
   
      async function savedfetchRecipeData() {
       try {
        const response = await axios.get(`${BASE_URL}/recipes/savedrecipes/${userID}`);
        setRecipes(response.data.savedRecipes);
       } catch (err) {
         console.error(err);
       }
     }

   
    savedfetchRecipeData();
  }, []);

  
 
  return (
    <div className="container mx-auto py-8 mt-20">
      <h2 className="text-3xl font-bold mb-8">Saved Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes?.map((recipe, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            <img
              src={recipe.imageUrl}
              alt={recipe.name}
              className="w-full h-64 object-cover object-center rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
              <p className="text-gray-600 mb-4">{recipe.instructions}</p>
              <p>Cooking Time: {recipe.cookingTime} minutes</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Savedrecipes;





































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Home = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     async function fetchRecipeData() {
//       try {
//         const response = await axios.get("http://localhost:4001/recipes");
//         setRecipes(response.data);
//         console.log(response.data);
//       } catch (err) {
//         console.error(err);
//       }
//     }

//     fetchRecipeData();
//   }, []);

//   return (
//     <div className="container mx-auto py-8 mt-20">
//       <h2 className="text-3xl font-bold mb-8">Recipes</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {recipes.map((recipe, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
//           >
//             <img
//               src={recipe.imageUrl}
//               alt={recipe.name}
//               className="w-full h-64 object-cover object-center rounded-t-lg"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
//               <p className="text-gray-600 mb-4">{recipe.instructions}</p>
//               <div className="flex items-center justify-between">
//                 <p className="text-gray-700">Cooking Time: {recipe.cookingTime} minutes</p>
//                 <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">View Recipe</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
