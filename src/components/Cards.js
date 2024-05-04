import React, { useState, useEffect } from "react";

function Card({items}){

    const [cardItems, setCardItems] = useState(items);
    const [editingIndex, setEditingIndex] = useState(null);

    const handleEdit = (index) => {
        setEditingIndex(index);
    }

    const handleSave = (index) => {
        setEditingIndex(null);
    }

    const handleChange = (e, property, index) => {
        const updatedItems = [...cardItems];
        updatedItems[index][property] = e.target.value;
        setCardItems(updatedItems);
    }

    // To update UI after deleting item
    useEffect(() => {
        setCardItems(items);
    }, [items]);

    const handleDeleteItem = (index) => {
        //console.log("Deleting item at index:", index);

        // Create a copy of the items array without the item at the specified index
        const updatedItems = [...cardItems.slice(0, index), ...cardItems.slice(index + 1)];
        
        // Update the state with the modified items array
        setCardItems(updatedItems);
    }

    return(
        <div className="card-container">
            <div className="items flex flex-wrap justify-center">
                {cardItems.map((item, index) =>(
                    <div key={index} className="item w-1/4">
                        {editingIndex === index ? (
                            <div>
                                <input
                                    type="text"
                                    value={item.itemName}
                                    onChange={(e) => handleChange(e, 'itemName', index)}
                                />
                                <input
                                    type="text"
                                    value={item.protien}
                                    onChange={(e) => handleChange(e, 'protien', index)}
                                />
                                <input
                                    type="text"
                                    value={item.calories}
                                    onChange={(e) => handleChange(e, 'calories', index)}
                                />
                                <input
                                    type="text"
                                    value={item.carbs}
                                    onChange={(e) => handleChange(e, 'carbs', index)}
                                />
                                <input
                                    type="text"
                                    value={item.fat}
                                    onChange={(e) => handleChange(e, 'fat', index)}
                                />
                                <button 
                                    onClick={() => handleSave(index)}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Save
                                </button>
                           </div>
                        ): (
                            <div>
                                <p>Name: {item.itemName}</p>
                                <p>Protien: {item.protien}</p>
                                <p>Calories: {item.calories}</p>
                                <p>Carbs: {item.carbs}</p>
                                <p>Fat: {item.fat}</p>
                                <div className="buttons">
                                    <button 
                                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded'
                                        onClick={() => handleEdit(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                        onClick={() => handleDeleteItem(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                        </div>
                        )}
    

        
                    </div>
                    
                ))}

            </div>
        </div>
    );
}

export default Card;