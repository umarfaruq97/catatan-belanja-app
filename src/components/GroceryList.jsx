import { useState } from 'react';
import Item from './Item';

export default function GroceryList({
  items,
  onClearItems,
  onDeleteItem,
  onToggleItem,
}) {
  let [sortBy, setSortBy] = useState('input');
  let sortedItems;
  switch (sortBy) {
    case 'name':
      // fungsi .slice() disini untuk membuat array baru dari reference items. Ini cara untuk menghandle sifat state yang immutable
      sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'checked':
      sortedItems = items.slice().sort((a, b) => a.checked - b.checked);
      break;
    default:
      sortedItems = items;
      break;
  }
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          ))}
        </ul>
      </div>
      <div className="actions">
        <select
          className="p-2 rounded-md text-sm bg-gray-100"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button
          className="bg-red-50 text-red-900 rounded-md text-md font-medium !mt-2"
          onClick={onClearItems}
        >
          Bersihkan Daftar
        </button>
      </div>
    </>
  );
}
