import { useState } from "react";

function Form({ onAddItem, onDeleteAllItem, index }){

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
        // Inputs validation
        if(!itemName || !protien || !calories || !carbs || !fat ){
            alert("Please fill in the inputs");
            return 0;
        }
        // insert input fields...
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

    const handleDeleteAll = (index) => {
        onDeleteAllItem(index);
    };

    return(
        <div>
            <div className="flex flex-wrap justify-center">
                <div className="w-full sm:w-1/2 md:w-auto lg:w-1/5 mb-4 px-2">
                    <label htmlFor="input-item-label">Name of food</label>
                    <input 
                        type="text" 
                        id="input-item-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " 
                        placeholder="Add your item" 
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="w-full sm:w-1/2 md:w-auto lg:w-1/5 mb-4 px-2">
                    <label htmlFor="input-protein-label">Protein</label>
                    <input 
                        type="number" 
                        id="input-protein-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 "
                        placeholder="Protein (g)" 
                        value={protien}
                        onChange={(e) => setProtien(e.target.value)} 
                        required
                    />
                </div>
                <div className="w-full sm:w-1/2 md:w-auto lg:w-1/5 mb-4 px-2">
                    <label htmlFor="input-Calories-label">Calories</label>
                    <input 
                        type="number" 
                        id="input-Calories-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " 
                        placeholder="Calories" 
                        value={calories}
                        onChange={(e) => setCalories(e.target.value)}
                        required 
                    />
                </div>
                <div className="w-full sm:w-1/2 md:w-auto lg:w-1/5 mb-4 px-2">
                    <label htmlFor="input-fat-label">Fat</label>
                    <input 
                        type="number" 
                        id="input-fat-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " 
                        placeholder="Fat (g)" 
                        value={fat}
                        onChange={(e) => setFat(e.target.value)}
                        required 
                    />
                </div>
                <div className="w-full sm:w-1/2 md:w-auto lg:w-1/5 mb-4 px-2">
                    <label htmlFor="input-carbs-label">Carbs</label>
                    <input 
                        type="number" 
                        id="input-carbs-label" 
                        className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 " 
                        placeholder="Carbs (g)" 
                        value={carbs}
                        onChange={(e) => setCarbs(e.target.value)}
                        required 
                    />
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
                    className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4  mr-4 rounded'
                    onClick={handleReset}
                >
                    Reset inputs
                </button>
                <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleDeleteAll(index)}
                >
                Delete all items
                </button>
            </div>
        </div>

    );
}

export default Form;