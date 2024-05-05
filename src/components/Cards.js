import React, { useState, useEffect } from "react";
import Result from "./Result";

const Card = ({ items, onDeleteItem, index }) => {

    const [cardItems, setCardItems] = useState(items);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedItem, setEditedItem] = useState({});
    const [itemNumber, setItemNumber] = useState(Array(items.length).fill(1));
    
    // To edit values
    const handleEdit = (index) => {
        setEditingIndex(index);
        setEditedItem(items[index]); // Set the editedItem state to the item being edited
    };
    

    const handleSave = (index) => {
        setEditingIndex(null);
    }


    const handleChange = (e, property, index) => {
        const newItems = [...items]; // Create a copy of the items array
        if (newItems[index]) { // Check if the index is valid
            newItems[index][property] = e.target.value; // Update the specific property of the item
            setEditedItem({ ...editedItem, [property]: e.target.value });
        }
    };
    

    
    const handleCountChange = (index, value) => {
        const updatedCounts = [...itemNumber];
        // Ensure count doesn't go below 1
        if (updatedCounts[index] + value >= 1) {
            updatedCounts[index] += value;
            setItemNumber(updatedCounts);
    
            // Recalculate totals based on updated quantities
            const updatedItems = cardItems.map((item, i) => {
                if (i === index) {
                    return {
                        ...item,
                        quantity: updatedCounts[index]
                    };
                }
                return item;
            });
    
            // Update cardItems with the updatedItems array
            setCardItems(updatedItems);
        }
    };
    


    const handleDelete = (index) => {
        onDeleteItem(index); // Call the function passed from the parent component
    };

    return(
        <div className="card-container">
            <div className="items flex flex-wrap justify-center">
                {items.map((item, index) => (
                    <div key={index} className="item w-1/4">
                        {editingIndex === index ? (
                            <div key={index}>
                                <input
                                    type="text"
                                    value={item.itemName}
                                    onChange={(e) => handleChange(e, 'itemName', index)}
                                />
                                <input
                                    type="number"
                                    value={item.protien}
                                    onChange={(e) => handleChange(e, 'protien', index)}
                                />
                                <input
                                    type="number"
                                    value={item.calories}
                                    onChange={(e) => handleChange(e, 'calories', index)}
                                />
                                <input
                                    type="number"
                                    value={item.carbs}
                                    onChange={(e) => handleChange(e, 'carbs', index)}
                                />
                                <input
                                    type="number"
                                    value={item.fat}
                                    onChange={(e) => handleChange(e, 'fat', index)}
                                />
                                <button 
                                    onClick={handleSave}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Save
                                </button>
                           </div>
                        ): (
                            <div>
                                <p>Name: {item.itemName}</p>
                                <p>Protien: {item.protien }</p>
                                <p>Calories: {item.calories }</p>
                                <p>Carbs: {item.carbs }</p>
                                <p>Fat: {item.fat}</p>
                                <div className="counter mb-5">
                                    <button
                                        className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded'
                                        onClick={() => handleCountChange(index, 1)}
                                    >
                                        +
                                    </button>
                                    {itemNumber[index]}
                                    <button
                                        className='ml-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded'
                                        onClick={() => handleCountChange(index, -1)}
                                    >
                                        -
                                    </button>
                                </div>

                                <div className="buttons">
                                    <button 
                                        onClick={() => handleEdit(index)}
                                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded'
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className='bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                        </div>
                        )}
                    </div>
                    
                ))}
                
            </div>
           <div className="flex justify-center mt-10">
                {cardItems.length > 0 && <Result cardItems={cardItems} itemNumber={itemNumber} /> }
           </div>
        </div>
    );
}

export default Card;