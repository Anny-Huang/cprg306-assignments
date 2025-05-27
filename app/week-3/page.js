import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="text-4xl font-bold mt-[5%] ml-[15%] mb-5">
        Shopping List
      </h1>
      <ItemList />
    </main>
  );
}
