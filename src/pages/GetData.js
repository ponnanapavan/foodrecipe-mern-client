import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../App';
const GetData = () => {
    const { id } = useParams();
    const [getdata, setData] = useState({});

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(`${BASE_URL}/recipes/getsingleitem/${id}`);
                setData(response.data);
            } catch (err) {
                console.error(err);
            }
        }
        getData();
    }, [id]); // Include id in the dependency array
  
    return (
        <div className="container mx-auto py-8 h-screen">
            <div className="max-w-5xl mx-auto flex justify-center h-screen items-center">
                <div className="w-full max-w-2xl flex items-center justify-center space-x-6">
                    <div className="flex-shrink-0 w-96 h-96">
                        <img src={getdata.imageUrl} alt={getdata.name} className="w-full h-full object-cover object-center rounded-lg shadow-md transition duration-300 transform hover:scale-105" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center mb-4">
                            <h3 className="text-xl font-bold mr-4">Recipe Name:</h3>
                            <p className="text-gray-700">{getdata.name}</p>
                        </div>
                        <div className="mb-4">
                        <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-xl font-semibold">Instructions:</h3>
                        <p className="text-gray-700">{getdata.instructions}</p>
                        </div>
                           
                        </div>
                        <div className="mb-4">
                            <div className='flex items-center  mb-4'>
                            <h3 className="text-xl font-semibold">Ingredients:</h3>
                            <ul className="list-none ml-6">
                                {getdata.ingredients && getdata.ingredients.map((item, indx) => (
                                    <li key={indx} className="text-gray-700">{item}</li>
                                ))}
                            </ul>
                            </div>
                           
                        </div>
                        <div className="mb-4">
                        <div className="flex items-center gap-5 mb-4">
                        <h3 className="text-xl font-semibold">Cooking Time:</h3>
                        <p className="text-gray-700">{getdata.cookingTime} minutes</p>
                        </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetData;