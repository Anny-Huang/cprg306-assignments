export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li className="p-2 m-4 bg-sky-100 max-w-sm hover:bg-sky-200 cursor-pointer" onClick={onSelect}>
      <h2 className="text-xl font-bold  text-blue-950">{name}</h2>
      <p className="text-sm font-medium text-blue-950">Buy {quantity} in {category}</p>
    </li>
  );
}