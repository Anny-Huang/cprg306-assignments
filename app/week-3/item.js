export default function Item({ props }) {
  return (
    <li className=" bg-darkblue">
      <h2 className="text-sm text-white">Name: {props.name}</h2>
      <p className="text-sm text-white">Quantity: {props.quantity}</p>
      <p className="text-sm text-white">Category: {props.category}</p>
    </li>
  );
}