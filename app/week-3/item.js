export default function Item({ name, quantity, category }) {
  return (
    <li className=" bg-darkblue">
      <h2 className="text-sm text-white">Name: {name}</h2>
      <p className="text-sm text-white">Quantity: {quantity}</p>
      <p className="text-sm text-white">Category: {category}</p>
    </li>
  );
}