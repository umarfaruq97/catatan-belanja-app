import { useState } from 'react';

export default function Form({ onAddItem }) {
  const quantityOptions = [...Array(20)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));
  let [quantity, setQuantity] = useState(1);
  let [name, setName] = useState('');

  function handleAddItem(e) {
    e.preventDefault();
    onAddItem({ id: Date.now(), name, quantity, checked: false });
    setQuantity(1);
    setName('');
  }

  return (
    <form className="add-form" onSubmit={(e) => handleAddItem(e)}>
      <p className="text-lg">Hari ini belanja apa kita?</p>
      <div>
        <select
          className="p-2 rounded-md text-sm bg-gray-100"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {quantityOptions.map((el) => el)}
        </select>
        <input
          type="text"
          className="p-2 rounded-md text-sm bg-gray-100 min-w-[200px]"
          placeholder="nama barang..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button className="bg-gray-300 text-gray-600 p-2 rounded-md font-medium text-sm">
        Tambah
      </button>
    </form>
  );
}
