export default function Footer({ items }) {
  if (items.length == 0) {
    return <footer className="stats">Daftar barang masih kosong!</footer>;
  }
  const checkedItems = items.filter((el) => el.checked).length;
  const percentage = Math.round((checkedItems * 100) / items.length);
  return (
    <footer className="stats">
      Ada {items.length} barang di daftar belanjaan, {checkedItems} barang sudah
      dibeli ({percentage}%)
    </footer>
  );
}
