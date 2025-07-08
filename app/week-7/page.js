import ItemList from "./item-list";

export default function Page() {
  return (
    <main className=" bg-slate-800">
      <h1 className="text-3xl text-sky-100 font-bold m-2">Shopping List</h1>
      <ItemList />
    </main>
  );
}
