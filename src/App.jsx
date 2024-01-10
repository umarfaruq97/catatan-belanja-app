import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';

function App() {
  const groceryItems = [
    {
      id: 1,
      name: 'Kopi Bubuk',
      quantity: 2,
      checked: true,
    },
    {
      id: 2,
      name: 'Gula Pasir',
      quantity: 5,
      checked: false,
    },
    {
      id: 3,
      name: 'Air Mineral',
      quantity: 3,
      checked: false,
    },
  ];
  let [items, setItems] = useState(groceryItems);
  function handleAddItem(item) {
    setItems([...items, item]);
  }
  function handleClearItems() {
    setItems([]);
  }
  function handleDeleteItem(id) {
    let filtered = items.filter((el) => el.id != id);
    setItems(filtered);
  }
  function handleToggleItem(id) {
    let changedItems = items.map((el) =>
      el.id == id ? { ...el, checked: !el.checked } : el
    );
    setItems(changedItems);
  }
  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onClearItems={handleClearItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Footer items={items} />
    </div>
  );
}
export default App;
