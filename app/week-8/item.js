export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li className="p-2 m-4 bg-sky-100 max-w-sm" onClick={onSelect}>
      <h2 className="text-xl font-bold  text-blue-800">{name}</h2>
      <p className="text-sm text-blue-800">Buy {quantity} in {category}</p>
    </li>
  );
}