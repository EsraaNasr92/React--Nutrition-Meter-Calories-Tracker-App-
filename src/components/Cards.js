import React, { useState, useEffect } from "react";
import Result from "./Result";

const Card = ({ items, itemNumber, onDeleteItem, setItemNumber }) => {
  const [cardItems, setCardItems] = useState(items);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedItem, setEditedItem] = useState({});

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedItem(items[index]);
  };

  const handleSave = (index) => {
    setEditingIndex(null);
  };

  const handleChange = (e, property, index) => {
    const newItems = [...items];
    if (newItems[index]) {
      newItems[index][property] = e.target.value;
      setEditedItem({ ...editedItem, [property]: e.target.value });
    }
  };

  const handleCountUpdate = (index, value) => {
    const updatedCounts = [...itemNumber];
    if (updatedCounts[index] + value >= 1) {
      updatedCounts[index] += value;
      setItemNumber(updatedCounts);
  
      const updatedItems = cardItems.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            quantity: updatedCounts[index]
          };
        }
        return item;
      });
  
      setCardItems(updatedItems);
    }
  };
  

  const handleDelete = (index) => {
    onDeleteItem(index);
  };

  useEffect(() => {
    setCardItems(items);
  }, [items]);

  return (
    <div className="card-container">
      <div className="items flex flex-wrap justify-center">
        {items.map((item, index) => (
          <div key={index} className="item w-1/4">
            {editingIndex === index ? (
              <div key={index}>
                <input
                  type="text"
                  value={item.itemName}
                  onChange={(e) => handleChange(e, "itemName", index)}
                />
                <input
                  type="number"
                  value={item.protien}
                  onChange={(e) => handleChange(e, "protien", index)}
                />
                <input
                  type="number"
                  value={item.calories}
                  onChange={(e) => handleChange(e, "calories", index)}
                />
                <input
                  type="number"
                  value={item.carbs}
                  onChange={(e) => handleChange(e, "carbs", index)}
                />
                <input
                  type="number"
                  value={item.fat}
                  onChange={(e) => handleChange(e, "fat", index)}
                />
                <button
                  onClick={() => handleSave(index)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p>Name: {item.itemName}</p>
                <p>Protien: {item.protien}</p>
                <p>Calories: {item.calories}</p>
                <p>Carbs: {item.carbs}</p>
                <p>Fat: {item.fat}</p>
                <div className="counter mb-5">
                  <button
                    className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
                    onClick={() => handleCountUpdate(index, 1)}
                  >
                    +
                  </button>
                  {itemNumber[index]}
                  <button
                    className="ml-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
                    onClick={() => handleCountUpdate(index, -1)}
                  >
                    -
                  </button>
                </div>

                <div className="buttons">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
        {cardItems.length > 0 && <Result cardItems={cardItems} itemNumber={itemNumber} />}
      </div>
    </div>
  );
};

export default Card;
