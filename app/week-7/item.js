export default function Item(props) {
  return (
    <li className="p-2 m-4 bg-sky-100 max-w-sm">
      <h2 className="text-xl font-bold  text-blue-800">{props.name}</h2>
      <p className="text-sm text-blue-800">Buy {props.quantity} in {props.category}</p>
    </li>
  );
}