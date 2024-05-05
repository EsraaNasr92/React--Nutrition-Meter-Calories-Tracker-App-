import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Cards';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemNumber, setItemNumber] = useState([]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    setItemNumber([...itemNumber, 1]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);

    const updatedItemNumber = [...itemNumber];
    updatedItemNumber.splice(index, 1);
    setItemNumber(updatedItemNumber);
  };

  return (
    <div className="">
      <h1 className='text-3xl text-center font-bold underline mb-5'>Track your calories</h1>
      <Form onAddItem={handleAddItem} />
      <Card items={items} itemNumber={itemNumber} onDeleteItem={handleDeleteItem} setItemNumber={setItemNumber} />
    </div>
  );
}

export default App;
