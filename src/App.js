import { useState } from 'react';
import Form from './components/Form';
import Card from './components/Cards'
import './App.css';


function App() {

  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
      setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      setItems(updatedItems);
  };

  return (
    <div className="">
        <h1 className='text-3xl text-center font-bold underline mb-5'>Track your calories</h1>
        <Form onAddItem={handleAddItem} />
        <Card items={items} onDeleteItem={handleDeleteItem} />
    </div>
  );
}

export default App;
