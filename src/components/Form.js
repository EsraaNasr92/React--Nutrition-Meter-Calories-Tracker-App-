import { useState } from "react";

function Form({ onAddItem }){

    const [itemName, setItemName] = useState('');
    const [protien, setProtien] = useState('');
    const [calories, setCalories] = useState('');
    const [fat, setFat] = useState('');
    const [carbs, setCarbs] = useState('');

    // Function for clear all button
    const handleReset = () => {
        setItemName('');
        setProtien('');
        setCalories('');
        setFat('');
        setCarbs('');
    }

    const handleAddItem = () => {
        // Validate input fields...
        const newItem = {
            itemName: itemName,
            protien: protien,
            calories: calories,
            carbs: carbs,
            fat: fat,
        };
        onAddItem(newItem); // Call the function passed from the parent component

        // Clear input fields...
        setItemName('');
        setProtien('');
        setCalories('');
        setCarbs('');
        setFat('');
        
        console.log(newItem);
    };

    return(
        <div>
            <div className="flex justify-center">
                <div className="w-auto mr-4">
                    <label htmlFor="input-item-label">Name of food</label>
                    <input 
                        type="text" 
                        id="input-item-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " 
                        placeholder="Add your item" 
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)} 
                        required />
                </div>
                <div className="w-auto mr-4">
                    <label htmlFor="input-protein-label">Protein</label>
                    <input 
                        type="number" 
                        id="input-protein-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="protein (g)" 
                        value={protien}
                        onChange={(e) => setProtien(e.target.value)} 
                        required/>
                </div>
                <div className="w-auto mr-4">
                    <label htmlFor="input-Calories-label">Calories</label>
                    <input 
                        type="number" 
                        id="input-Calories-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " 
                        placeholder="Calories" 
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required />
                </div>
                <div className="w-auto mr-4">
                    <label htmlFor="input-fat-label">Fat</label>
                    <input 
                        type="number" 
                        id="input-fat-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " 
                        placeholder="Fat (g)" 
                        value={fat}
                        onChange={(e) => setFat(e.target.value)}
                        required />
                </div>
                <div className="w-auto mr-4">
                    <label htmlFor="input-carbs-label">Carbs</label>
                    <input 
                        type="number" 
                        id="input-carbs-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " 
                        placeholder="Carbs (g)" 
                        value={carbs}
                        onChange={(e) => setCarbs(e.target.value)}
                        required />
                </div>
            </div>


            <div className="text-center mt-5">
                <button 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded'
                    onClick={handleAddItem}
                >
                    Add item
                </button>
                <button 
                    className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                    onClick={handleReset}
                >
                    Clear all
                </button>
            </div>

            
        </div>
    );
}

export default Form;