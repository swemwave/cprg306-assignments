import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md text-center">
        <h1 className="text-2xl mt-4 font-bold mb-4">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}